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
      stateData: [],
      topData: [],
      mapOptions: [],
      loaded: false,
    };
  }

  async componentDidMount() {
    var e = this;

    const topology = await fetch(
      "https://code.highcharts.com/mapdata/countries/us/us-all.geo.json"
    ).then((response) => response.json());

    const covidDataCall = new Promise((resolve, reject) => {
      axios({
        method: "get",
        url:
          "https://www2.arccorp.com/globalassets/covid19/covid-map.xlsx?" +
          new Date().toLocaleString(),
        responseType: "arraybuffer",
      }).then(function(response) {
        console.log("===== Map Data Chart Loaded ===== ");
        var data = new Uint8Array(response.data);
        var workbook = XLSX.read(data, { type: "array" });
        console.log(workbook);
        var workbookData = workbook["Sheets"]["Map_View_data"];

        var json = XLSX.utils.sheet_to_json(workbookData, {
          raw: false,
        });

        console.log(json);

        var stateArray = [];

        for (let i = 0; i < json.length; i++) {
          const element = json[i];
          if (element["State"]) {
            stateArray.push({
              "postal-code": stateNameToAbbreviation(element["State"]),
              value: parseFloat(element["YoY Change"].replace("%", "")),
            });
          }
        }

        e.setState({ stateData: stateArray });

        console.log(stateArray);

        resolve(true);
      });
    });

    Promise.all([covidDataCall, topology])
      .then((values) => {
        e.dataLoaded();
        e.setState({ topData: topology });
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  dataLoaded() {
    console.log("loaded!");
    console.log(this.state.stateData);
    const options1 = {
      title: "",
      chart: {
        map: usAll,
        borderWidth: 0,
      },
      exporting: {
        sourceWidth: 600,
        sourceHeight: 500,
      },
      series: [
        {
          data: this.state.stateData,
          mapData: usAll,
          showInLegend: false,
          //joinBy: null,
          joinBy: "postal-code",
          name: "USA",
          dataLabels: {
            enabled: true,
            format: "{point.name}",
          },

          tooltip: {
            pointFormat: "{point.postal-code}: {point.value}%",
          },
        },
      ],
      colorAxis: {
        // stops: [
        //   [-100, "#EF233C"],
        //   [100, "#189bb0"],
        // ],
        //min: -100,
        //max: 100,
        minColor: "#ffffff",
        maxColor: "#8AC926",
        type: "linear",
      },
      credits: {
        enabled: false,
      },
      mapNavigation: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      exporting: {
        sourceWidth: 600,
        sourceHeight: 500,
      },
      tooltip: {
        backgroundColor: "#ffffff",
        borderWidth: 0,
        borderRadius: 5,
        style: {
          fontSize: "14px",
        },
      },
    };
    this.setState({ mapOptions: options1, loaded: true });
  }

  render() {
    return (
      <div className="graphInfo ">
        <div className="graphTitle pt-0">
          U.S. State-by-State Air Travel Recovery
        </div>
        <div className="graphSubTitle">
          Based on Round-Trip Air Travel Destination
        </div>
        <div className="covidSheets">
          <a
            href="https://www2.arccorp.com/globalassets/covid19/covid-map.xlsx"
            className="covidDownload"
          >
            Download Full Recovery Data
          </a>{" "}
          <div class="covidNoteDiv" style={{ paddingTop: "15px" }}>
            <p class="covidNote">*Compared to similiar week in 2019</p>
          </div>
        </div>

        {this.state.loaded && (
          <div style={{ margin: "30px 0 90px" }}>
            <HighchartsReact
              highcharts={Highcharts}
              containerProps={{ className: "covidMapContainer" }}
              constructorType={"mapChart"}
              options={this.state.mapOptions}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Map;

function stateNameToAbbreviation(name) {
  let states = {
    arizona: "AZ",
    alabama: "AL",
    alaska: "AK",
    arkansas: "AR",
    california: "CA",
    colorado: "CO",
    connecticut: "CT",
    "district of columbia": "DC",
    delaware: "DE",
    florida: "FL",
    georgia: "GA",
    hawaii: "HI",
    idaho: "ID",
    illinois: "IL",
    indiana: "IN",
    iowa: "IA",
    kansas: "KS",
    kentucky: "KY",
    louisiana: "LA",
    maine: "ME",
    maryland: "MD",
    massachusetts: "MA",
    michigan: "MI",
    minnesota: "MN",
    mississippi: "MS",
    missouri: "MO",
    montana: "MT",
    nebraska: "NE",
    nevada: "NV",
    "new hampshire": "NH",
    "new jersey": "NJ",
    "new mexico": "NM",
    "new york": "NY",
    "north carolina": "NC",
    "north dakota": "ND",
    ohio: "OH",
    oklahoma: "OK",
    oregon: "OR",
    pennsylvania: "PA",
    "rhode island": "RI",
    "south carolina": "SC",
    "south dakota": "SD",
    tennessee: "TN",
    texas: "TX",
    utah: "UT",
    vermont: "VT",
    virginia: "VA",
    washington: "WA",
    "west virginia": "WV",
    wisconsin: "WI",
    wyoming: "WY",
    "american samoa": "AS",
    guam: "GU",
    "northern mariana islands": "MP",
    "puerto rico": "PR",
    "us virgin islands": "VI",
    "us minor outlying islands": "UM",
  };

  let a = name
    .trim()
    .replace(/[^\w ]/g, "")
    .toLowerCase(); //Trim, remove all non-word characters with the exception of spaces, and convert to lowercase
  if (states[a] !== null) {
    return states[a];
  }

  return null;
}
