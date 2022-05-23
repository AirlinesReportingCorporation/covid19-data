import React, { Component, useState } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
// import ReactHighstock from "react-highcharts/ReactHighstock.src";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import axios from "axios";
import XLSX from "xlsx";

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

function createAlternatingBands(length) {
  var temp = [];

  var tempLength = length;

  for (let i = 0; i <= tempLength; i = i + 2) {
    temp.push({
      color: "#f7f5f5", // Color value
      from: i + 0.5, // Start of the plot band
      to: i + 1.5, // End of the plot band .5 1.5  2.5 3.5
      zIndex: -1,
      borderWidth: 1,
      borderColor: "#aaaaaa",
    });
  }

  return temp;
}
class HCGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      covidDate: [],
      covidAgencyData: [],
      covidTicketSalesData: [],
      covid52Agency: [],
      covid52TicketSales: [],
      dates: [],
      ticket: [],
      sales: [],
      leisure: [],
      corporate: [],
      online: [],
      thisWeek: [],
      alternatingBands: [],
      loaded: false,
      options1: {},
      options2: {},
    };
  }

  componentDidMount() {
    var e = this;

    const covidAgencyDataCall = new Promise((resolve, reject) => {
      axios({
        method: "get",
        url:
          "https://www2.arccorp.com/globalassets/covid19/agency-type.xlsx?" +
          new Date().toLocaleString(),
        responseType: "arraybuffer",
      }).then(function(response) {
        console.log("===== Covid Agency Data Loaded ===== ");
        var data = new Uint8Array(response.data);
        var workbook = XLSX.read(data, { type: "array" });
        console.log(workbook);
        var workbookData = workbook["Sheets"]["Sheet 1"];

        var json = XLSX.utils.sheet_to_json(workbookData, {
          raw: false,
        });

        console.log(json);

        e.setState({ covidAgencyData: json });

        resolve(true);
      });
    });
    
    const covidTicketSalesDataCall = new Promise((resolve, reject) => {
      axios({
        method: "get",
        url:
          "https://www2.arccorp.com/globalassets/covid19/ticket-sales.xlsx?" +
          new Date().toLocaleString(),
        responseType: "arraybuffer",
      }).then(function(response) {
        console.log("===== Covid Ticket/Sales Data Loaded ===== ");
        var data = new Uint8Array(response.data);
        var workbook = XLSX.read(data, { type: "array" });
        console.log(workbook);
        var workbookData = workbook["Sheets"]["Sheet 1"];

        var json = XLSX.utils.sheet_to_json(workbookData, {
          raw: false,
        });

        console.log(json);

        e.setState({ covidTicketSalesData: json });

        resolve(true);
      });
    });

    const covid52Agency = new Promise((resolve, reject) => {
      axios({
        method: "get",
        url:
          "https://www2.arccorp.com/globalassets/covid19/52-agency-type.xlsx?" +
          new Date().toLocaleString(),
        responseType: "arraybuffer",
      }).then(function(response) {
        console.log("===== Covid 52 Week Agency Data Loaded ===== ");
        var data = new Uint8Array(response.data);
        var workbook = XLSX.read(data, { type: "array" });
        console.log(workbook);
        var workbookData = workbook["Sheets"]["Sheet 1"];

        var json = XLSX.utils.sheet_to_json(workbookData, {
          raw: false,
        });
        console.log(json);

        e.setState({ covid52Agency: json });

        resolve(true);
      });
    });

    const covid52TicketSales = new Promise((resolve, reject) => {
      axios({
        method: "get",
        url:
          "https://www2.arccorp.com/globalassets/covid19/52-ticket-sales.xlsx?" +
          new Date().toLocaleString(),
        responseType: "arraybuffer",
      }).then(function(response) {
        console.log("===== Covid 52 Week Ticket/Sales Data Loaded ===== ");
        var data = new Uint8Array(response.data);
        var workbook = XLSX.read(data, { type: "array" });
        console.log(workbook);
        var workbookData = workbook["Sheets"]["Sheet 1"];

        var json = XLSX.utils.sheet_to_json(workbookData, {
          raw: false,
        });
        console.log(json);

        e.setState({ covid52TicketSales: json });

        resolve(true);
      });
    });

    Promise.all([covidAgencyDataCall, covidTicketSalesDataCall, covid52Agency, covid52TicketSales])
      .then((values) => {
        e.dataLoaded();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  dataLoaded() {
    var e = this;
    console.log("loaded!");
    this.setState({ loaded: true });

    console.log(
      flattenArray(this.state.covidAgencyData, "Day of Week Ending", "date")
    );
    console.log(
      flattenArray(this.state.covidTicketSalesData, "Day of Week Ending", "date")
    );
    console.log("loaded Agency Dates");
    if (this.state.covidAgencyData.length == this.state.covidTicketSalesData){
    this.setState({
      dates: flattenArray(this.state.covidAgencyData, "Day of Week Ending", "date"),
    })
  }
    else if (this.state.covidAgencyData < this.state.covidTicketSalesData) {
      this.setState({
        dates: flattenArray(this.state.covidAgencyData, "Day of Week Ending", "date"),
      })
    }
    else if (this.state.covidAgencyData > this.state.covidTicketSalesData){
      this.setState({
        dates: flattenArray(this.state.covid52TicketSales, "Day of Week Ending", "date"),
      })
    }

    this.setState({
      corporate: flattenArray(
        this.state.covidAgencyData,
        "Corporate",
        "number"
      ),
    });
    this.setState({
      ticket: flattenArray(
        this.state.covidTicketSalesData,
        "Ticket Variance vs. 2019",
        "number"
      ),
    });
    this.setState({
      sales: flattenArray(
        this.state.covidTicketSalesData,
        "Sales Variance v. 2019  ",
        "number"
      ),
    });
    this.setState({
      leisure: flattenArray(
        this.state.covidAgencyData,
        "Leisure/Other",
        "number"
      ),
    });
    this.setState({
      online: flattenArray(
        this.state.covidAgencyData,
        "Online",
        "number"
      ),
    });

    this.setState({
      covid52Agency: this.state.covid52Agency[this.state.covid52Agency.length - 1],
    });
    this.setState({
      covid52TicketSales: this.state.covid52TicketSales[this.state.covid52TicketSales.length - 1],
    });

    console.log("52week Data");
    console.log(this.state.covid52Agency);
    console.log(this.state.covid52TicketSales);

    this.setState({
      alternatingBands: createAlternatingBands(e.state.covidAgencyData.length),
    });

    console.log(this.state.thisWeek);

    this.setOptions();
  }

  setOptions() {
    var dates = this.state.dates;
    const options1 = {
      chart: {
        styledMode: true,
        plotBorderColor: "#2a2b2c",
        plotBorderWidth: 1,
        margin: [150, 1, 40, 100],
        zoomType: "x",
        backgroundColor: "#fff",
        style: {
          fontFamily: "Source Sans Pro, Arial, Helvetica, sans-serif",
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
          color: "#888888",
        },
        align: "left",
      },
      legend: {
        enabled: true,
        align: "left",
        verticalAlign: "top",
        borderWidth: 0,
        itemStyle: {
          "font-size": "14px",
        },
        useHTML: true,
        labelFormatter: function(s, point) {
          return (
            "<div class='d-flex align-items-center'><div class='graphToggleCheckbox'><i class='fas fa-check'></i></div><div class='tooltip-dot-custom' style='color:" +
            this.color +
            "'>\u25CF</div>" +
            this.name +
            "</div>"
          );
        },
        symbolWidth: 0,
      },
      yAxis: {
        opposite: false,
        gridLineColor: "#aaaaaa",
        title: {
          margin: 43,
          text: "Variance %",
          style: {
            textTransform: "uppercase",
            fontFamily: "SourceSansPro-SemiBold",
            fontSize: "14px",
            paddingRight: "40px",
          },
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
            fontSize: "14px",
          },
        },
        gridZIndex: "0",
      },
      xAxis: {
        crosshair: false,
        //overscroll: .5,
        ordinal: false,
        lineWidth: 0,
        min: -0.5,
        range: 12,
        max: dates.length - 0.5,
        gridLineColor: "#aaaaaa",
        minPadding: 5000,
        labels: {
          useHTML: true,
          formatter: function() {
            return dates[this.value];
          },
          style: {
            fontFamily: "SourceSansPro-Bold, Arial, Helvetica, sans-serif",
            textTransform: "uppercase",
            color: "#2a2b2c",
            fontSize: "16px",
          },
        },
        plotBands: this.state.alternatingBands,
        //alternateGridColor: "#f7f5f5",
      },
      scrollbar: {
        enabled: false,
      },
      navigator: {
        margin: 70,
        maskFill: "rgba(42, 43, 44,0.2)",
        xAxis: {
          labels: {
            formatter: function(f) {
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
      plotOptions: {
        series: {
          pointStart: dates.legnth,
          pointEnd: dates.length - 7,
        },
      },
      rangeSelector: {
        enabled: false,
      },
      tooltip: {
        backgroundColor: "#ffffff",
        borderWidth: 0,
        borderRadius: 5,
        style: {
          fontSize: "14px",
        },
        formatter: function() {
          return this.points.reduce(function(s, point) {
            return (
              s +
              "<br/>" +
              "<span class='tooltip-dot-custom' style='color:" +
              point.series.color +
              "'>\u25CF</span>" +
              point.series.name +
              ": " +
              point.y +
              "%"
            );
          }, "<b>" + dates[this.x] + "</b>");
        },
        shared: true,
        useHTML: true,
      },
      series: [
        {
          name: "Ticket Variance",
          data: this.state.ticket,
          softThreshold: true,
          type: "line",
          color: "#000",
          lineWidth: 3,
          marker: {
            enabled: true,
            radius: 5.0,
            symbol: "circle",
            states: {
              hover: {
                lineWidth: 3,
                lineWidthPlus: 0,
                radiusPlus: 1,
              },
            },
          },
          states: {
            hover: {
              lineWidth: 3,
              lineWidthPlus: 0,
              radiusPlus: 1,
            },
          },
        },
        {
          name: "Sales Variance",
          data: this.state.sales,
          softThreshold: true,
          type: "line",
          color: "#ffca75",
          lineWidth: 3,
          marker: {
            enabled: true,
            radius: 5.0,
            symbol: "circle",
            states: {
              hover: {
                lineWidth: 3,
                lineWidthPlus: 0,
                radiusPlus: 1,
              },
              selected: {
                lineWidthPlus: 0,
              },
            },
          },
          states: {
            hover: {
              lineWidth: 3,
              lineWidthPlus: 0,
              radiusPlus: 1,
            },
          },
        },
      ],
      credits: {
        enabled: false,
      },
    };

    const options2 = Object.assign({}, options1);

    options2.title = {
      text: "Ticket Variance Sold by Segment",
      style: {
        fontSize: "30px",
        fontFamily: "SourceSansPro-SemiBold, Arial, Helvetica, sans-serif",
        color: "#2A2B2C",
      },
      align: "left",
    };

    options2.subtitle = {
      text: "Tickets Issued for All Itineraries",
      style: {
        fontSize: "18px",
        fontFamily: "SourceSansPro-SemiBold, Arial, Helvetica, sans-serif",
        color: "#888888",
      },
      align: "left",
    };

    options2.series = [
      {
        name: "Corporate",
        softThreshold: true,
        data: this.state.corporate,
        type: "line",
        color: "#000",
        lineWidth: 3,
        marker: {
          enabled: true,
          radius: 5.0,
          symbol: "circle",
          states: {
            hover: {
              lineWidthPlus: 0,
              radiusPlus: 1,
            },
          },
        },
        states: {
          hover: {
            lineWidth: 3,
            lineWidthPlus: 0,
            radiusPlus: 1,
          },
        },
      },
      {
        name: "Online",
        softThreshold: true,
        data: this.state.online,
        type: "line",
        color: "#ffca75",
        lineWidth: 3,
        marker: {
          enabled: true,
          radius: 5.0,
          symbol: "circle",
          states: {
            hover: {
              lineWidthPlus: 0,
              radiusPlus: 1,
            },
          },
        },
        states: {
          hover: {
            lineWidth: 3,
            lineWidthPlus: 0,
            radiusPlus: 1,
          },
        },
      },
      {
        name: "Leisure/Other",
        softThreshold: true,
        data: this.state.leisure,
        type: "line",
        color: "#ff1b71",
        lineWidth: 3,
        marker: {
          enabled: true,
          radius: 5.0,
          symbol: "circle",
          states: {
            hover: {
              lineWidthPlus: 0,
              radiusPlus: 1,
            },
          },
        },
        states: {
          hover: {
            lineWidth: 3,
            lineWidthPlus: 0,
            radiusPlus: 1,
          },
        },
      },
    ];

    this.setState({
      options1: options1,
      options2: options2,
    });
  }

  render() {
    var dates = this.state.dates;
    var bands = this.state.alternatingBands;

    return (
      <div>
        {this.state.loaded && this.state.options1 && this.state.options2 ? (
          <div>
            <div className="graphInfo">
              {this.state.dates && this.state.ticket && this.state.sales && (
                <HighchartsReact
                  highcharts={Highcharts}
                  containerProps={{ className: "covidChartContainer" }}
                  constructorType={"stockChart"}
                  options={this.state.options1}
                />
              )}
              <div className="covidSheets">
                <a
                  href="https://www2.arccorp.com/globalassets/covid19/covid-data.xlsx"
                  className="covidDownload"
                >
                  Download Full Recovery Data
                </a>{" "}
                <div className="covidNoteDiv">
                  <p className="covidNote">
                    *Ticket variance: Total number of tickets purchased compared
                    to the same period in 2019.
                  </p>
                  <p className="covidNote">
                    *Sales variance: Total value (dollar amount) paid compared
                    to the same period in 2019.
                  </p>
                </div>
              </div>
              <div className="container avg-container">
                <div className="row covid19-row">
                  <div className="col-lg-6">
                    <div className="avg-card">
                      <div className="avg-card-inner">
                        <div className="average">{this.state.thisWeek[5]}</div>
                        <div className="avg-card-main">
                          Ticket Variance vs. Same Week 2019
                        </div>
                        <div className="avg-card-small">
                          52-Week Rolling Average
                        </div>
                        <div className="avg-circle">
                          <img
                            src="https://www2.arccorp.com/globalassets/covid19/avg-circle.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="avg-card">
                      <div className="avg-card-inner">
                        <h1 className="average">{this.state.thisWeek[6]}</h1>
                        <div className="avg-card-main">
                          Sales Variance vs. Same Week 2019
                        </div>
                        <div className="avg-card-small">
                          52-Week Rolling Average
                        </div>
                        <div className="avg-circle">
                          <img
                            src="https://www2.arccorp.com/globalassets/covid19/avg-circle.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <p className="mb-0">
                      <small>
                        *The 52-week rolling average is the average ticketing
                        volume and other variances over the past 52 weeks,
                        ending with the most recent week, compared to 2019
                        baseline numbers.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="segment"></div>

            <hr className="covid-hr" />
            <div className="graphInfo">
              {this.state.dates &&
                this.state.online &&
                this.state.leisure &&
                this.state.corporate && (
                  <HighchartsReact
                    highcharts={Highcharts}
                    containerProps={{ className: "covidChartContainer" }}
                    constructorType={"stockChart"}
                    options={this.state.options2}
                  />
                )}
              <div className="covidSheets">
                <a
                  href="https://www2.arccorp.com/globalassets/covid19/covid-data.xlsx"
                  className="covidDownload"
                >
                  Download Full Recovery Data
                </a>
              </div>
              <div className="container avg-container">
                <div className="row covid19-row">
                  <div className="col-lg-4">
                    <div className="avg-card">
                      <div className="avg-card-inner">
                        <h1 className="average">{this.state.thisWeek[2]}</h1>
                        <div className="avg-card-main">Corporate</div>
                        <div className="avg-card-small">
                          52-Week Rolling Average
                        </div>
                        <div className="avg-circle">
                          <img
                            src="https://www2.arccorp.com/globalassets/covid19/avg-circle.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="avg-card">
                      <div className="avg-card-inner">
                        <h1 className="average">{this.state.thisWeek[3]}</h1>
                        <div className="avg-card-main">Online</div>
                        <div className="avg-card-small">
                          52-Week Rolling Average
                        </div>
                        <div className="avg-circle">
                          <img
                            src="https://www2.arccorp.com/globalassets/covid19/avg-circle.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="avg-card">
                      <div className="avg-card-inner">
                        <div className="average">{this.state.thisWeek[4]}</div>
                        <div className="avg-card-main">Leisure/Other</div>
                        <div className="avg-card-small">
                          52-Week Rolling Average
                        </div>
                        <div className="avg-circle">
                          <img
                            src="https://www2.arccorp.com/globalassets/covid19/avg-circle.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <p className="mb-0">
                      <small>
                        *The 52-week rolling average is the average ticketing
                        volume and other variances over the past 52 weeks,
                        ending with the most recent week, compared to 2019
                        baseline numbers.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr id="map" className="covid-hr" />
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="loading">
                  <div className="loading-icon">
                    <i className="fas fa-circle-notch fa-spin"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default HCGraph;
