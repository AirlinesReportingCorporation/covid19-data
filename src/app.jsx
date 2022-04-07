import React, { Component } from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryBar,
  VictoryAxis,
  VictoryScatter,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryLabel,
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
        <div className="covidHeader">
        <div className="covidJumbo">
          <div className="jumboInfo">
          <h1><span className="icon-arc-logo"></span> Data Shows Weekly Air Travel Recovery</h1>
          </div>
         
          </div>
          <div className="covidInfo">
          <p>
            As air travel continues to recover from the COVID-19 pandemic, <b>ARC
            is committed to providing timely data to help our partners and
            stakeholders make responsible, informed decisions based on recovery
            trends.</b>
          </p>

          <p>
          The figures below show airline ticketing recovery by
            comparing current weekly ticket purchases to 2019 levels for tickets
            sold by U.S. travel agencies and processed through the ARC
            settlement system. The data includes average air ticket price for
            weekly U.S. domestic round trips, state-by-state travel recovery,
            and a comparison of new transactions for U.S. and international
            destinations.
          </p>

          <p>
          <b>Please note:</b> Some data may slightly change over time
            due to variability in transaction and data reporting timing. <b>This
            page will be updated on a weekly basis.</b>
          </p>
          </div>
          </div>
          <a className="snowflakeContainer" href="https://www2.arccorp.com/products-participation/products/arc-travel-demand/">
          <div className="snowflakeImg">
            <img
              className="img-fluid"
              src="https://www2.arccorp.com/globalassets/covid19/Snowflake-info.png"
              alt="ARC Travel Demand"
            />
            <p className="snowflakeBold">Snowflake data users can access a complimentary subset of ARC Travel Demand through the Snowflake Data Marketplace,</p>
            <p className="snowflakeSmall">providing insights into daily air travel purchases, cancellations and departures. <span className="snowflakeCTA"><a href="">Learn More</a></span></p>
          </div>
          </a>

          <hr className="covid-hr"/>

        <div className="covidGraphContainer">
          <div className="hcgraph mt-5">
            <HCGraph />
          </div>

          <div className="container mt-5">
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
