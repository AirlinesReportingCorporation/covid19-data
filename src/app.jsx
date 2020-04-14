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
    var graphTitle1 =
      "U.S. Travel Agency Seven-Day Air Ticket Volume and Other Variances";
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
      { x: 1, a: new Date(2020, 2, 22), b: -45.2, c: -63.2 },
      { x: 2, a: new Date(2020, 2, 29), b: -80.0, c: -83.4 },
      { x: 3, a: new Date(2020, 3, 5), b: -88.5, c: -91.7 },
      { x: 4, a: new Date(2020, 3, 12), b: -92.3, c: -95.4 }
    ];

    var data2 = [
      { x: 1, a: new Date(2020, 2, 22), b: -63.2 },
      { x: 2, a: new Date(2020, 2, 29), b: -83.4 },
      { x: 3, a: new Date(2020, 3, 5), b: -91.7 },
      { x: 4, a: new Date(2020, 3, 12), b: -95.4 }
    ];

    var corporate = [
      { x: 1, a: new Date(2020, 2, 22), b: -65.2 },
      { x: 2, a: new Date(2020, 2, 29), b: -89.5 },
      { x: 3, a: new Date(2020, 5, 5), b: -94.0 },
      { x: 4, a: new Date(2020, 3, 12), b: -95.7 }
    ];

    var online = [
      { x: 1, a: new Date(2020, 2, 22), b: -29.4 },
      { x: 2, a: new Date(2020, 2, 29), b: -77.7 },
      { x: 3, a: new Date(2020, 2, 5), b: -86.6 },
      { x: 4, a: new Date(2020, 3, 12), b: -91.4 }
    ];

    var leisure = [
      { x: 1, a: new Date(2020, 2, 22), b: -49.2 },
      { x: 2, a: new Date(2020, 2, 29), b: -73.9 },
      { x: 3, a: new Date(2020, 2, 5), b: -85.9 },
      { x: 4, a: new Date(2020, 3, 12), b: -90.2 }
    ];

    var ytdData1 = [-25.9, -30.5];
    var ytdData2 = [-27.81, -24.85, -25.34];

    var dataDomain1 = [
      10,
      0,
      -10,
      -20,
      -30,
      -40,
      -50,
      -60,
      -70,
      -80,
      -90,
      -100
    ];

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
              <span style={{ fontWeight: "bold", color: "#189bb0" }}>
                Please note:
              </span>{" "}
              Some data may slightly change over time due to variability in
              transaction and data reporting timing.
            </small>
            <br />
            <small style={{ fontWeight: "bold", color: "#189bb0" }}>
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
      </div>
    );
  }
}

export default App;
