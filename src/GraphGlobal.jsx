import React, { Component } from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryBar,
  VictoryAxis,
  VictoryBrushContainer,
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

class GraphGlobal extends Component {
  constructor() {
    super();
    this.state = {
      showAdditionalRows: false
    };

    this.toggleAdditionalRows = this.toggleAdditionalRows.bind(this);
  }

  toggleAdditionalRows() {
    if (this.state.showAdditionalRows) {
      this.setState({ showAdditionalRows: false });
    } else {
      this.setState({ showAdditionalRows: true });
    }
  }

  render() {
    function indexArray(arr) {
      var arrLength = arr.length;

      for (var i = 0; i < arrLength; i++) {
        arr[i].x = i + 1;
        arr[i].y = arr[i].b.toString();
      }
      return arr;
    }

    var direction = this.props.direction;

    var showAdditionalRows = this.state.showAdditionalRows;

    var dataTitle = this.props.dataTitle;

    var data = this.props.data1;
    data = indexArray(data);

    console.log(data);

    var data2 = this.props.data2;
    data2 = indexArray(data2);

    var data3 = this.props.data3 ? this.props.data3 : "";
    data3 = this.props.data3 ? indexArray(data3) : "";

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

    var data1_reverse = data.slice();
    data1_reverse.reverse();

    var data2_reverse = data2 ? data2.slice() : "";
    data2 ? data2_reverse.reverse() : "";

    var data3_reverse = data3 ? data3.slice() : "";
    data3 ? data3_reverse.reverse() : "";

    var graphDisplay = data1_reverse.map(function(datum, i) {
      return (
        <div
          key={i}
          className={
            "covid-row row d-flex flex-row" +
            (i > 4 && !showAdditionalRows ? "  covid-row-additional" : "")
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
              {numeral(datum.b).format("0")}%
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
              {numeral(data2_reverse[i].b).format("0")}%
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
                {numeral(data3_reverse[i].b).format("0")}%
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

    var graphData = data;

    if (this.props.direction == 1) {
      graphData = data2;
    } else if (this.props.direction == 2) {
      graphData = data3;
    }

    console.log("data +");
    console.log(data);

    return (
      <div className="container mt-5">
        <div className="graphContainer">
          <SingleGraph
            data={graphData}
            dataTitle={dataTitle}
            direction={direction}
          />
        </div>

        <div
          style={{ textAlign: "center", padding: "15px 0", fontSize: "14px" }}
        >
          *To view more data, click any part of the graph or slider and drag
          your cursor to the left or right
        </div>

        <div
          onClick={this.toggleAdditionalRows}
          className="covid-table overflow-auto"
        >
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
        x={this.props.x - 210}
        y={this.props.y}
        width="17px"
        height={this.props.height}
      >
        <div
          className="customHandle"
          style={{
            background: "transparent",
            height: "100%",
            padding: "4px px 4px "
          }}
        >
          <div
            style={{
              padding: "5px 0px",
              lineHeight: "1",
              background: "#f1f2f2",
              color: "#414042",
              display: this.props.x > 350 ? "block" : "none"
            }}
          >
            <i className="fas fa-grip-lines-vertical"></i>
          </div>
        </div>
      </foreignObject>
    );
  }
}

class SingleGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomDomain: {
        x: [
          10.5,
          4.5
        ]
      }
    };
    this.handleZoom = this.handleZoom.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        zoomDomain: {
          x: [
            this.props.data[parseInt(this.props.data.length / 4)].x,
            this.props.data[this.props.data.length - 1].x
          ]
        }
      });
    }
  }

  handleZoom(domain) {
    this.setState({ zoomDomain: domain });
  }

  render() {
    var data = this.props.data;

    var dataTitle = this.props.dataTitle;

    var direction = this.props.direction;

    var dateDomain = [0.5];
    var valueDomain = [];

    for (var i = 0; i < data.length; i++) {
      valueDomain[i] = data[i].x;
    }

    for (var i = 1; i < data.length + 1; i++) {
      dateDomain[i] = i + 0.5;
    }

    var graphDomain = generateDomain(data);

    var min = graphDomain[graphDomain.length - 1];
    var max = graphDomain[0];

    console.log(max + "::" + min);

    const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

    return (
      <div>
        <VictoryChart
          data={data}
          width={1170}
          height={630}
          fixLabelOverlap={true}
          domain={{ y: [min, max] }}
          padding={{ left: 100, top: 30, bottom: 90, right: 50 }}
          containerComponent={
            <VictoryZoomVoronoiContainer
              allowZoom={false}
              voronoiDimension="x"
              zoomDimension="x"
              zoomDomain={this.state.zoomDomain}
              onZoomDomainChange={this.handleZoom.bind(this)}
              activateLabels={true}
              labels={({ datum }) => ""}
              labelComponent={
                <VictoryTooltip
                  cornerRadius={0}
                  labels={this.labels}
                  flyoutComponent={
                    <GraphTooltip data={[data, [""], [""], dataTitle]} />
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
                stroke: "transparent",
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
              grid: { strokeWidth: 1, stroke: "#ffffff" },
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
                  tick == min || tick == max || tick == 0
                    ? tick == 0
                      ? "#414042"
                      : "#ffffff"
                    : "#d7d7d7",
                strokeWidth: 1
              }
            }}
            dependentAxis
            orientation="left"
            label="VARIANCE %"
            tickValues={graphDomain}
            axisLabelComponent={<VictoryLabel dy={-30} />}
          />

          <VictoryBar
            style={{
              data: {
                fill: "#5d5c68"
              }
            }}
            data={data}
            y="b"
            barRatio={0.8}
            events={[
              {
                target: "data",
                eventHandlers: {
                  onMouseOver: () => {
                    return [
                      {
                        target: "data",
                        mutation: () => ({ style: { fill: "#189bb0" } })
                      }
                    ];
                  },
                  onMouseOut: () => {
                    return [
                      {
                        target: "data",
                        mutation: () => {}
                      }
                    ];
                  }
                }
              }
            ]}
          />
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
                onBrushDomainChange={this.handleZoom.bind(this)}
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

            <VictoryBar
              style={{
                data: {
                  fill: "#5d5c68"
                }
              }}
              data={data}
              y="b"
              barRatio={0.8}
            />
          </VictoryChart>
        </div>
      </div>
    );
  }
}

export default GraphGlobal;
