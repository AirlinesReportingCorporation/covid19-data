import React, { Component } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

import * as moment from "moment";
import numeral from "numeral";

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

class AMGraph extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    
    // Add data
    chart.data = this.props.data1;

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.ValueAxis());

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "b";
    series.dataFields.valueX = "a";
    series.strokeWidth = 1;
    series.minBulletDistance = 10;
    series.tooltipText = "{valueY}";
    series.fillOpacity = 0.1;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.fillOpacity = 0.5;
    series.tooltip.label.padding(12, 12, 12, 12);

    var seriesRange = dateAxis.createSeriesRange(series);
    seriesRange.contents.strokeDasharray = "2,3";
    seriesRange.contents.stroke = chart.colors.getIndex(8);
    seriesRange.contents.strokeWidth = 1;

    var pattern = new am4core.LinePattern();
    pattern.rotation = -45;
    pattern.stroke = seriesRange.contents.stroke;
    pattern.width = 1000;
    pattern.height = 1000;
    pattern.gap = 6;
    seriesRange.contents.fill = pattern;
    seriesRange.contents.fillOpacity = 0.5;

    // Add scrollbar
    chart.scrollbarX = new am4core.Scrollbar();

    // add range
    var range = dateAxis.axisRanges.push(new am4charts.DateAxisDataItem());
    range.grid.stroke = chart.colors.getIndex(0);
    range.grid.strokeOpacity = 1;
    range.bullet = new am4core.ResizeButton();
    range.bullet.background.fill = chart.colors.getIndex(0);
    range.bullet.background.states.copyFrom(
      chart.zoomOutButton.background.states
    );
    range.bullet.minX = 0;
    range.bullet.adapter.add("minY", function(minY, target) {
      target.maxY = chart.plotContainer.maxHeight;
      target.maxX = chart.plotContainer.maxWidth;
      return chart.plotContainer.maxHeight;
    });

    range.bullet.events.on("dragged", function() {
      range.value = dateAxis.xToValue(range.bullet.pixelX);
      seriesRange.value = range.value;
    });



    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
  }
}

export default AMGraph;
