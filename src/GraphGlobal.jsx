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

class GraphGlobal extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    var dataTitle = this.props.dataTitle;

    var data = this.props.data1;
    var data2 = this.props.data2;

    var data3 = this.props.data3 ? this.props.data3 : "";

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

    var graphDisplay = data.map(function(datum, i) {
      return (
        <div key={i} className="covid-row row d-flex flex-row">
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
              {numeral(data2[i].b).format("0.00")}%
            </div>
            <div className="d-flex mainStatPercentChangeBar">
              <div
                className="barChange"
                style={{ width: Math.abs(data2[i].b) + "%" }}
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
                {numeral(data3[i].b).format("0.00")}%
              </div>
              <div className="d-flex mainStatPercentChangeBar">
                <div
                  className="barChange"
                  style={{ width: Math.abs(data3[i].b) + "%" }}
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

    return (
      <div className="container mt-5">
        <div className="graphTitle" style={{ marginTop: "60px" }}>
          {this.props.graphTitle}
        </div>
        <div className="graphSubTitle">{this.props.graphSubTitle}</div>

        <div className="graphContainer">
          <SingleGraph
            data={data}
            dataDomain={dataDomain}
            dataTitle={dataTitle}
          />
        </div>

        <div className="covid-table overflow-auto">
          <div className="row covid-headers">{tableHeaderDisplay}</div>
          {graphDisplay}
        </div>
      </div>
    );
  }
}

class SingleGraph extends React.Component {
  render() {
    var data = this.props.data;

    var dataTitle = this.props.dataTitle;

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

    var dateDomain = [0.5];
    var valueDomain = [];

    for (var i = 0; i < data.length; i++) {
      valueDomain[i] = data[i].x;
    }

    for (var i = 1; i < data.length + 1; i++) {
      dateDomain[i] = i + 0.5;
    }

    return (
      <VictoryChart
        width={1170}
        height={530}
        fixLabelOverlap={true}
        padding={{ left: 100, top: 30, bottom: 50, right: 50 }}
        containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
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
                tick == 0 || tick == 10  || tick <= -99
                  ? tick == 0
                    ? "#414042"
                    : "#ffffff"
                  : "#d7d7d7",
              strokeWidth: ({ tick }) =>
                tick == 10 || tick == -100 ? 1 : 1
            }
          }}
          dependentAxis
          orientation="left"
          label="VARIANCE %"
          tickValues={dataDomain}
          axisLabelComponent={<VictoryLabel dy={-30} />}
        />

        <VictoryBar
          data={data}
          y="b"
        />
      </VictoryChart>
    );
  }
}

export default GraphGlobal;
