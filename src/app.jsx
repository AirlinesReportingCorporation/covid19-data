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
import GraphVariance from "./GraphVariance.jsx";
import Loading from "./Loading.jsx";

import * as moment from "moment";
import numeral from "numeral";
import HCGraph from "./HCGraph.jsx";
import Map from "./Map.jsx";

class App extends Component {
  constructor() {
    super();
  }

  render() {

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

          <a href="https://www2.arccorp.com/products-participation/products/arc-travel-demand?utm_source=covid-19-data">
            <img
              className="img-fluid"
              src="https://www2.arccorp.com/globalassets/covid19/arc-travel-demand.png"
              alt="ARC Travel Demand"
            />
          </a>
        </div>
        <div className="covidGraphContainer">
          <div className="hcgraph container mt-5">
            <HCGraph
            />
            </div>

            <div className="container mt-5">
              <Map/>
            </div>
        
        </div>


        <div className="bottomData container">
          <div className="row">
            <div className="col-md-6">
              <h2>ARC's Airline Sales Data Available on Snowflake</h2>
              <p>
                Snowflake data users can now access a complimentary subset of
                ARC Travel Demand, the company’s latest data solution, through
                the Snowflake Data Marketplace.
              </p>
              <a
                href="https://www2.arccorp.com/articles-trends/the-latest/arc-global-airline-sales-data-now-available-through-snowflake
                "
                className="ctaBtn"
              >
                Learn More
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
