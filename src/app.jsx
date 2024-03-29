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
          <div id="update-alert">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-text bg-color-tarmac type-color-white">
                  <img
                    src="https://www2.arccorp.com/globalassets/covid19/alert.png"
                    alt=""
                  />
                  <p className="alert-text">
                    Due to the industry’s recovery from COVID, this weekly data
                    will no longer be updated starting January 1, 2024. For the
                    latest travel agency air ticket sales data, visit our
                    <a href="https://www2.arccorp.com/articles-trends/sales-statistics">
                      {" "}
                      Monthly and Annual Agency Sales Statistics page
                    </a>{" "}
                    or{" "}
                    <a href="https://www2.arccorp.com/support-training/product-sales-request/">
                      {" "}
                      submit a request{" "}
                    </a>
                    to our sales team.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
              As air travel worked through the COVID-19 pandemic,{" "}
              <strong>
                ARC was committed to providing timely data to help our partners
                and stakeholders make responsible, informed decisions based on
                recovery trends.
              </strong>
            </p>

            <p>
              The figures below show airline ticketing volume recovery by
              comparing weekly air travel tickets sold by U.S. travel agencies
              and processed through the ARC settlement system to 2019 levels.
              The data includes overall air ticket volumes, ticket variance
              broken out by segment, and state-by-state travel recovery.
            </p>

            <p className="mb-0">
              <strong>
                Please note: As on January 1, 2024, this page will no longer be
                updated on a weekly basis.
              </strong>{" "}
              For the latest travel agency air ticket sales data, visit our{" "}
              <a href="https://www2.arccorp.com/articles-trends/sales-statistics">
                Monthly and Annual Agency Sales Statistics page
              </a>{" "}
              or{" "}
              <a href="https://www2.arccorp.com/support-training/product-sales-request/">
                {" "}
                submit a request{" "}
              </a>{" "}
              to our sales team.
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

          {/* <div className="mapgraph">
            <Map />
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
