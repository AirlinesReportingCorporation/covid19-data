import React, { Component, useState } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
// import ReactHighstock from "react-highcharts/ReactHighstock.src";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import moment from "moment";
import axios from "axios";
import XLSX from "xlsx";

import usAll from "@highcharts/map-collection/countries/us/us-all.geo.json";

highchartsMap(Highcharts);

function flattenArray(arrayData, columnName, type = "string") {
  var newArray = [];
  for (let i = 0; i < arrayData.length; i++) {
    const element = arrayData[i][columnName];
    if (type === "number") {
      element = parseFloat(element.replace("%", ""));
    }
    if (type === "date") {
      element = moment(element).format("MMM D");
    }
    newArray.push(element);
  }
  return newArray;
}

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      covidData: [],
      mapData: [],
    };
  }

  async componentDidMount() {
    var e = this;

    const topology = await fetch(
      "https://code.highcharts.com/mapdata/countries/us/us-all.topo.json"
    ).then((response) => response.json());

    const covidDataCall = new Promise((resolve, reject) => {
      axios({
        method: "get",
        url:
          "https://www2.arccorp.com/globalassets/covid19/covid-map.xlsx?" +
          new Date().toLocaleString(),
        responseType: "arraybuffer",
      }).then(function(response) {
        console.log("===== All Airline Data Chart Loaded ===== ");
        var data = new Uint8Array(response.data);
        var workbook = XLSX.read(data, { type: "array" });
        console.log(workbook);
        var workbookData = workbook["Sheets"]["covid-map"];

        var json = XLSX.utils.sheet_to_json(workbookData, {
          raw: false,
        });

        console.log(json);

        e.setState({ covidData: json });

        resolve(true);
      });
    });

    Promise.all([covidDataCall, topology])
      .then((values) => {
        e.dataLoaded();
        e.setState({ mapData: topology });
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  dataLoaded() {
    console.log("loaded!");
  }

  render() {
    var dates = this.state.dates;

    const options1 = {
      chart: {
        map: usAll,
        borderWidth: 0,
      },
      exporting: {
        sourceWidth: 600,
        sourceHeight: 500
      },
      series: [
        {
          mapData: usAll,
          name: "USA",
          dataLabels: {
            //enabled: true,
            format: "{point.name}"
          }
        }
      ],
      title: {
        text: "Map Demo",
      },
      colorAxis: {
        min: 0,
        minColor: "#E6E7E8",
        maxColor: "#005645"
      },
      credits: {
        enabled: false,
      },
      mapNavigation: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
    };

    return (
      <div>
        {true && (
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"mapChart"}
            options={options1}
          />
        )}
      </div>
    );
  }
}

export default Map;
