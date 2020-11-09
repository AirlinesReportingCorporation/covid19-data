import React, { Component } from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryBar,
  VictoryAxis,
  VictoryBrushContainer,
  VictoryScatter,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryLabel,
  createContainer
} from "victory";

import * as moment from "moment";
import numeral from "numeral";

import GraphTooltip from "./GraphTooltip";

/*
graphTitle: String
graphSubTitle: String
dataTitle: array String (2)
ytdLabels: arrray String (2)
data1
data2
data3
ytdData
dataDomain
*/

function generateDomain(graphData) {
  var step = 10;

  var max = Math.max.apply(
    Math,
    graphData.map(function(o) {
      return o.b;
    })
  );

  var min = Math.min.apply(
    Math,
    graphData.map(function(o) {
      return o.b;
    })
  );

  var arr = [];

  min = Math.round(min / step) * step;
  max = Math.round(max / step) * step;

  if (max <= step) {
    max = step;
  }

  if (100 + min < 50) {
    min = -100;
  }

  var diff = Math.abs(Math.abs(min) - max) / step;

  if (diff > 12) {
    diff = 10;
    step = 100;
  }

  arr.push(max);

  for (var i = max - step; i > min; i = i - step) {
    arr.push(i);
  }

  arr.push(min);

  return arr;
}
class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketToggle: true,
      salesToggle: true,
      thirdToggle: true,
      showAdditionalRows: false,
      zoomDomain: {
        x: [
          //set columns for zooming for 12
          props.data1[parseInt(props.data1.length - 13)].x + 0.5,
          props.data1[props.data1.length - 1].x + 0.5
        ]
      }
    };

    this.toggleTicket = this.toggleTicket.bind(this);
    this.toggleSales = this.toggleSales.bind(this);
    this.toggleThird = this.toggleThird.bind(this);
    this.toggleAdditionalRows = this.toggleAdditionalRows.bind(this);
    this.handleZoom = this.handleZoom.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  toggleAdditionalRows() {
    if (this.state.showAdditionalRows) {
      this.setState({ showAdditionalRows: false });
    } else {
      this.setState({ showAdditionalRows: true });
    }
  }

  toggleTicket() {
    if (this.state.ticketToggle == false) {
      this.setState({ ticketToggle: true });
    } else {
      this.setState({ ticketToggle: false });
    }
  }

  toggleSales() {
    if (this.state.salesToggle == false) {
      this.setState({ salesToggle: true });
    } else {
      this.setState({ salesToggle: false });
    }
  }

  toggleThird() {
    if (this.state.thirdToggle == false) {
      this.setState({ thirdToggle: true });
    } else {
      this.setState({ thirdToggle: false });
    }
  }

  handleZoom(domain) {
    var props = this.props;

    if (domain.x[1] - domain.x[0] > 13 || domain.x[1] == domain.x[0]) {
      domain.x = [
        props.data1[parseInt(props.data1.length - 13)].x + 0.5,
        props.data1[props.data1.length - 1].x + 0.5
      ];
    } else if (isNaN(domain.x[1]) || isNaN(domain.y[0])) {
      domain.x = [
        props.data1[parseInt(props.data1.length - 13)].x + 0.5,
        props.data1[props.data1.length - 1].x + 0.5
      ];
    }

    this.setState({ zoomDomain: domain });
  }

  render() {
    //var dataTitle = ["Ticket Variance", "Sales Variance", "3?"];
    var dataTitle = this.props.dataTitle;

    //var ytdLabels = ["Ticket Variance vs. Same Week 2019", "Sales Variance vs. Same Week 2019", "3"]
    var ytdLabels = this.props.ytdLabels;

    var showAdditionalRows = this.state.showAdditionalRows;

    var data = this.props.data1;

    var data2 = this.props.data2;

    var data3 = this.props.data3 ? this.props.data3 : "";

    var data1_reverse = data.slice();
    data1_reverse.reverse();

    var data2_reverse = data2 ? data2.slice() : "";
    data2 ? data2_reverse.reverse() : "";

    var data3_reverse = data3 ? data3.slice() : "";
    data3 ? data3_reverse.reverse() : "";

    //var ytdData = [-25.9, -30.5];

    var ytdData = this.props.ytdData;

    var tableHeaders = this.props.tableHeaders;

    var tableHeaderDisplay = tableHeaders.map(function(datum, i) {
      var arrLength = tableHeaders.length;
      var colSize = "col-4";

      if (arrLength == 4) {
        colSize = "col-3";
      }

      return (
        <div className={colSize} key={i}>
          {datum}
        </div>
      );
    });

    var graphDisplay = data1_reverse.map(function(datum, i) {
      return (
        <div
          key={i}
          className={
            "covid-row row d-flex flex-row" +
            (i > 2 && !showAdditionalRows ? "  covid-row-additional" : "")
          }
        >
          <div className={"d-flex" + (data3 ? " col-3" : " col-4")}>
            {moment(datum.a).format("MMMM D")}
          </div>
          <div
            className={
              "d-flex align-items-center flex-row" +
              (data3 ? " col-3" : " col-4")
            }
          >
            <div className="d-flex mainStatPercentChange">
              {numeral(datum.b).format("0.00")}%
            </div>
            <div className="d-flex mainStatPercentChangeBar">
              <div
                className="barChange"
                style={{ width: Math.abs(datum.b) + "%" }}
              ></div>
            </div>
          </div>
          <div
            className={
              "d-flex align-items-center flex-row" +
              (data3 ? " col-3" : " col-4")
            }
          >
            <div className="d-flex mainStatPercentChange">
              {numeral(data2_reverse[i].b).format("0.00")}%
            </div>
            <div className="d-flex mainStatPercentChangeBar">
              <div
                className="barChange"
                style={{ width: Math.abs(data2_reverse[i].b) + "%" }}
              ></div>
            </div>
          </div>
          {data3 && (
            <div
              className={
                "d-flex align-items-center flex-row" +
                (data3 ? " col-3" : " col-4")
              }
            >
              <div className="d-flex mainStatPercentChange">
                {numeral(data3_reverse[i].b).format("0.00")}%
              </div>
              <div className="d-flex mainStatPercentChangeBar">
                <div
                  className="barChange"
                  style={{ width: Math.abs(data3_reverse[i].b) + "%" }}
                ></div>
              </div>
            </div>
          )}
        </div>
      );
    });

    //var dataDomain = [10, 0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100];
    var dataDomain = this.props.dataDomain;

    var maxDomain = dataDomain[0];
    var minDomain = dataDomain[dataDomain.length - 1];

    var alternatingDataset = [];

    function alternatingData() {
      var arr = [];

      for (var i = 0; i < data.length; i = i + 2) {
        var num = data[i].x;
        arr.push({ x: num, b: minDomain, y0: maxDomain });
      }

      alternatingDataset = arr;
    }

    alternatingData();

    var realData = data;

    var dateDomain = [0.5];

    var valueDomain = [];

    for (var i = 0; i < data.length; i++) {
      valueDomain[i] = data[i].x;
    }

    for (var i = 1; i < data.length + 1; i++) {
      dateDomain[i] = i + 0.5;
    }

    var graphDomain = dataDomain;

    var min = graphDomain[graphDomain.length - 1];
    var max = graphDomain[0];

    const layout = this.props.layout;

    const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

    return (
      <div className="container mt-5">
        <div className="graphTitle" style={{ marginTop: "60px" }}>
          {this.props.graphTitle}
        </div>
        <div className="graphSubTitle">{this.props.graphSubTitle}</div>

        <div className="graphToggleContainer d-flex flex-row">
          <div
            onClick={this.toggleTicket}
            className={
              "graphToggle d-flex flex-row " +
              (this.state.ticketToggle ? "active" : "")
            }
          >
            <div className="graphToggleCheckbox">
              <i className="fas fa-check"></i>
            </div>
            <div className="graphToggleLabel">
              <i className="fas fa-circle graphToggleKey1"></i> {dataTitle[0]}
            </div>
          </div>
          <div
            onClick={this.toggleSales}
            className={
              "graphToggle d-flex flex-row " +
              (this.state.salesToggle ? "active" : "")
            }
          >
            <div className="graphToggleCheckbox ">
              <i className="fas fa-check"></i>
            </div>
            <div className="graphToggleLabel">
              <i className="fas fa-circle graphToggleKey2"></i> {dataTitle[1]}
            </div>
          </div>
          {data3 && (
            <div
              onClick={this.toggleThird}
              className={
                "graphToggle d-flex flex-row " +
                (this.state.thirdToggle ? "active" : "")
              }
            >
              <div className="graphToggleCheckbox ">
                <i className="fas fa-check"></i>
              </div>
              <div className="graphToggleLabel">
                <i className="fas fa-circle graphToggleKey3"></i> {dataTitle[2]}
              </div>
            </div>
          )}
        </div>

        <VictoryChart
          width={1170}
          height={530}
          fixLabelOverlap={true}
          padding={{ left: 100, top: 30, bottom: 50, right: 50 }}
          containerComponent={
            <VictoryZoomVoronoiContainer
              allowZoom={false}
              voronoiDimension="x"
              zoomDimension="x"
              zoomDomain={this.state.zoomDomain}
              onZoomDomainChange={this.handleZoom.bind(this)}
              activateLabels={true}
              labels={({ datum }) => ` `}
              labelComponent={
                <VictoryTooltip
                  cornerRadius={0}
                  labels={this.labels}
                  flyoutComponent={
                    <GraphTooltip
                      layout={layout}
                      data={[data, data2, data3, dataTitle]}
                    />
                  }
                  flyoutStyle={{
                    fill: "white",
                    stroke: "transparent",
                    filter: "drop-shadow(10px 0 5px red)"
                  }}
                />
              }
              voronoiBlacklist={[
                "bulletPoints",
                "bulletPoints1",
                "bulletPoints2",
                "bulletPoints3",
                "bulletPoints4",
                "bulletPoints5",
                "bulletPoints6",
                "bulletPoints7",
                "bar"
              ]}
            />
          }
        >
          <VictoryAxis
            style={{
              grid: {
                stroke: "#8e8e8e",
                strokeWidth: 1.5
              }
            }}
            tickFormat={t => ``}
            tickValues={dateDomain}
          />

          <VictoryAxis
            style={{
              tickLabels: {
                fontFamily: "SourceSansPro-Bold, arial, sans-serif",
                fontSize: "16px",
                color: "#999999",
                textTransform: "uppercase"
              },
              grid: { strokeWidth: 0, stroke: "#ffffff" },
              axis: { strokeWidth: 1, stroke: "#ffffff" }
            }}
            tickFormat={t => `${t}`}
            orientation="bottom"
            offsetY={50}
            tickValues={valueDomain}
            tickFormat={t => `${moment(data[t - 1].a).format("MMM D")}`}
            tickLabelComponent={<VictoryLabel />}
          />

          <VictoryAxis
            tickFormat={t => `${t}%`}
            tickCount={11}
            style={{
              axis: { stroke: "#414042", strokeWidth: 1 },
              tickLabels: {
                textTransform: "uppercase",
                fontFamily: "SourceSansPro-SemiBold, arial, sans-serif",
                fontSize: "15px",
                color: "#414042"
              },
              grid: {
                stroke: ({ tick }) =>
                  tick == 0 || tick == 10 || tick == -40 || tick <= -99
                    ? tick == 0
                      ? "#414042"
                      : "#ffffff"
                    : "#d7d7d7",
                strokeWidth: ({ tick }) =>
                  tick == 10 || tick == -100 ? 1 : tick == 40 ? 0 : 1
              }
            }}
            dependentAxis
            orientation="left"
            label="VARIANCE %"
            tickValues={dataDomain}
            axisLabelComponent={<VictoryLabel dy={-30} />}
          />

          <VictoryBar
            name="bar"
            style={{ data: { fill: "#dddddd", opacity: ".2" } }}
            data={alternatingDataset}
            barRatio={1.5}
            y="b"
          />

          {this.state.ticketToggle && (
            <VictoryLine
              style={{
                data: { stroke: "#189bb0", strokeWidth: "2.5" }
              }}
              data={data}
              y="b"
            />
          )}

          {this.state.ticketToggle && (
            <VictoryScatter
              name="bulletPoints"
              style={{
                data: { fill: "#ffffff", stroke: "#cccccc", strokeWidth: "2" }
              }}
              size={9}
              data={data}
              y="b"
            />
          )}

          {this.state.ticketToggle && (
            <VictoryScatter
              name="bulletPoints2"
              style={{
                data: {
                  fill: "#ffffff",
                  stroke: "#189bb0",
                  strokeWidth: "2.5"
                }
              }}
              size={3}
              data={data}
              y="b"
            />
          )}

          {this.state.salesToggle && (
            <VictoryLine
              style={{
                data: { stroke: "#bbaf8b", strokeWidth: "2.5" }
              }}
              data={data2}
              y="b"
            />
          )}

          {this.state.salesToggle && (
            <VictoryScatter
              name="bulletPoints3"
              style={{
                data: { fill: "#ffffff", stroke: "#cccccc", strokeWidth: "2" }
              }}
              size={9}
              data={data2}
              y="b"
            />
          )}

          {this.state.salesToggle && (
            <VictoryScatter
              name="bulletPoints4"
              style={{
                data: { fill: "#ffffff", stroke: "#bbaf8b", strokeWidth: "2.5" }
              }}
              size={3}
              data={data2}
              y="b"
            />
          )}

          {this.props.data3 && this.state.thirdToggle && (
            <VictoryLine
              style={{
                data: { stroke: "#316677", strokeWidth: "2.5" }
              }}
              data={data3}
              y="b"
            />
          )}

          {this.props.data3 && this.state.thirdToggle && (
            <VictoryScatter
              name="bulletPoints5"
              style={{
                data: { fill: "#ffffff", stroke: "#cccccc", strokeWidth: "2" }
              }}
              size={9}
              data={data3}
              y="b"
            />
          )}

          {this.props.data3 && this.state.thirdToggle && (
            <VictoryScatter
              name="bulletPoints6"
              style={{
                data: { fill: "#ffffff", stroke: "#316677", strokeWidth: "2.5" }
              }}
              size={3}
              data={data3}
              y="b"
            />
          )}
        </VictoryChart>

        <div className="brushContainer">
          <VictoryChart
            padding={{ top: 0, left: 15, right: 15, bottom: 0 }}
            width={600}
            height={30}
            domain={{ y: [min, max] }}
            containerComponent={
              <VictoryBrushContainer
                className="brushsvg"
                allowResize={false}
                brushDimension="x"
                brushDomain={this.state.zoomDomain}
                onBrushDomainChangeEnd={this.handleZoom.bind(this)}
                handleComponent={<CustomHandle />}
                defaultBrushArea="move"
                brushStyle={{
                  cursor: "grab",
                  stroke: "transparent",
                  fill: "black",
                  fillOpacity: "0.1"
                }}
              />
            }
          >
            {this.state.ticketToggle && (
              <VictoryLine
                style={{
                  data: { stroke: "#189bb0", strokeWidth: "1.5" }
                }}
                data={data}
                y="b"
              />
            )}

            {this.state.salesToggle && (
              <VictoryLine
                style={{
                  data: { stroke: "#bbaf8b", strokeWidth: "1.5" }
                }}
                data={data2}
                y="b"
              />
            )}

            {this.props.data3 && this.state.thirdToggle && (
              <VictoryLine
                style={{
                  data: { stroke: "#316677", strokeWidth: "1.5" }
                }}
                data={data3}
                y="b"
              />
            )}

            <VictoryAxis
              style={{
                grid: {
                  stroke: "transparent",
                  strokeWidth: 1.5
                },
                axis: { strokeWidth: 0, stroke: "#ffffff" }
              }}
              tickFormat={t => ``}
              tickValues={dateDomain}
            />

            <VictoryAxis
              style={{
                tickLabels: {
                  fontFamily: "SourceSansPro-Bold, arial, sans-serif",
                  fontSize: "12px",
                  color: "#999999",
                  textTransform: "uppercase"
                },
                grid: { strokeWidth: 0, stroke: "#ffffff" },
                axis: { strokeWidth: 0, stroke: "#ffffff" }
              }}
              tickFormat={t => ``}
              orientation="bottom"
              tickValues={valueDomain}
            />

            {/* whenClicked is a property not an event, per se. */}
            <VictoryAxis
              tickFormat={t => ``}
              style={{
                axis: { stroke: "#5d5c68", strokeWidth: 0 }
              }}
              dependentAxis
              orientation="left"
              tickValues={graphDomain}
            />
          </VictoryChart>
        </div>

        <div className="ytd-container">
          <div className="row no-gutters">
            <div
              className={
                "d-flex flex-row align-items-center" +
                (data3 ? " col-lg-4 " : " col-lg-6 ")
              }
            >
              <div className="ytd-symbol">YTD</div>
              <div className="ytd-data-container">
                <div className="ytd-data">
                  {numeral(ytdData[0]).format("0.00")}%
                </div>
                <div className="ytd-label">{ytdLabels[0]}</div>
              </div>
            </div>
            <div
              className={
                "d-flex flex-row align-items-center" +
                (data3 ? " col-lg-4 " : " col-lg-6 ")
              }
            >
              <div className="ytd-symbol">YTD</div>
              <div className="ytd-data-container">
                <div className="ytd-data">
                  {numeral(ytdData[1]).format("0.00")}%
                </div>
                <div className="ytd-label">{ytdLabels[1]}</div>
              </div>
            </div>
            {data3 && (
              <div className="col-lg-4 d-flex flex-row align-items-center">
                <div className="ytd-symbol">YTD</div>
                <div className="ytd-data-container">
                  <div className="ytd-data">
                    {numeral(ytdData[2]).format("0.00")}%
                  </div>
                  <div className="ytd-label">{ytdLabels[2]}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="covid-table overflow-auto">
          <div className="row">
            <div class="graphSubTitle" style={{marginBottom: "15px", marginLeft: "40px"}}>List View</div>
          </div>
          <div className="row covid-headers">{tableHeaderDisplay}</div>
          {graphDisplay}

          <div
            className="row showAll text-center"
            onClick={this.toggleAdditionalRows}
          >
            <div className="col">
              {this.state.showAdditionalRows ? "Show Less" : "Show More"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CustomHandle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <foreignObject
        x={this.props.x - 2}
        y={this.props.y + 2}
        width="12px"
        height={this.props.height}
      >
        <div
          className="customHandle"
          style={{
            background: "transparent",
            height: "100%",
            padding: "3px 1px 3px "
          }}
        >
          <div
            style={{
              padding: "5px 0px",
              lineHeight: "1",
              background: "#f1f2f2",
              color: "#414042",
              //display: this.props.x > 350 ? "block" : "none"
            }}
          >
            <i className="fas fa-grip-lines-vertical"></i>
          </div>
        </div>
      </foreignObject>
    );
  }
}

export default Graph;
