import React, { Component, useState } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
// import ReactHighstock from "react-highcharts/ReactHighstock.src";
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

function flattenArray(arrayData, columnName, type = "string") {
  var newArray = [];
  for (let i = 0; i < arrayData.length; i++) {
    const element = arrayData[i][columnName];
    if (type === "number") {
      element = parseFloat(element.replace("%", ""));
    }
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
    this.setState({
      dates: flattenArray(this.state.covidData, "Day of Week Ending"),
    });
    this.setState({
      corporate: flattenArray(
        this.state.covidData,
        "Corporate Variance v.2019",
        "number"
      ),
    });
    this.setState({
      ticket: flattenArray(
        this.state.covidData,
        "Ticket Variance v.2019",
        "number"
      ),
    });
    this.setState({
      sales: flattenArray(
        this.state.covidData,
        "Sales Variance v.2019",
        "number"
      ),
    });
    this.setState({
      leisure: flattenArray(
        this.state.covidData,
        "Leisure/Other Variance v.2019",
        "number"
      ),
    });
    this.setState({
      online: flattenArray(
        this.state.covidData,
        "Online Variance v.2019",
        "number"
      ),
    });
    console.log(
      flattenArray(this.state.covidData, "Ticket Variance v.2019", "number")
    );
  }

  render() {
    var dates = this.state.dates;

    const options1 = {
      chart: {
        zoomType: "x",
        backgroundColor: "#fff",
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
        floor: -100,
        ceiling: 0,
        title: {
          text: "Variance %",
          tickInterval: 11,
        },
        style: {
          fontFamily: "SourceSansPro-SemiBold, Arial, Helvetica, sans-serif",
          color: "#2A2B2C",
        },
        legend: {
          enabled: true,
        },
      },
      xAxis: {
        labels: {
          formatter: function() {
            return dates[this.value];
          },
        },
        alternateGridColor: "#f7f5f5",
        style: {
          fontFamily: "SourceSansPro-SemiBold, Arial, Helvetica, sans-serif",
          color: "",
        },
      },
      navigator: {
        xAxis: {
          labels: {
            formatter: function(f) {
              return dates[this.value];
            },
          },
        },
      },
      rangeSelector: {
        enabled: false,
      },
      tooltip: {
        formatter: function() {
          return this.points.reduce(function(s, point) {
            return s + "<br/>" + point.series.name + ": " + point.y + "%";
          }, "<b>" + this.x + "</b>");
        },
        shared: true,
      },
      series: [
        {
          name: "Ticket Variance",
          data: this.state.ticket,
          type: "line",
          color: "#189bb0",
        },
        {
          name: "Sales Variance",
          data: this.state.sales,
          type: "line",
          color: "#ffca75",
        },
      ],
    };

    return (
      <div>
        {this.state.dates && this.state.ticket && this.state.sales && (
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"stockChart"}
            options={options1}
          />
        )}
      </div>
    );
  }
}

export default HCGraph;
