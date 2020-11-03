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

import GraphTooltipVariance from "./GraphTooltipVariance";

/*
graphTitle: String
graphSubTitle: String
dataTitle: array String (2)
ytdLabels: arrray String (2)
data1
ytdData
dataDomain
*/

class GraphVariance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketToggle: true,
      showAdditionalRows: false,
      zoomDomain: {
        x: [
          //set columns for zooming for 12
          this.props.data1.length - 11.5,
          this.props.data1.length + 0.5
        ]
      }
    };

    this.toggleAdditionalRows = this.toggleAdditionalRows.bind(this);
    this.handleZoom = this.handleZoom.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.data1 !== prevProps.data1) {
      this.setState({
        zoomDomain: {
          x: [
            //set columns for zooming for 12
            this.props.data1.length - 11.5,
            this.props.data1.length + 0.5
          ]
        }
      });
    }
  }

  toggleAdditionalRows() {
    if (this.state.showAdditionalRows) {
      this.setState({ showAdditionalRows: false });
    } else {
      this.setState({ showAdditionalRows: true });
    }
  }

  handleZoom(domain) {
    this.setState({ zoomDomain: domain });
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

    var dataTitle = this.props.dataTitle;

    //var ytdLabels = ["Ticket Variance vs. Same Week 2019", "Sales Variance vs. Same Week 2019", "3"]
    var ytdLabels = this.props.ytdLabels;

    var showAdditionalRows = this.state.showAdditionalRows;

    var data = indexArray(this.props.data1);

    var data1_reverse = data.slice();
    data1_reverse.reverse();

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
            (i > 4 && !showAdditionalRows ? "  covid-row-additional" : "")
          }
        >
          <div className={"d-flex col-4"}>
            {moment(datum.a).format("MMMM D")}
          </div>
          <div className={"d-flex align-items-center flex-row col-4"}>
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
          <div className={"d-flex align-items-center flex-row col-4"}>
            <div className="d-flex mainStatPercentChange">
              {numeral(datum.c).format("0.00")}%
            </div>
            <div className="d-flex mainStatPercentChangeBar">
              <div
                className="barChange"
                style={{ width: Math.abs(datum.c) + "%" }}
              ></div>
            </div>
          </div>
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
              labels={({ datum }) => ""}
              labelComponent={
                <VictoryTooltip
                  cornerRadius={0}
                  labels={this.labels}
                  flyoutComponent={
                    <GraphTooltipVariance
                      layout={layout}
                      data={[data, dataTitle]}
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

          <VictoryBar
            name="bar"
            style={{ data: { fill: "#dddddd", opacity: ".2" } }}
            data={alternatingDataset}
            barRatio={2}
            y="b"
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
              axis: { strokeWidth: 0, stroke: "#ffffff" }
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
                  tick == 0 ||
                  tick == 10 ||
                  tick == 40 ||
                  tick == 20 ||
                  tick <= -99
                    ? tick == 0
                      ? "#414042"
                      : "#ffffff"
                    : "#d7d7d7",
                strokeWidth: ({ tick }) => (tick == 10 || tick == -100 ? 1 : 1)
              }
            }}
            dependentAxis
            orientation="left"
            label="VARIANCE %"
            tickValues={dataDomain}
            axisLabelComponent={<VictoryLabel dy={-30} />}
          />

          <VictoryLine
            style={{
              data: { stroke: "#189bb0", strokeWidth: "2.5" }
            }}
            data={data}
            y="b"
          />

          <VictoryBar
            style={{
              data: {
                fill: ({ datum }) =>
                  datum.c > 0 ? "rgba(0,0,0, 0.2)" : "rgba(0,0,0, 0.8)"
              }
            }}
            data={data}
            y="c"
            barRatio={1}
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

          <VictoryLine
            style={{
              data: { stroke: "#189bb0", strokeWidth: "2.5" }
            }}
            data={data}
            y="b"
          />

          <VictoryScatter
            name="bulletPoints"
            style={{
              data: { fill: "#ffffff", stroke: "#cccccc", strokeWidth: "2" }
            }}
            size={9}
            data={data}
            y="b"
          />

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
                  fill: ({ datum }) =>
                    datum.c > 0 ? "rgba(0,0,0, 0.2)" : "rgba(0,0,0, 0.8)"
                }
              }}
              data={data}
              y="c"
              barRatio={1}
            />

            <VictoryLine
              style={{
                data: { stroke: "#189bb0", strokeWidth: "1.5" }
              }}
              data={data}
              y="b"
            />
          </VictoryChart>
        </div>

        <div className="ytd-container" style={{ display: "none" }}>
          <div className="row no-gutters">
            <div className={"d-flex flex-row align-items-center  col-lg-6 "}>
              <div className="ytd-symbol">YTD</div>
              <div className="ytd-data-container">
                <div className="ytd-data">
                  {numeral(ytdData[0]).format("0.00")}%
                </div>
                <div className="ytd-label">{ytdLabels[0]}</div>
              </div>
            </div>
            <div className={"d-flex flex-row align-items-center col-lg-6 "}>
              <div className="ytd-symbol">YTD</div>
              <div className="ytd-data-container">
                <div className="ytd-data">
                  {numeral(ytdData[1]).format("0.00")}%
                </div>
                <div className="ytd-label">{ytdLabels[1]}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="covid-table overflow-auto">
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
        x={this.props.x - 140}
        y={this.props.y}
        width="17px"
        height={this.props.height}
      >
        <div
          className="customHandle"
          style={{
            background: "transparent",
            height: "100%",
            padding: "4px 2px 4px "
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

export default GraphVariance;
