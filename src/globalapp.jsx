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

import GraphGlobal from "./GraphGlobal.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeGraph: "china",
      currentGraph: "",
      currentData: "",
      chinaTitle:
        "Global – China Domestic, China Inbound, China Outbound Air Travel",
      chinaSubTitle: "Transaction Count"
    };

    this.toggleActiveGraph = this.toggleActiveGraph.bind(this);
    this.generateGraph = this.generateGraph.bind(this);
  }

  toggleActiveGraph(val) {
    this.setState({ activeGraph: val });
  }

  /*
    location: China
    type: Sales
    direction: 
  */

  generateGraph(location, type, direction) {
    var newGraph = (
      <GraphGlobal
        graphTitle={this.state[location + "Title"]}
        graphSubTitle={location + "SubTitle"}
        dataTitle={dataTitle1}
        data1={data1}
        data2={data2}
        dataDomain={dataDomain1}
        tableHeaders={tableHeaders1}
      />
    );

    this.setState({ currentGraph: newGraph });
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

    var data1 = [
      { x: 1, a: new Date(2020, 0, 7), b: -1 },
      { x: 2, a: new Date(2020, 0, 14), b: -4 },
      { x: 3, a: new Date(2020, 0, 21), b: -12 },
      { x: 4, a: new Date(2020, 0, 28), b: -24 },
      { x: 5, a: new Date(2020, 1, 4), b: -40 },
      { x: 6, a: new Date(2020, 1, 11), b: -49 },
      { x: 7, a: new Date(2020, 1, 18), b: -80 },
      { x: 8, a: new Date(2020, 1, 25), b: -84 },
      { x: 9, a: new Date(2020, 2, 3), b: -88 },
      { x: 10, a: new Date(2020, 2, 10), b: -91 }
    ];

    var data2 = [
      { x: 1, a: new Date(2020, 0, 7), b: -1 },
      { x: 2, a: new Date(2020, 0, 14), b: -4 },
      { x: 3, a: new Date(2020, 0, 21), b: -12 },
      { x: 4, a: new Date(2020, 0, 28), b: -24 },
      { x: 5, a: new Date(2020, 1, 4), b: -40 },
      { x: 6, a: new Date(2020, 1, 11), b: -49 },
      { x: 7, a: new Date(2020, 1, 18), b: -80 },
      { x: 8, a: new Date(2020, 1, 25), b: -84 },
      { x: 9, a: new Date(2020, 2, 3), b: -88 },
      { x: 10, a: new Date(2020, 2, 10), b: -91 }
    ];

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
          <h1>
            The Impact of the Coronavirus (COVID-19) Outbreak on Global Air
            Travel Transactions - Data
          </h1>
          <p>
            This data shows{" "}
            <strong>
              the year-over-year change in air travel transactions between 2020
              and 2019 for each given seven-day period
            </strong>
            . Data is derived from Direct Data Solutions, a global air
            transaction dataset managed by ARC and IATA.
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

          <div className="locationSelect">
            <h2>Select Location</h2>

            <div className="locationSelectButtons">
              <div
                onClick={this.toggleActiveGraph.bind(this, "China")}
                className={
                  "locationSelectButton " +
                  (this.state.activeGraph == "China" ? "active" : "")
                }
              >
                China
              </div>
              <div
                onClick={this.toggleActiveGraph.bind(this, "Italy")}
                className={
                  "locationSelectButton " +
                  (this.state.activeGraph == "Italy" ? "active" : "")
                }
              >
                Italy
              </div>
              <div
                onClick={this.toggleActiveGraph.bind(this, "Japan")}
                className={
                  "locationSelectButton " +
                  (this.state.activeGraph == "Japan" ? "active" : "")
                }
              >
                Japan
              </div>
              <div
                onClick={this.toggleActiveGraph.bind(this, "South Korea")}
                className={
                  "locationSelectButton " +
                  (this.state.activeGraph == "South Korea" ? "active" : "")
                }
              >
                South Korea
              </div>
            </div>
          </div>
        </div>

        <div className="covidGraphContainer">
          <GraphGlobal
            graphTitle={this.state[this.state.activeGraph + "Title"]}
            graphSubTitle={this.state[this.state.activeGraph + "SubTitle"]}
            dataTitle={dataTitle1}
            data1={data1}
            data2={data2}
            dataDomain={dataDomain1}
            tableHeaders={tableHeaders1}
          />
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
