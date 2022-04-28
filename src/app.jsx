import React, { Component } from "react";

import stickybits from "stickybits";

import HCGraph from "./HCGraph.jsx";
import Map from "./Map.jsx";
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    stickybits(".product-sticky-container");
  }

  render() {
    return (
      <div id="top" className="covidPage">
        <div className="product-sticky-container" style={{ zIndex: "12" }}>
          <div className="product-sticky-inner">
            <div className="product-sticky-nav">
              <a
                href="#top"
                className="product-sticky-brand d-flex align-items-center"
              >
                <img
                  src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-s-white.png"
                  alt="ARC Logo"
                />
                <div
                  className="product-sticky-title"
                  style={{ lineHeight: "20px" }}
                >
                  Weekly Data
                </div>
              </a>
              <div className="product-sticky-links d-flex align-items-center">
                <a href="#ticketsales" className="product-sticky-link">
                  Ticket & Sales Volume
                </a>

                <a href="#segment" className="product-sticky-link">
                  Ticket Variance Sold By Segment
                </a>

                <a href="#map" className="product-sticky-link">
                  State-by-State Recovery
                </a>
              </div>
              <div className="product-sticky-menu d-flex align-items-center">
                <a
                  href="https://www2.arccorp.com/articles-trends/sales-statistics/"
                  className="product-sticky-link-right"
                >
                  More Data <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="covidHeader">
          <div className="covidJumbo">
            <div className="jumboInfo">
              <h1>
                <span className="icon-arc-logo"></span> Data Shows Weekly Air
                Travel Recovery
              </h1>
            </div>
          </div>
          <div className="covidInfo">
            <p>
              As air travel continues to recover from the COVID-19 pandemic,{" "}
              <b>
                ARC is committed to providing timely data to help our partners
                and stakeholders make responsible, informed decisions based on
                recovery trends.
              </b>
            </p>

            <p>
              The figures below show airline ticketing volume recovery by
              comparing weekly air travel tickets sold by U.S. travel agencies
              and processed through the ARC settlement system to 2019 levels.
              The data includes overall air ticket volumes, ticket variance
              broken out by segment, and state-by-state travel recovery.
            </p>

            <p className="mb-0">
              <b>Please note:</b> Some data may change slightly over time due to
              variability in transaction and data reporting timing.{" "}
              <b>This page will be updated on a weekly basis.</b>
            </p>
          </div>
        </div>
        <a
          className="snowflakeContainer"
          href="https://www2.arccorp.com/products-participation/products/arc-travel-demand/"
        >
          <div className="snowflakeImg">
            <img
              className="img-fluid"
              src="https://www2.arccorp.com/globalassets/covid19/Snowflake-info.png"
              alt="ARC Travel Demand"
            />

            <p>
              <span className="snowflakeBold">
                Snowflake data users can access a complimentary subset of ARC
                Travel Demand through the Snowflake Data Marketplace,{" "} 
              </span> 
              <span className="snowflakeSmall">
                providing insights into daily air travel purchases,
                cancellations and departures.{" "}
                <span className="snowflakeCTA">
                  <a href="">Learn More</a>
                </span>
              </span>
            </p>
          </div>
        </a>

        <hr id="ticketsales" className="covid-hr" />

        <div className="covidGraphContainer">
          <div className="hcgraph">
            <HCGraph />
          </div>

          <div className="mapgraph">
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
