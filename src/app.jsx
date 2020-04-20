import React, { Component } from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryBar,
  VictoryAxis,
  VictoryScatter,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryLabel
} from "victory";

import Graph from "./Graph.jsx";
import Loading from "./Loading.jsx";

import * as moment from "moment";
import numeral from "numeral";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    var graphTitle1 = "U.S. Travel Agency Seven-Day Air Ticket & Sales Volume";
    var graphSubTitle = "Tickets Issued for All Itineraries";

    var graphTitle2 =
      "Variances in Tickets Sold by Segment for All Itineraries";

    var dataTitle1 = ["Ticket Variance", "Sales Variance"];
    var dataTitle2 = ["Corporate", "Online", "Leisure / Other"];

    var tableHeaders1 = [
      "7-Day Period Ending",
      "Ticket Variance vs. Same Week 2019",
      "Sales Variance vs. Same Week 2019"
    ];
    var tableHeaders2 = [
      "7-Day Period Ending",
      "Corporate",
      "Online",
      "Leisure / Other"
    ];

    var ytdLabels1 = [
      "Ticket Variance vs. Same Week 2019",
      "Sales Variance vs. Same Week 2019"
    ];

    var ytdLabels2 = ["Corporate", "Online", "Leisure / Other"];

    var data1 = [
      { x: 1, a: new Date(2020, 2, 29), b: -88.5, c: -91.7 },
      { x: 2, a: new Date(2020, 3, 5), b: -92.3, c: -95.4 },
      { x: 3, a: new Date(2020, 3, 12), b: -93.8, c: -96.1 },
      { x: 4, a: new Date(2020, 3, 19), b: -91.9, c: -95.0}
    ];

    var data2 = [
      { x: 1, a: new Date(2020, 2, 29), b: -91.7 },
      { x: 2, a: new Date(2020, 3, 5), b: -95.4 },
      { x: 3, a: new Date(2020, 3, 12), b: -96.1 },
      { x: 4, a: new Date(2020, 3, 19), b: -95.0}
    ];

    var ytdData1 = [-34.13, -38.76];

    var corporate = [
      { x: 1, a: new Date(2020, 2, 29), b: -94.0 },
      { x: 2, a: new Date(2020, 5, 5), b: -95.7 },
      { x: 3, a: new Date(2020, 3, 12), b: -96.3 },
      { x: 4, a: new Date(2020, 3, 19), b: -95.8 }
    ];

    var online = [
      { x: 1, a: new Date(2020, 2, 29), b: -86.6 },
      { x: 2, a: new Date(2020, 2, 5), b: -91.4 },
      { x: 3, a: new Date(2020, 3, 12), b: -92.6 },
      { x: 4, a: new Date(2020, 3, 19), b: -89.3 }
    ];

    var leisure = [
      { x: 1, a: new Date(2020, 2, 29), b: -85.9 },
      { x: 2, a: new Date(2020, 2, 5), b: -90.1 },
      { x: 3, a: new Date(2020, 3, 12), b: -93.1 },
      { x: 4, a: new Date(2020, 3, 19), b: -91.7 }
    ];

    var ytdData2 = [-36.26, -32.95, -33.73];

    var dataDomain1 = [-40, -50, -60, -70, -80, -90, -100];

    /*
    graphTitle: String
    graphSubTitle: String
    dataTitle: array String (2)
    ytdLabels: arrray String (2)
    data1
    data2
    ytdData
    dataDomain
    */

    return (
      <div className="covidPage">
        <div className="covidJumbo">
          <h1>ARC Provides Updated Air Travel Data During COVID-19</h1>
          <p>
            As the air travel community deals with the turbulent landscape
            caused by COVID-19, ARC is committed to providing timely information
            to help our partners and all those involved in the industry make
            responsible, informed decisions.
          </p>

          <p>
            The data figures below show the effect COVID-19 has had on airline
            ticketing by comparing this year’s numbers to 2019. ARC is currently
            collecting data on YOY changes in tickets issued and variance in
            tickets sold by segment by US travel agencies and processed through
            the ARC settlement system, plus the average air ticket price for US
            domestic round trips.
          </p>

          <p>
            <small>
              <span style={{ fontWeight: "bold", color: "#414042" }}>
                Please note:
              </span>{" "}
              Some data may slightly change over time due to variability in
              transaction and data reporting timing.
            </small>
            <br />
            <small style={{ fontWeight: "bold", color: "#414042" }}>
              This page will be updated on a weekly basis.
            </small>
          </p>
        </div>

        <div className="covidGraphContainer">
          <Graph
            graphTitle={graphTitle1}
            graphSubTitle={graphSubTitle}
            dataTitle={dataTitle1}
            ytdLabels={ytdLabels1}
            data1={data1}
            data2={data2}
            ytdData={ytdData1}
            dataDomain={dataDomain1}
            tableHeaders={tableHeaders1}
          />
        </div>

        <div className="covidGraphContainer">
          <Graph
            graphTitle={graphTitle2}
            graphSubTitle={""}
            dataTitle={dataTitle2}
            ytdLabels={ytdLabels2}
            data1={corporate}
            data2={online}
            data3={leisure}
            ytdData={ytdData2}
            dataDomain={dataDomain1}
            tableHeaders={tableHeaders2}
          />
        </div>

        <div
          className="covidGraphContianer"
          style={{ marginTop: "60px", marginBottom: "60px" }}
        >
          <div
            style={{
              margin: "0 auto 60px auto",
              maxWidth: "1030px",
              textAlign: "center"
            }}
          >
            <div className="graphTitle">
              Average Air Ticket Price for U.S. Domestic Round Trips
            </div>
          </div>
          <div className="covid-table overflow-auto">
            <div className="row covid-headers">
              <div className="col-4">Month</div>
              <div className="col-4">Change from prior month</div>
              <div className="col-4">Average Ticket Price</div>
            </div>
            <div className="covid-row row d-flex flex-row">
              <div className="d-flex col-4">January</div>
              <div className="d-flex align-items-center flex-row col-4">
                <div className="d-flex mainStatPercentChange">-0.02%</div>
                <div className="d-flex mainStatPercentChangeBar">
                  <div className="barChange" style={{ width: "0.02%" }}></div>
                </div>
              </div>
              <div className="d-flex align-items-center flex-row col-4">
                $478
              </div>
            </div>
            <div className="covid-row row d-flex flex-row">
              <div className="d-flex col-4">February</div>
              <div className="d-flex align-items-center flex-row col-4">
                <div className="d-flex mainStatPercentChange">-2.0%</div>
                <div className="d-flex mainStatPercentChangeBar">
                  <div className="barChange" style={{ width: "2.0%" }}></div>
                </div>
              </div>
              <div className="d-flex align-items-center flex-row col-4">
                $488
              </div>
            </div>
            <div className="covid-row row d-flex flex-row">
              <div className="d-flex col-4">February</div>
              <div className="d-flex align-items-center flex-row col-4">
                <div className="d-flex mainStatPercentChange">-21.9%</div>
                <div className="d-flex mainStatPercentChangeBar">
                  <div className="barChange" style={{ width: "21.9%" }}></div>
                </div>
              </div>
              <div className="d-flex align-items-center flex-row col-4">
                $377
              </div>
            </div>
            <div className="covid-row row d-flex flex-row">
              <div className="d-flex col-4">
                <strong>Year-to-Date (YTD)</strong>
              </div>
              <div className="d-flex align-items-center flex-row col-4">
                <strong>-6.2%</strong>
              </div>
              <div className="d-flex align-items-center flex-row col-4">
                <strong>$448</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bottomData container">
          <div className="row">
            <div className="col-md-6">
              <h2>Country-Specific Data</h2>
              <p>
                ARC is also tracking the impact of COVID-19 on airline ticketing
                in regions that have been most impacted, including China, Italy,
                Japan, and South Korea. Data on air tickets sold for domestic,
                global inbound, and global outbound flights for each of these
                countries is publicly available. This data is updated weekly.
              </p>
              <a
                href="https://www2.arccorp.com/articles-trends/the-latest/coronavirus-data/"
                className="ctaBtn"
              >
                View Data
              </a>
            </div>
            <div className="col-md-6">
              <h2>
                Interested in a custom report for a specific region or country?
              </h2>
              <p>
                ARC offers a wide range of data products and services to help
                airlines, travel agencies and other organizations understand the
                forces impacting the marketplace. ARC can apply the same filters
                above to data around the globe to help analyze trends and gain
                more visibility.
              </p>
              <a
                href="https://www2.arccorp.com/support-training/product-sales-request/"
                className="ctaBtn"
              >
                Submit Request
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
