import React, { Component, useState } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import axios from "axios";
import XLSX from "xlsx";

var dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
var dates = [
  new Date(2021, 9, 24),
  new Date(2021, 9, 31),
  new Date(2021, 10, 7),
  new Date(2021, 10, 14),
  new Date(2021, 10, 21),
  new Date(2021, 11, 5),
  new Date(2021, 11, 12),
];

function flattenArray(arrayData, columnName) {
  var newArray = [];
  for (let i = 0; i < arrayData.length; i++) {
    const element = arrayData[i][columnName];
    newArray.push(element);
  }
  return newArray;
}

class HCGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      covidData: [],
      dates: [],
      ticket: [],
      sales: [],
      leisure: [],
      corporate: [],
      online: [],
    };
  }

  componentDidMount() {
    var e = this;

    const covidDataCall = new Promise((resolve, reject) => {
      axios({
        method: "get",
        url:
          "https://www2.arccorp.com/globalassets/covid19/covid-data.xlsx?" +
          new Date().toLocaleString(),
        responseType: "arraybuffer",
      }).then(function(response) {
        console.log("===== All Airline Data Chart Loaded ===== ");
        var data = new Uint8Array(response.data);
        var workbook = XLSX.read(data, { type: "array" });
        console.log(workbook);
        var workbookData = workbook["Sheets"]["covid-data"];

        var json = XLSX.utils.sheet_to_json(workbookData, {
          raw: false,
        });

        console.log(json);

        e.setState({ covidData: json });

        resolve(true);
      });
    });

    Promise.all([covidDataCall])
      .then((values) => {
        e.dataLoaded();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  dataLoaded() {
    console.log("loaded!");
    console.log(flattenArray(this.state.covidData, "Day of Week Ending"));
  }

  render() {
    const options1 = {
      chart: {
        width: 1170,
        height: 530,
        zoomType: "x",
        backgroundColor: "#D4D4D4",
      },
      title: {
        text: "U.S. Travel Agency Seven-Day Air Ticket & Sales Volume",
        style: {
          fontSize: "30px",
          fontFamily: "SourceSansPro-SemiBold, Arial, Helvetica, sans-serif",
          color: "#2A2B2C",
        },
        align: "left",
      },
      subtitle: {
        text: "Tickets Issued for All Itineraries",
        style: {
          fontSize: "18px",
          fontFamily: "SourceSansPro-SemiBold, Arial, Helvetica, sans-serif",
          color: "#2A2B2C",
        },
        align: "left",
      },
      yAxis: {
        title: {
          text: "Variance %",
          tickInterval: 10,
        },
        style: {
          fontFamily: "SourceSansPro-SemiBold, Arial, Helvetica, sans-serif",
          color: "#2A2B2C",
        },
      },
      xAxis: {
        type: "datetime",
        categories: this.state.dates,
        tickCount: 10,
        style: {
          fontFamily: "SourceSansPro-SemiBold, Arial, Helvetica, sans-serif",
          color: "#2A2B2C",
        },
      },
      tooltip: {
        shared: true,
      },
      series: [
        {
          name: "Ticket Variance",
          data: [-42.7, -39.9, -36.4, -37.1, -36.0, -45.1, -27.5, -48.6],
          color: "#316677",
        },
        {
          name: "Sales Variance",
          data: [-40.7, -33.9, -39.4, -37.1, -56.0, -45.1, -21.5, -28.6],
        },
      ],
    };

    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={options1}
        />
      </div>
    );
  }
}

export default HCGraph;
