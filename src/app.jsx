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

class App extends Component {
  constructor() {
    super();
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

    var ytdLabels1 = [
      "Ticket Variance vs. Same Week 2019",
      "Sales Variance vs. Same Week 2019"
    ];

    var ytdLabels2 = ["Corporate", "Online", "Leisure / Other"];

    //ticket variance
    var data1 = [
      { x: 1, a: new Date(2020, 2, 29), b: -88.5 },
      { x: 2, a: new Date(2020, 3, 5), b: -92.3 },
      { x: 3, a: new Date(2020, 3, 12), b: -93.8 },
      { x: 4, a: new Date(2020, 3, 19), b: -91.9 },
      { x: 5, a: new Date(2020, 3, 26), b: -91.5 },
      { x: 6, a: new Date(2020, 4, 3), b: -90.2 },
      { x: 7, a: new Date(2020, 4, 10), b: -88.6 },
      { x: 8, a: new Date(2020, 4, 17), b: -87.3 },
      { x: 9, a: new Date(2020, 4, 24), b: -85.2 },
      { x: 10, a: new Date(2020, 4, 31), b: -83.7 },
      { x: 11, a: new Date(2020, 5, 7), b: -81.1 },
      { x: 12, a: new Date(2020, 5, 14), b: -75.2 },
      { x: 13, a: new Date(2020, 5, 21), b: -76.5 },
      { x: 14, a: new Date(2020, 5, 28), b: -77.0 },
      { x: 15, a: new Date(2020, 6, 5), b: -79.3 },
      { x: 16, a: new Date(2020, 6, 12), b: -80.7 },
      { x: 17, a: new Date(2020, 6, 19), b: -80.5 },
      { x: 18, a: new Date(2020, 6, 26), b: -78.7 },
      { x: 19, a: new Date(2020, 7, 2), b: -79.1 },
      { x: 20, a: new Date(2020, 7, 9), b: -77.0 },
      { x: 21, a: new Date(2020, 7, 16), b: -75.8 },
      { x: 22, a: new Date(2020, 7, 23), b: -75.1 },
      { x: 23, a: new Date(2020, 7, 30), b: -72.7 },
      { x: 24, a: new Date(2020, 8, 6), b: -70.4 },
      { x: 25, a: new Date(2020, 8, 13), b: -72.0 },
      { x: 26, a: new Date(2020, 8, 20), b: -68.9 },
      { x: 27, a: new Date(2020, 8, 27), b: -68.1 },
      { x: 28, a: new Date(2020, 9, 4), b: -68.0 },
      { x: 29, a: new Date(2020, 9, 11), b: -66.9 },
      { x: 30, a: new Date(2020, 9, 18), b: -66.1 },
      { x: 31, a: new Date(2020, 9, 25), b: -66.1 },
      { x: 32, a: new Date(2020, 10, 1), b: -68.5 },
      { x: 33, a: new Date(2020, 10, 8), b: -68.4 },
      { x: 34, a: new Date(2020, 10, 15), b: -67.4 },
      { x: 35, a: new Date(2020, 10, 22), b: -71.2 },
      { x: 36, a: new Date(2020, 10, 29), b: -70.5 },
      { x: 37, a: new Date(2020, 11, 6), b: -70.8 },
      { x: 38, a: new Date(2020, 11, 13), b: -68.2 },
      { x: 39, a: new Date(2020, 11, 20), b: -66.1 },
      { x: 40, a: new Date(2020, 11, 27), b: -63.7 },
      { x: 41, a: new Date(2021, 0, 3), b: -72.6 },
      { x: 42, a: new Date(2021, 0, 10), b: -63.1 },
      { x: 43, a: new Date(2021, 0, 17), b: -71.7 },
      { x: 44, a: new Date(2021, 0, 24), b: -70.5 },
      { x: 45, a: new Date(2021, 0, 31), b: -68.0 },
      { x: 46, a: new Date(2021, 1, 7), b: -66.9 },
      { x: 47, a: new Date(2021, 1, 14), b: -66.5 },
      { x: 48, a: new Date(2021, 1, 21), b: -64.0 },
      { x: 49, a: new Date(2021, 1, 28), b: -59.9 }
      
    ];

    //sales variance
    var data2 = [
      { x: 1, a: new Date(2020, 2, 29), b: -91.7 },
      { x: 2, a: new Date(2020, 3, 5), b: -95.4 },
      { x: 3, a: new Date(2020, 3, 12), b: -96.0 },
      { x: 4, a: new Date(2020, 3, 19), b: -95.0 },
      { x: 5, a: new Date(2020, 3, 26), b: -94.8 },
      { x: 6, a: new Date(2020, 4, 3), b: -94.3 },
      { x: 7, a: new Date(2020, 4, 10), b: -93.5 },
      { x: 8, a: new Date(2020, 4, 17), b: -92.6 },
      { x: 9, a: new Date(2020, 4, 24), b: -91.1 },
      { x: 10, a: new Date(2020, 4, 31), b: -89.9 },
      { x: 11, a: new Date(2020, 5, 7), b: -88.5 },
      { x: 12, a: new Date(2020, 5, 14), b: -85.4 },
      { x: 13, a: new Date(2020, 5, 21), b: -85.2 },
      { x: 14, a: new Date(2020, 5, 28), b: -85.2 },
      { x: 15, a: new Date(2020, 6, 5), b: -86.4 },
      { x: 16, a: new Date(2020, 6, 12), b: -87.7 },
      { x: 17, a: new Date(2020, 6, 19), b: -87.9 },
      { x: 18, a: new Date(2020, 6, 26), b: -87.2 },
      { x: 19, a: new Date(2020, 7, 2), b: -87.3 },
      { x: 20, a: new Date(2020, 7, 9), b: -86.5 },
      { x: 21, a: new Date(2020, 7, 16), b: -86.1 },
      { x: 22, a: new Date(2020, 7, 23), b: -85.4 },
      { x: 23, a: new Date(2020, 7, 30), b: -84.8 },
      { x: 24, a: new Date(2020, 8, 6), b: -83.1 },
      { x: 25, a: new Date(2020, 8, 13), b: -84.5 },
      { x: 26, a: new Date(2020, 8, 20), b: -81.9 },
      { x: 27, a: new Date(2020, 8, 27), b: -81.1 },
      { x: 28, a: new Date(2020, 9, 4), b: -81.0 },
      { x: 29, a: new Date(2020, 9, 11), b: -79.8 },
      { x: 30, a: new Date(2020, 9, 18), b: -79.4 },
      { x: 31, a: new Date(2020, 9, 25), b: -79.2 },
      { x: 32, a: new Date(2020, 10, 1), b: -80.1 },
      { x: 33, a: new Date(2020, 10, 8), b: -80.2 },
      { x: 34, a: new Date(2020, 10, 15), b: -78.9 },
      { x: 35, a: new Date(2020, 10, 22), b: -81.6 },
      { x: 36, a: new Date(2020, 10, 29), b: -81.0 },
      { x: 37, a: new Date(2020, 11, 6), b: -81.4 },
      { x: 38, a: new Date(2020, 11, 13), b: -80.3 },
      { x: 39, a: new Date(2020, 11, 20), b: -80.1 },
      { x: 40, a: new Date(2020, 11, 27), b: -76.3 },
      { x: 41, a: new Date(2021, 0, 3), b: -82.9 },
      { x: 42, a: new Date(2021, 0, 10), b: -77.0 },
      { x: 43, a: new Date(2021, 0, 17), b: -83.3 },
      { x: 44, a: new Date(2021, 0, 24), b: -83.7 },
      { x: 45, a: new Date(2021, 0, 31), b: -81.8 },
      { x: 46, a: new Date(2021, 1, 7), b: -81.5 },
      { x: 47, a: new Date(2021, 1, 14), b: -81.0 },
      { x: 48, a: new Date(2021, 1, 21), b: -79.9 },
      { x: 49, a: new Date(2021, 1, 28), b: -76.1 }
    ];

    var ytdData1 = [-73.40, -83.60];

    var corporate = [
      { x: 1, a: new Date(2020, 2, 29), b: -94.0 },
      { x: 2, a: new Date(2020, 3, 5), b: -95.7 },
      { x: 3, a: new Date(2020, 3, 12), b: -96.3 },
      { x: 4, a: new Date(2020, 3, 19), b: -95.8 },
      { x: 5, a: new Date(2020, 3, 26), b: -95.9 },
      { x: 6, a: new Date(2020, 4, 3), b: -95.4 },
      { x: 7, a: new Date(2020, 4, 10), b: -94.8 },
      { x: 8, a: new Date(2020, 4, 17), b: -94.3 },
      { x: 9, a: new Date(2020, 4, 24), b: -93.3 },
      { x: 10, a: new Date(2020, 4, 31), b: -92.9 },
      { x: 11, a: new Date(2020, 5, 7), b: -91.9 },
      { x: 12, a: new Date(2020, 5, 14), b: -90.3 },
      { x: 13, a: new Date(2020, 5, 21), b: -89.8 },
      { x: 14, a: new Date(2020, 5, 28), b: -88.9 },
      { x: 15, a: new Date(2020, 6, 5), b: -88.2 },
      { x: 16, a: new Date(2020, 6, 12), b: -90.4 },
      { x: 17, a: new Date(2020, 6, 19), b: -90.0 },
      { x: 18, a: new Date(2020, 6, 26), b: -89.2 },
      { x: 19, a: new Date(2020, 7, 2), b: -89.6 },
      { x: 20, a: new Date(2020, 7, 9), b: -89.2 },
      { x: 21, a: new Date(2020, 7, 16), b: -89.3 },
      { x: 22, a: new Date(2020, 7, 23), b: -88.9 },
      { x: 23, a: new Date(2020, 7, 30), b: -87.9 },
      { x: 24, a: new Date(2020, 8, 6), b: -87.7 },
      { x: 25, a: new Date(2020, 8, 13), b: -88.6 },
      { x: 26, a: new Date(2020, 8, 20), b: -86.7 },
      { x: 27, a: new Date(2020, 8, 27), b: -86.3 },
      { x: 28, a: new Date(2020, 9, 4), b: -86.1 },
      { x: 29, a: new Date(2020, 9, 11), b: -85.7 },
      { x: 30, a: new Date(2020, 9, 18), b: -85.4 },
      { x: 31, a: new Date(2020, 9, 25), b: -84.8 },
      { x: 32, a: new Date(2020, 10, 1), b: -85.3 },
      { x: 33, a: new Date(2020, 10, 8), b: -85.7 },
      { x: 34, a: new Date(2020, 10, 15), b: -84.8 },
      { x: 35, a: new Date(2020, 10, 22), b: -86.0 },
      { x: 36, a: new Date(2020, 10, 29), b: -85.2 },
      { x: 37, a: new Date(2020, 11, 6), b: -86.0 },
      { x: 38, a: new Date(2020, 11, 13), b: -84.7 },
      { x: 39, a: new Date(2020, 11, 20), b: -84.9 },
      { x: 40, a: new Date(2020, 11, 27), b: -77.9 },
      { x: 41, a: new Date(2021, 0, 3), b: -88.6 },
      { x: 42, a: new Date(2021, 0, 10), b: -82.8 },
      { x: 43, a: new Date(2021, 0, 17), b: -88.0 },
      { x: 44, a: new Date(2021, 0, 24), b: -87.5 },
      { x: 45, a: new Date(2021, 0, 31), b: -85.8 },
      { x: 46, a: new Date(2021, 1, 7), b: -86.1 },
      { x: 47, a: new Date(2021, 1, 14), b: -85.7 },
      { x: 48, a: new Date(2021, 1, 21), b: -84.7 },
      { x: 49, a: new Date(2021, 1, 28), b: -83.0 }
    ];

    var online = [
      { x: 1, a: new Date(2020, 2, 29), b: -86.6 },
      { x: 2, a: new Date(2020, 3, 5), b: -91.4 },
      { x: 3, a: new Date(2020, 3, 12), b: -92.6 },
      { x: 4, a: new Date(2020, 3, 19), b: -89.3 },
      { x: 5, a: new Date(2020, 3, 26), b: -88.5 },
      { x: 6, a: new Date(2020, 4, 3), b: -86.4 },
      { x: 7, a: new Date(2020, 4, 10), b: -84.0 },
      { x: 8, a: new Date(2020, 4, 17), b: -82.4 },
      { x: 9, a: new Date(2020, 4, 24), b: -79.0 },
      { x: 10, a: new Date(2020, 4, 31), b: -77.3 },
      { x: 11, a: new Date(2020, 5, 7), b: -73.1 },
      { x: 12, a: new Date(2020, 5, 14), b: -63.4 },
      { x: 13, a: new Date(2020, 5, 21), b: -67.0 },
      { x: 14, a: new Date(2020, 5, 28), b: -69.1 },
      { x: 15, a: new Date(2020, 6, 5), b: -74.1 },
      { x: 16, a: new Date(2020, 6, 12), b: -74.0 },
      { x: 17, a: new Date(2020, 6, 19), b: -73.7 },
      { x: 18, a: new Date(2020, 6, 26), b: -70.5 },
      { x: 19, a: new Date(2020, 7, 2), b: -70.7 },
      { x: 20, a: new Date(2020, 7, 9), b: -66.6 },
      { x: 21, a: new Date(2020, 7, 16), b: -64.2 },
      { x: 22, a: new Date(2020, 7, 23), b: -63.1 },
      { x: 23, a: new Date(2020, 7, 30), b: -57.8 },
      { x: 24, a: new Date(2020, 8, 6), b: -55.3 },
      { x: 25, a: new Date(2020, 8, 13), b: -54.8 },
      { x: 26, a: new Date(2020, 8, 20), b: -51.7 },
      { x: 27, a: new Date(2020, 8, 27), b: -51.1 },
      { x: 28, a: new Date(2020, 9, 4), b: -51.0 },
      { x: 29, a: new Date(2020, 9, 11), b: -49.7 },
      { x: 30, a: new Date(2020, 9, 18), b: -48.1 },
      { x: 31, a: new Date(2020, 9, 25), b: -49.5 },
      { x: 32, a: new Date(2020, 10, 1), b: -53.7 },
      { x: 33, a: new Date(2020, 10, 8), b: -54.3 },
      { x: 34, a: new Date(2020, 10, 15), b: -54.1 },
      { x: 35, a: new Date(2020, 10, 22), b: -60.4 },
      { x: 36, a: new Date(2020, 10, 29), b: -60.9 },
      { x: 37, a: new Date(2020, 11, 6), b: -60.1 },
      { x: 38, a: new Date(2020, 11, 13), b: -56.3 },
      { x: 39, a: new Date(2020, 11, 20), b: -51.2 },
      { x: 40, a: new Date(2020, 11, 27), b: -54.9 },
      { x: 41, a: new Date(2021, 0, 3), b: -62.7 },
      { x: 42, a: new Date(2021, 0, 10), b: -51.0 },
      { x: 43, a: new Date(2021, 0, 17), b: -59.2 },
      { x: 44, a: new Date(2021, 0, 24), b: -56.0 },
      { x: 45, a: new Date(2021, 0, 31), b: -53.5 },
      { x: 46, a: new Date(2021, 1, 7), b: -50.3 },
      { x: 47, a: new Date(2021, 1, 14), b: -50.9 },
      { x: 48, a: new Date(2021, 1, 21), b: -46.4 },
      { x: 49, a: new Date(2021, 1, 28), b: -40.4 }
      
    ];

    var leisure = [
      { x: 1, a: new Date(2020, 2, 29), b: -85.9 },
      { x: 2, a: new Date(2020, 3, 5), b: -90.1 },
      { x: 3, a: new Date(2020, 3, 12), b: -93.0 },
      { x: 4, a: new Date(2020, 3, 19), b: -91.7 },
      { x: 5, a: new Date(2020, 3, 26), b: -91.2 },
      { x: 6, a: new Date(2020, 4, 3), b: -90.8 },
      { x: 7, a: new Date(2020, 4, 10), b: -89.3 },
      { x: 8, a: new Date(2020, 4, 17), b: -87.8 },
      { x: 9, a: new Date(2020, 4, 24), b: -86.4 },
      { x: 10, a: new Date(2020, 4, 31), b: -84.6 },
      { x: 11, a: new Date(2020, 5, 7), b: -82.6 },
      { x: 12, a: new Date(2020, 5, 14), b: -78.3 },
      { x: 13, a: new Date(2020, 5, 21), b: -78.8 },
      { x: 14, a: new Date(2020, 5, 28), b: -78.6 },
      { x: 15, a: new Date(2020, 6, 5), b: -79.8 },
      { x: 16, a: new Date(2020, 6, 12), b: -80.6 },
      { x: 17, a: new Date(2020, 6, 19), b: -81.1 },
      { x: 18, a: new Date(2020, 6, 26), b: -80.2 },
      { x: 19, a: new Date(2020, 7, 2), b: -80.5 },
      { x: 20, a: new Date(2020, 7, 9), b: -79.3 },
      { x: 21, a: new Date(2020, 7, 16), b: -77.9 },
      { x: 22, a: new Date(2020, 7, 23), b: -77.3 },
      { x: 23, a: new Date(2020, 7, 30), b: -76.6 },
      { x: 24, a: new Date(2020, 8, 6), b: -72.8 },
      { x: 25, a: new Date(2020, 8, 13), b: -76.4 },
      { x: 26, a: new Date(2020, 8, 20), b: -72.5 },
      { x: 27, a: new Date(2020, 8, 27), b: -71.2 },
      { x: 28, a: new Date(2020, 9, 4), b: -71.5 },
      { x: 29, a: new Date(2020, 9, 11), b: -69.6 },
      { x: 30, a: new Date(2020, 9, 18), b: -69.1 },
      { x: 31, a: new Date(2020, 9, 25), b: -67.5 },
      { x: 32, a: new Date(2020, 10, 1), b: -69.5 },
      { x: 33, a: new Date(2020, 10, 8), b: -69.1 },
      { x: 34, a: new Date(2020, 10, 15), b: -68.1 },
      { x: 35, a: new Date(2020, 10, 22), b: -72.1 },
      { x: 36, a: new Date(2020, 10, 29), b: -72.0 },
      { x: 37, a: new Date(2020, 11, 6), b: -71.4 },
      { x: 38, a: new Date(2020, 11, 13), b: -69.9 },
      { x: 39, a: new Date(2020, 11, 20), b: -69.5 },
      { x: 40, a: new Date(2020, 11, 27), b: -69.8 },
      { x: 41, a: new Date(2021, 0, 3), b: -72.4 },
      { x: 42, a: new Date(2021, 0, 10), b: -62.9 },
      { x: 43, a: new Date(2021, 0, 17), b: -72.2 },
      { x: 44, a: new Date(2021, 0, 24), b: -73.4 },
      { x: 45, a: new Date(2021, 0, 31), b: -70.6 },
      { x: 46, a: new Date(2021, 1, 7), b: -70.1 },
      { x: 47, a: new Date(2021, 1, 14), b: -69.2 },
      { x: 48, a: new Date(2021, 1, 21), b: -67.8 },
      { x: 49, a: new Date(2021, 1, 28), b: -62.9 }
    ];

    var ytdData2 = [-87.00, -62.60, -75.00];

    var dataDomain1 = [-40, -50, -60, -70, -80, -90, -100];

    // ============= Variance =============== //

    var varianceData = [
      { a: new Date(2020, 0, 12), b: 3.05, c: 0 },
      { a: new Date(2020, 0, 19), b: 6.52, c: 3.47 },
      { a: new Date(2020, 0, 26), b: 5.66, c: -0.86 },
      { a: new Date(2020, 1, 2), b: -0.95, c: -6.61 },
      { a: new Date(2020, 1, 9), b: -2.01, c: -1.06 },
      { a: new Date(2020, 1, 16), b: -1.71, c: -0.3 },
      { a: new Date(2020, 1, 23), b: -6.06, c: -4.35 },
      { a: new Date(2020, 2, 1), b: -15.64, c: -9.58 },
      { a: new Date(2020, 2, 8), b: -25.55, c: -9.91 },
      { a: new Date(2020, 2, 15), b: -45.23, c: -19.68 },
      { a: new Date(2020, 2, 22), b: -80.03, c: -34.8 },
      { a: new Date(2020, 2, 29), b: -88.47, c: -8.43 },
      { a: new Date(2020, 3, 5), b: -92.27, c: -3.8 },
      { a: new Date(2020, 3, 12), b: -93.79, c: -1.52 },
      { a: new Date(2020, 3, 19), b: -91.93, c: 1.87 },
      { a: new Date(2020, 3, 26), b: -91.49, c: 0.43 },
      { a: new Date(2020, 4, 3), b: -90.24, c: 1.24 },
      { a: new Date(2020, 4, 10), b: -88.64, c: 1.6 },
      { a: new Date(2020, 4, 17), b: -87.37, c: 1.27 },
      { a: new Date(2020, 4, 24), b: -85.22, c: 2.15 },
      { a: new Date(2020, 4, 31), b: -83.71, c: 1.51 },
      { a: new Date(2020, 5, 7), b: -81.11, c: 2.6 },
      { a: new Date(2020, 5, 14), b: -75.21, c: 5.91 },
      { a: new Date(2020, 5, 21), b: -76.54, c: -1.33 },
      { a: new Date(2020, 5, 28), b: -76.98, c: -0.44 },
      { a: new Date(2020, 6, 5), b: -79.35, c: -2.37 },
      { a: new Date(2020, 6, 12), b: -80.7, c: -1.35 },
      { a: new Date(2020, 6, 19), b: -80.56, c: 0.14 },
      { a: new Date(2020, 6, 26), b: -78.75, c: 1.81 },
      { a: new Date(2020, 7, 2), b: -79.09, c: -0.34 },
      { a: new Date(2020, 7, 9), b: -77.0, c: 2.09 },
      { a: new Date(2020, 7, 16), b: -75.77, c: -1.23 },
      { a: new Date(2020, 7, 23), b: -75.14, c: 0.63 },
      { a: new Date(2020, 7, 30), b: -72.71, c: 2.42 },
      { a: new Date(2020, 8, 6), b: -70.41, c: 2.31 },
      { a: new Date(2020, 8, 13), b: -72.03, c: -1.62 },
      { a: new Date(2020, 8, 20), b: -68.98, c: 3.05 },
      { a: new Date(2020, 8, 27), b: -68.12, c: 0.85 },
      { a: new Date(2020, 9, 4), b: -68.08, c: 0.04 },
      { a: new Date(2020, 9, 11), b: -66.97, c: 1.12 },
      { a: new Date(2020, 9, 18), b: -66.17, c: 0.8 },
      { a: new Date(2020, 9, 25), b: -66.15, c: 0.02 },
      { a: new Date(2020, 10, 1), b: -68.55, c: -2.4 },
      { a: new Date(2020, 10, 8), b: -68.42, c: 0.13 },
      { a: new Date(2020, 10, 15), b: -67.44, c: 0.98 },
      { a: new Date(2020, 10, 22), b: -71.22, c: -3.78 },
      { a: new Date(2020, 10, 29), b: -70.54, c: 0.68 },
      { a: new Date(2020, 11, 6), b: -70.79, c: -0.25 },
      { a: new Date(2020, 11, 13), b: -68.28, c: 2.51 },
      { a: new Date(2020, 11, 20), b: -66.17, c: 2.11 },
      { a: new Date(2020, 11, 27), b: -63.82, c: 2.35 },
      { a: new Date(2021, 0, 3), b: -72.62, c: -8.8 },
      { a: new Date(2021, 0, 10), b: -72.6, c: 9.5 },
      { a: new Date(2021, 0, 17), b: -63.1, c: -8.6 },
      { a: new Date(2021, 0, 24), b: -70.5, c: 1.2 },
      { a: new Date(2021, 0, 31), b: -68.0, c: 2.5 },
      { a: new Date(2021, 1, 7), b: -66.9, c: 1.1 },
      { a: new Date(2021, 1, 14), b: -66.5, c: 0.4 },
      { a: new Date(2021, 1, 21), b: -64.0, c: 2.5 },
      { a: new Date(2021, 1, 28), b: -58.9, c: 5.1 }
    ];

    var varianceDomain = [20, 10, 0, -10, -20, -30, -40];

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
          <Graph
            graphTitle={graphTitle1}
            graphSubTitle={graphSubTitle}
            dataTitle={dataTitle1}
            ytdLabels={ytdLabels1}
            data1={data1}
            data2={data2}
            ytdData={ytdData1}
            dataDomain={dataDomain1}
            tableHeaders={tableHeaders1}
            layout="1"
          />
        </div>

        <div className="covid-table">
          <small>
            *<strong>Ticket variance</strong>: Total number of tickets purchased
            compared to the same time period in 2019.
          </small>
          <br />
          <small>
            *<strong>Sales variance</strong>: Total value (dollar amount) paid
            compared to the same time period in 2019.
          </small>
        </div>

        <div className="covidGraphContainer">
          <GraphVariance
            graphTitle={"Air Transaction Variances"}
            graphSubTitle={
              "A week-over-week view of annual transaction variances for airline tickets sold by U.S. travel agencies"
            }
            dataTitle={["Transaction Variance", "Change in Variance"]}
            ytdLabels={ytdLabels1}
            data1={varianceData}
            ytdData={ytdData1}
            dataDomain={varianceDomain}
            tableHeaders={["7-Day Period Ending", "Change in Variance"]}
            layout="0"
          />
        </div>

        <div className="covidGraphContainer">
          <Graph
            graphTitle={graphTitle2}
            graphSubTitle={""}
            dataTitle={dataTitle2}
            ytdLabels={ytdLabels2}
            data1={corporate}
            data2={online}
            data3={leisure}
            ytdData={ytdData2}
            dataDomain={dataDomain1}
            tableHeaders={tableHeaders2}
            layout="0"
          />
        </div>

        <div className="covid-table">
          <small>
            *<strong>Ticket variance</strong>: Total number of tickets purchased
            compared to the same time period in 2019.
          </small>
          <br />
          <small>
            *<strong>Sales variance</strong>: Total value (dollar amount) paid
            compared to the same time period in 2019.
          </small>
        </div>

        <div
          className="covidGraphContianer"
          style={{ marginTop: "60px", marginBottom: "60px" }}
        >
          <div
            style={{
              margin: "0 auto 60px auto",
              maxWidth: "1030px",
              textAlign: "center"
            }}
          >
            <div className="graphTitle">
              Average Air Ticket Price for U.S. Domestic Round Trips
            </div>
          </div>
          <div className="covid-table overflow-auto">
            <div className="row covid-headers">
              <div className="col-4">Month</div>
              <div className="col-4">Change from prior year</div>
              <div className="col-4">Average Ticket Price</div>
            </div>
            <div className="covid-row row d-flex flex-row">
              <div className="d-flex col-4">January 2020</div>
              <div className="d-flex align-items-center flex-row col-4">
                <div className="d-flex mainStatPercentChange">0.42%</div>
                <div className="d-flex mainStatPercentChangeBar">
                  <div className="barChange" style={{ width: "0.42%" }}></div>
                </div>
              </div>
              <div className="d-flex align-items-center flex-row col-4">
                $478
              </div>
            </div>
            <div className="covid-row row d-flex flex-row">
              <div className="d-flex col-4">February 2020</div>
              <div className="d-flex align-items-center flex-row col-4">
                <div className="d-flex mainStatPercentChange">0.41%</div>
                <div className="d-flex mainStatPercentChangeBar">
                  <div className="barChange" style={{ width: "0.41%" }}></div>
                </div>
              </div>
              <div className="d-flex align-items-center flex-row col-4">
                $488
              </div>
            </div>
            <div className="covid-row row d-flex flex-row">
              <div className="d-flex col-4">March 2020</div>
              <div className="d-flex align-items-center flex-row col-4">
                <div className="d-flex mainStatPercentChange">-22.59%</div>
                <div className="d-flex mainStatPercentChangeBar">
                  <div className="barChange" style={{ width: "22.59%" }}></div>
                </div>
              </div>
              <div className="d-flex align-items-center flex-row col-4">
                $377
              </div>
            </div>
            <div className="covid-row row d-flex flex-row">
              <div className="d-flex col-4">April 2020</div>
              <div className="d-flex align-items-center flex-row col-4">
                <div className="d-flex mainStatPercentChange">-32.67%</div>
                <div className="d-flex mainStatPercentChangeBar">
                  <div className="barChange" style={{ width: "32.67%" }}></div>
                </div>
              </div>
              <div className="d-flex align-items-center flex-row col-4">
                $336
              </div>
            </div>
            <div className="covid-row row d-flex flex-row">
              <div className="d-flex col-4">May 2020</div>
              <div className="d-flex align-items-center flex-row col-4">
                <div className="d-flex mainStatPercentChange">-31.0%</div>
                <div className="d-flex mainStatPercentChangeBar">
                  <div className="barChange" style={{ width: "30.92%" }}></div>
                </div>
              </div>
              <div className="d-flex align-items-center flex-row col-4">
                $353
              </div>
            </div>
            <div className="covid-row row d-flex flex-row">
              <div className="d-flex col-4">June 2020</div>
              <div className="d-flex align-items-center flex-row col-4">
                <div className="d-flex mainStatPercentChange">-26.95%</div>
                <div className="d-flex mainStatPercentChangeBar">
                  <div className="barChange" style={{ width: "26.95%" }}></div>
                </div>
              </div>
              <div className="d-flex align-items-center flex-row col-4">
                $374
              </div>
            </div>
            <div className="covid-row row d-flex flex-row">
              <div className="d-flex col-4">July 2020</div>
              <div className="d-flex align-items-center flex-row col-4">
                <div className="d-flex mainStatPercentChange">-28.71%</div>
                <div className="d-flex mainStatPercentChangeBar">
                  <div className="barChange" style={{ width: "28.71%" }}></div>
                </div>
              </div>
              <div className="d-flex align-items-center flex-row col-4">
                $355
              </div>
            </div>
            <div className="covid-row row d-flex flex-row">
              <div className="d-flex col-4">August 2020</div>
              <div className="d-flex align-items-center flex-row col-4">
                <div className="d-flex mainStatPercentChange">-33.54%</div>
                <div className="d-flex mainStatPercentChangeBar">
                  <div className="barChange" style={{ width: "33.54%" }}></div>
                </div>
              </div>
              <div className="d-flex align-items-center flex-row col-4">
                $321
              </div>
            </div>
            <div className="covid-row row d-flex flex-row">
              <div className="d-flex col-4">September 2020</div>
              <div className="d-flex align-items-center flex-row col-4">
                <div className="d-flex mainStatPercentChange">-30.85%</div>
                <div className="d-flex mainStatPercentChangeBar">
                  <div className="barChange" style={{ width: "30.85%" }}></div>
                </div>
              </div>
              <div className="d-flex align-items-center flex-row col-4">
                $343
              </div>
            </div>
            <div className="covid-row row d-flex flex-row">
              <div className="d-flex col-4">October 2020</div>
              <div className="d-flex align-items-center flex-row col-4">
                <div className="d-flex mainStatPercentChange">-25.49%</div>
                <div className="d-flex mainStatPercentChangeBar">
                  <div className="barChange" style={{ width: "25.49%" }}></div>
                </div>
              </div>
              <div className="d-flex align-items-center flex-row col-4">
                $377
              </div>
            </div>
            <div className="covid-row row d-flex flex-row">
              <div className="d-flex col-4">November 2020</div>
              <div className="d-flex align-items-center flex-row col-4">
                <div className="d-flex mainStatPercentChange">-25.81%</div>
                <div className="d-flex mainStatPercentChangeBar">
                  <div className="barChange" style={{ width: "25.81%" }}></div>
                </div>
              </div>
              <div className="d-flex align-items-center flex-row col-4">
                $368
              </div>
            </div>
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
