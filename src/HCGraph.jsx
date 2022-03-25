import React, { Component, useState } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
// import ReactHighstock from "react-highcharts/ReactHighstock.src";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
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
    if (type === "date") {
      element = moment(element).format("MMM D");
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
      covid52Week: [],
      dates: [],
      ticket: [],
      sales: [],
      leisure: [],
      corporate: [],
      online: [],
      thisWeek: [],
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
      }).then(function (response) {
        console.log("===== Covid Sales Data Loaded ===== ");
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

    const covid52Week = new Promise((resolve, reject) => {
      axios({
        method: "get",
        url:
          "https://www2.arccorp.com/globalassets/covid19/52-covid-data.xlsx?" +
          new Date().toLocaleString(),
        responseType: "arraybuffer",
      }).then(function (response) {
        console.log("===== Covid 52 Week Data Loaded ===== ");
        var data = new Uint8Array(response.data);
        var workbook = XLSX.read(data, { type: "array" });
        console.log(workbook);
        var workbookData = workbook["Sheets"]["52-covid-data"];

        var json = XLSX.utils.sheet_to_json(workbookData, {
          raw: false,
        });
        console.log(json);

        e.setState({ covid52Week: json });

        resolve(true);
      });
    });

    Promise.all([covidDataCall, covid52Week])
      .then((values) => {
        e.dataLoaded();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  dataLoaded() {
    console.log("loaded!");
    console.log(
      flattenArray(this.state.covidData, "Day of Week Ending", "date")
    );
    this.setState({
      dates: flattenArray(this.state.covidData, "Day of Week Ending", "date"),
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

    this.setState({
      covid52Week: this.state.covid52Week[this.state.covid52Week.length - 1],
    });

    console.log("52week");
    console.log(this.state.covid52Week);

    this.setState({
      thisWeek: Object.values(this.state.covid52Week),
    });

    console.log(this.state.thisWeek);
  }

  render() {
    var dates = this.state.dates;

    const options1 = {
      chart: {
        zoomType: "x",
        backgroundColor: "#fff",
        events: {
          load: function () {
            var chart = this,
              xAxis = chart.xAxis[0],
              newStart = dates.length - 7,
              newEnd = dates.length - 1;

            xAxis.setExtremes(newStart, newEnd);
          },
        },
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
      legend: {
        enabled: true,
        align: "left",
        verticalAlign: "top",
        borderWidth: 0,
        fontWeight: "bold",
      },
      yAxis: {
        opposite: false,
        floor: -100,
        ceiling: 0,
        title: {
          text: "Variance %",
          tickInterval: 1,
        },
        legend: {
          enabled: true,
          align: "left",
          verticalAlign: "top",
          borderWidth: 0,
        },
        labels: {
          style: {
            fontFamily: "SourceSansPro-SemiBold, Arial, Helvetica, sans-serif",
            color: "#2A2B2C",
          },
        },
      },
      xAxis: {
        tickLength: 0,
        labels: {
          formatter: function () {
            return dates[this.value];
          },
          style: {
            fontFamily: "SourceSansPro-Bold, Arial, Helvetica, sans-serif",
            color: "#000",
          },
        },
        alternateGridColor: "#f7f5f5",
      },
      navigator: {
        xAxis: {
          labels: {
            formatter: function (f) {
              return dates[this.value];
            },
            style: {
              fontFamily:
                "SourceSansPro-SemiBold, Arial, Helvetica, sans-serif",
              color: "#000",
              fontWeight: "bold",
            },
          },
        },
      },
      rangeSelector: {
        enabled: false,
      },
      tooltip: {
        formatter: function () {
          return this.points.reduce(function (s, point) {
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
          color: "#000",
          marker: {
            enabled: true,
            radius: 3.5,
            symbol: "circle",
          },
        },
        {
          name: "Sales Variance",
          data: this.state.sales,
          type: "line",
          color: "#ffca75",
          marker: {
            enabled: true,
            radius: 3.5,
            symbol: "circle",
          },
        },
      ],
      credits: {
        enabled: false,
      },
    };
    const options2 = {
      chart: {
        zoomType: "x",
        backgroundColor: "#fff",
        events: {
          load: function () {
            var chart = this,
              xAxis = chart.xAxis[0],
              newStart = dates.length - 7,
              newEnd = dates.length - 1;

            xAxis.setExtremes(newStart, newEnd);
          },
        },
      },
      title: {
        text: "Ticket Variance Sold by Segment",
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
      legend: {
        enabled: true,
        align: "left",
        verticalAlign: "top",
        borderWidth: 0,
      },
      yAxis: {
        opposite: false,
        floor: -100,
        ceiling: 0,
        endOnTick: true,
        legend: {
          align: "left",
          verticalAlign: "top",
          borderWidth: 0,
        },
        labels: {
          style: {
            fontFamily: "SourceSansPro-SemiBold, Arial, Helvetica, sans-serif",
            color: "#2A2B2C",
          },
        },
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
          align: "left",
          verticalAlign: "top",
          borderWidth: 0,
        },
      },
      xAxis: {
        tickLength: 0,
        labels: {
          formatter: function () {
            return dates[this.value];
          },
          style: {
            fontFamily: "SourceSansPro-Bold, Arial, Helvetica, sans-serif",
            color: "#2A2B2C",
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
            formatter: function (f) {
              return dates[this.value];
            },
            style: {
              fontFamily: "SourceSansPro-Bold, Arial, Helvetica, sans-serif",
              color: "#2A2B2C",
            },
          },
        },
      },
      rangeSelector: {
        enabled: false,
      },
      tooltip: {
        formatter: function () {
          return this.points.reduce(function (s, point) {
            return s + "<br/>" + point.series.name + ": " + point.y + "%";
          }, "<b>" + this.x + "</b>");
        },
        shared: true,
      },
      series: [
        {
          name: "Corporate",
          data: this.state.corporate,
          type: "line",
          color: "#000",
          marker: {
            enabled: true,
            radius: 3.5,
            symbol: "circle",
          },
        },
        {
          name: "Online",
          data: this.state.online,
          type: "line",
          color: "#ffca75",
          marker: {
            enabled: true,
            radius: 3.5,
            symbol: "circle",
          },
        },
        {
          name: "Leisure/Other",
          data: this.state.leisure,
          type: "line",
          color: "#ff1b71",
          marker: {
            enabled: true,
            radius: 3.5,
            symbol: "circle",
          },
        },
      ],
      credits: {
        enabled: false,
      },
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
        <div className="row">
          <div className="col-lg-6">
            <div className="avg-card">
              <h1 className="average">{this.state.thisWeek[5]}</h1>
              <div className="avg-card-main">Ticket Variance vs. Same Week 2019</div>
              <div className="avg-card-small">52-Week Rolling Average</div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="avg-card">
              <h1 className="average">{this.state.thisWeek[6]}</h1>
              <div className="avg-card-main">Sales Variance vs. Same Week 2019</div>
              <div className="avg-card-small">52-Week Rolling Average</div>
            </div>
          </div>
        </div>
        {this.state.dates &&
          this.state.online &&
          this.state.leisure &&
          this.state.corporate && (
            <HighchartsReact
              highcharts={Highcharts}
              constructorType={"stockChart"}
              options={options2}
            />
          )}
        <div className="row">
          <div className="col-lg-4">
            <div className="avg-card">
              <h1 className="average">{this.state.thisWeek[2]}</h1>
              <div className="avg-card-main">Corporate</div>
              <div className="avg-card-small">52-Week Rolling Average</div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="avg-card">
              <div className="avg-card-inner">
              <h1 className="average">{this.state.thisWeek[3]}</h1>
              <div className="avg-card-main">Online</div>
              <div className="avg-card-small">52-Week Rolling Average</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="avg-card">
              <h1 className="average">{this.state.thisWeek[4]}</h1>
              <div className="avg-card-main">Leisure/Other</div>
              <div className="avg-card-small">52-Week Rolling Average</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HCGraph;
