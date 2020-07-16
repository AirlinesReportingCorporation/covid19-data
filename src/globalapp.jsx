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

import GraphGlobal from "./GraphGlobal.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeGraph: "china",
      direction: 0,
      type: "Global",
      currentData: "",
      subTitle: "Transaction Count",
      dataTitle: ["Transaction Count", "Sales Variance"],
      currentGraph: "",
      tableHeaders1: ["7-Day Period Ending", "Sales", "Exchanges", "Refunds"],
      chinaDataGlobal: [
        [
          { a: new Date(2020, 0, 7), b: -6 },
          { a: new Date(2020, 0, 14), b: -4 },
          { a: new Date(2020, 0, 21), b: -18 },
          { a: new Date(2020, 0, 28), b: -24 },
          { a: new Date(2020, 1, 4), b: -43 },
          { a: new Date(2020, 1, 11), b: -74 },
          { a: new Date(2020, 1, 18), b: -81 },
          { a: new Date(2020, 1, 25), b: -72 },
          { a: new Date(2020, 2, 3), b: -68 },
          { a: new Date(2020, 2, 10), b: -68 },
          { a: new Date(2020, 2, 17), b: -63 },
          { a: new Date(2020, 2, 24), b: -64 },
          { a: new Date(2020, 2, 31), b: -65 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -63 },
          { a: new Date(2020, 3, 28), b: -58 },
          { a: new Date(2020, 4, 5), b: -50 },
          { a: new Date(2020, 4, 12), b: -47 },
          { a: new Date(2020, 4, 19), b: -47 },
          { a: new Date(2020, 4, 26), b: -48 },
          { a: new Date(2020, 5, 2), b: -43 },
          { a: new Date(2020, 5, 9), b: -26 },
          { a: new Date(2020, 5, 16), b: -36 }
        ],
        [
          { a: new Date(2020, 0, 7), b: -4 },
          { a: new Date(2020, 0, 14), b: -2 },
          { a: new Date(2020, 0, 21), b: -17 },
          { a: new Date(2020, 0, 28), b: 28 },
          { a: new Date(2020, 1, 4), b: 77 },
          { a: new Date(2020, 1, 11), b: -1 },
          { a: new Date(2020, 1, 18), b: -54 },
          { a: new Date(2020, 1, 25), b: -65 },
          { a: new Date(2020, 2, 3), b: -58 },
          { a: new Date(2020, 2, 10), b: -63 },
          { a: new Date(2020, 2, 17), b: -62 },
          { a: new Date(2020, 2, 24), b: -63 },
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -69 },
          { a: new Date(2020, 3, 14), b: -72 },
          { a: new Date(2020, 3, 21), b: -67 },
          { a: new Date(2020, 3, 28), b: -69 },
          { a: new Date(2020, 4, 5), b: -61 },
          { a: new Date(2020, 4, 12), b: -59 },
          { a: new Date(2020, 4, 19), b: -57 },
          { a: new Date(2020, 4, 26), b: -59 },
          { a: new Date(2020, 5, 2), b: -57 },
          { a: new Date(2020, 5, 9), b: -42 },
          { a: new Date(2020, 5, 16), b: -44 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 31 },
          { a: new Date(2020, 0, 14), b: 27 },
          { a: new Date(2020, 0, 21), b: 52 },
          { a: new Date(2020, 0, 28), b: 319 },
          { a: new Date(2020, 1, 4), b: 673 },
          { a: new Date(2020, 1, 11), b: 627 },
          { a: new Date(2020, 1, 18), b: 152 },
          { a: new Date(2020, 1, 25), b: 81 },
          { a: new Date(2020, 2, 3), b: 98 },
          { a: new Date(2020, 2, 10), b: 75 },
          { a: new Date(2020, 2, 17), b: 46 },
          { a: new Date(2020, 2, 24), b: 50 },
          { a: new Date(2020, 2, 31), b: 51 },
          { a: new Date(2020, 3, 7), b: 6 },
          { a: new Date(2020, 3, 14), b: -12 },
          { a: new Date(2020, 3, 21), b: -2 },
          { a: new Date(2020, 3, 28), b: -13 },
          { a: new Date(2020, 4, 5), b: -3 },
          { a: new Date(2020, 4, 12), b: 0 },
          { a: new Date(2020, 4, 19), b: -5 },
          { a: new Date(2020, 4, 26), b: -17 },
          { a: new Date(2020, 5, 2), b: -16 },
          { a: new Date(2020, 5, 9), b: -7 },
          { a: new Date(2020, 5, 16), b: 36 }
        ]
      ],
      italyDataGlobal: [
        [
          { a: new Date(2020, 0, 7), b: -1 },
          { a: new Date(2020, 0, 14), b: 5 },
          { a: new Date(2020, 0, 21), b: 11 },
          { a: new Date(2020, 0, 28), b: 4 },
          { a: new Date(2020, 1, 4), b: -2 },
          { a: new Date(2020, 1, 11), b: -2 },
          { a: new Date(2020, 1, 18), b: -2 },
          { a: new Date(2020, 1, 25), b: -24 },
          { a: new Date(2020, 2, 3), b: -63 },
          { a: new Date(2020, 2, 10), b: -75 },
          { a: new Date(2020, 2, 17), b: -85 },
          { a: new Date(2020, 2, 24), b: -91 },
          { a: new Date(2020, 2, 31), b: -95 },
          { a: new Date(2020, 3, 7), b: -91 },
          { a: new Date(2020, 3, 14), b: -97 },
          { a: new Date(2020, 3, 21), b: -96 },
          { a: new Date(2020, 3, 28), b: -96 },
          { a: new Date(2020, 4, 5), b: -95 },
          { a: new Date(2020, 4, 12), b: -94 },
          { a: new Date(2020, 4, 19), b: -91 },
          { a: new Date(2020, 4, 26), b: -89 },
          { a: new Date(2020, 5, 2), b: -86 },
          { a: new Date(2020, 5, 9), b: -75 },
          { a: new Date(2020, 5, 16), b: -75 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 12 },
          { a: new Date(2020, 0, 14), b: -8 },
          { a: new Date(2020, 0, 21), b: 2 },
          { a: new Date(2020, 0, 28), b: -5 },
          { a: new Date(2020, 1, 4), b: -10 },
          { a: new Date(2020, 1, 11), b: 22 },
          { a: new Date(2020, 1, 18), b: -1 },
          { a: new Date(2020, 1, 25), b: 19 },
          { a: new Date(2020, 2, 3), b: 74 },
          { a: new Date(2020, 2, 10), b: 87 },
          { a: new Date(2020, 2, 17), b: 13 },
          { a: new Date(2020, 2, 24), b: -53 },
          { a: new Date(2020, 2, 31), b: -62 },
          { a: new Date(2020, 3, 7), b: -74 },
          { a: new Date(2020, 3, 14), b: -68 },
          { a: new Date(2020, 3, 21), b: -48 },
          { a: new Date(2020, 3, 28), b: -77 },
          { a: new Date(2020, 4, 5), b: -81 },
          { a: new Date(2020, 4, 12), b: -79 },
          { a: new Date(2020, 4, 19), b: -79 },
          { a: new Date(2020, 4, 26), b: -70 },
          { a: new Date(2020, 5, 2), b: -73 },
          { a: new Date(2020, 5, 9), b: -68 },
          { a: new Date(2020, 5, 16), b: -45 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 153 },
          { a: new Date(2020, 0, 14), b: 179 },
          { a: new Date(2020, 0, 21), b: 201 },
          { a: new Date(2020, 0, 28), b: 219 },
          { a: new Date(2020, 1, 4), b: 260 },
          { a: new Date(2020, 1, 11), b: 316 },
          { a: new Date(2020, 1, 18), b: 320 },
          { a: new Date(2020, 1, 25), b: 394 },
          { a: new Date(2020, 2, 3), b: 564 },
          { a: new Date(2020, 2, 10), b: 605 },
          { a: new Date(2020, 2, 17), b: 545 },
          { a: new Date(2020, 2, 24), b: 286 },
          { a: new Date(2020, 2, 31), b: 145 },
          { a: new Date(2020, 3, 7), b: 94 },
          { a: new Date(2020, 3, 14), b: 106 },
          { a: new Date(2020, 3, 21), b: 139 },
          { a: new Date(2020, 3, 28), b: 139 },
          { a: new Date(2020, 4, 5), b: 123 },
          { a: new Date(2020, 4, 12), b: 115 },
          { a: new Date(2020, 4, 19), b: 89 },
          { a: new Date(2020, 4, 26), b: 79 },
          { a: new Date(2020, 5, 2), b: 96 },
          { a: new Date(2020, 5, 9), b: 71 },
          { a: new Date(2020, 5, 16), b: 126 }
        ]
      ],
      japanDataGlobal: [
        [
          { a: new Date(2020, 0, 7), b: -4 },
          { a: new Date(2020, 0, 14), b: 6 },
          { a: new Date(2020, 0, 21), b: 8 },
          { a: new Date(2020, 0, 28), b: -15 },
          { a: new Date(2020, 1, 4), b: -29 },
          { a: new Date(2020, 1, 11), b: -19 },
          { a: new Date(2020, 1, 18), b: -45 },
          { a: new Date(2020, 1, 25), b: -58 },
          { a: new Date(2020, 2, 3), b: -71 },
          { a: new Date(2020, 2, 10), b: -76 },
          { a: new Date(2020, 2, 17), b: -80 },
          { a: new Date(2020, 2, 24), b: -82 },
          { a: new Date(2020, 2, 31), b: -88 },
          { a: new Date(2020, 3, 7), b: -95 },
          { a: new Date(2020, 3, 14), b: -96 },
          { a: new Date(2020, 3, 21), b: -96 },
          { a: new Date(2020, 3, 28), b: -97 },
          { a: new Date(2020, 4, 5), b: -95 },
          { a: new Date(2020, 4, 12), b: -96 },
          { a: new Date(2020, 4, 19), b: -96 },
          { a: new Date(2020, 4, 26), b: -95 },
          { a: new Date(2020, 5, 2), b: -95 },
          { a: new Date(2020, 5, 9), b: -94 },
          { a: new Date(2020, 5, 16), b: -93 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 10 },
          { a: new Date(2020, 0, 14), b: 4 },
          { a: new Date(2020, 0, 21), b: 6 },
          { a: new Date(2020, 0, 28), b: 31 },
          { a: new Date(2020, 1, 4), b: 58 },
          { a: new Date(2020, 1, 11), b: 75 },
          { a: new Date(2020, 1, 18), b: 41 },
          { a: new Date(2020, 1, 25), b: 36 },
          { a: new Date(2020, 2, 3), b: 46 },
          { a: new Date(2020, 2, 10), b: 65 },
          { a: new Date(2020, 2, 17), b: 78 },
          { a: new Date(2020, 2, 24), b: 74 },
          { a: new Date(2020, 2, 31), b: -4 },
          { a: new Date(2020, 3, 7), b: -47 },
          { a: new Date(2020, 3, 14), b: -59 },
          { a: new Date(2020, 3, 21), b: -43 },
          { a: new Date(2020, 3, 28), b: -57 },
          { a: new Date(2020, 4, 5), b: -62 },
          { a: new Date(2020, 4, 12), b: -70 },
          { a: new Date(2020, 4, 19), b: -58 },
          { a: new Date(2020, 4, 26), b: -59 },
          { a: new Date(2020, 5, 2), b: -63 },
          { a: new Date(2020, 5, 9), b: -68 },
          { a: new Date(2020, 5, 16), b: -52 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 59 },
          { a: new Date(2020, 0, 14), b: 75 },
          { a: new Date(2020, 0, 21), b: 85 },
          { a: new Date(2020, 0, 28), b: 173 },
          { a: new Date(2020, 1, 4), b: 501 },
          { a: new Date(2020, 1, 11), b: 591 },
          { a: new Date(2020, 1, 18), b: 402 },
          { a: new Date(2020, 1, 25), b: 383 },
          { a: new Date(2020, 2, 3), b: 468 },
          { a: new Date(2020, 2, 10), b: 516 },
          { a: new Date(2020, 2, 17), b: 466 },
          { a: new Date(2020, 2, 24), b: 515 },
          { a: new Date(2020, 2, 31), b: 356 },
          { a: new Date(2020, 3, 7), b: 187 },
          { a: new Date(2020, 3, 14), b: 146 },
          { a: new Date(2020, 3, 21), b: 140 },
          { a: new Date(2020, 3, 28), b: 84 },
          { a: new Date(2020, 4, 5), b: 80 },
          { a: new Date(2020, 4, 12), b: 48 },
          { a: new Date(2020, 4, 19), b: 53 },
          { a: new Date(2020, 4, 26), b: 24 },
          { a: new Date(2020, 5, 2), b: 25 },
          { a: new Date(2020, 5, 9), b: 56 },
          { a: new Date(2020, 5, 16), b: 49 }
        ]
      ],
      southkoreaDataGlobal: [
        [
          { a: new Date(2020, 0, 7), b: -2 },
          { a: new Date(2020, 0, 14), b: -5 },
          { a: new Date(2020, 0, 21), b: -4 },
          { a: new Date(2020, 0, 28), b: -24 },
          { a: new Date(2020, 1, 4), b: -29 },
          { a: new Date(2020, 1, 11), b: -35 },
          { a: new Date(2020, 1, 18), b: -40 },
          { a: new Date(2020, 1, 25), b: -61 },
          { a: new Date(2020, 2, 3), b: -72 },
          { a: new Date(2020, 2, 10), b: -75 },
          { a: new Date(2020, 2, 17), b: -78 },
          { a: new Date(2020, 2, 24), b: -76 },
          { a: new Date(2020, 2, 31), b: -82 },
          { a: new Date(2020, 3, 7), b: -80 },
          { a: new Date(2020, 3, 14), b: -79 },
          { a: new Date(2020, 3, 21), b: -73 },
          { a: new Date(2020, 3, 28), b: -72 },
          { a: new Date(2020, 4, 5), b: -74 },
          { a: new Date(2020, 4, 12), b: -71 },
          { a: new Date(2020, 4, 19), b: -75 },
          { a: new Date(2020, 4, 26), b: -73 },
          { a: new Date(2020, 5, 2), b: -80 },
          { a: new Date(2020, 5, 9), b: -75 },
          { a: new Date(2020, 5, 16), b: -76 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 11 },
          { a: new Date(2020, 0, 14), b: 10 },
          { a: new Date(2020, 0, 21), b: 6 },
          { a: new Date(2020, 0, 28), b: 10 },
          { a: new Date(2020, 1, 4), b: 41 },
          { a: new Date(2020, 1, 11), b: 42 },
          { a: new Date(2020, 1, 18), b: 10 },
          { a: new Date(2020, 1, 25), b: 26 },
          { a: new Date(2020, 2, 3), b: 19 },
          { a: new Date(2020, 2, 10), b: 5 },
          { a: new Date(2020, 2, 17), b: -14 },
          { a: new Date(2020, 2, 24), b: -20 },
          { a: new Date(2020, 2, 31), b: -41 },
          { a: new Date(2020, 3, 7), b: -52 },
          { a: new Date(2020, 3, 14), b: -61 },
          { a: new Date(2020, 3, 21), b: -59 },
          { a: new Date(2020, 3, 28), b: -57 },
          { a: new Date(2020, 4, 5), b: -57 },
          { a: new Date(2020, 4, 12), b: -60 },
          { a: new Date(2020, 4, 19), b: -62 },
          { a: new Date(2020, 4, 26), b: -61 },
          { a: new Date(2020, 5, 2), b: -69 },
          { a: new Date(2020, 5, 9), b: -54 },
          { a: new Date(2020, 5, 16), b: -62 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 8 },
          { a: new Date(2020, 0, 14), b: 18 },
          { a: new Date(2020, 0, 21), b: 22 },
          { a: new Date(2020, 0, 28), b: 134 },
          { a: new Date(2020, 1, 4), b: 361 },
          { a: new Date(2020, 1, 11), b: 280 },
          { a: new Date(2020, 1, 18), b: 125 },
          { a: new Date(2020, 1, 25), b: 241 },
          { a: new Date(2020, 2, 3), b: 230 },
          { a: new Date(2020, 2, 10), b: 161 },
          { a: new Date(2020, 2, 17), b: 135 },
          { a: new Date(2020, 2, 24), b: 111 },
          { a: new Date(2020, 2, 31), b: 93 },
          { a: new Date(2020, 3, 7), b: 31 },
          { a: new Date(2020, 3, 14), b: 8 },
          { a: new Date(2020, 3, 21), b: 12 },
          { a: new Date(2020, 3, 28), b: 15 },
          { a: new Date(2020, 4, 5), b: -20 },
          { a: new Date(2020, 4, 12), b: 10 },
          { a: new Date(2020, 4, 19), b: -3 },
          { a: new Date(2020, 4, 26), b: -14 },
          { a: new Date(2020, 5, 2), b: -23 },
          { a: new Date(2020, 5, 9), b: -17 },
          { a: new Date(2020, 5, 16), b: -19 }
        ]
      ],
      chinaDataDomestic: [
        [
          { a: new Date(2020, 0, 7), b: -6 },
          { a: new Date(2020, 0, 14), b: -3 },
          { a: new Date(2020, 0, 21), b: -22 },
          { a: new Date(2020, 0, 28), b: -23 },
          { a: new Date(2020, 1, 4), b: -45 },
          { a: new Date(2020, 1, 11), b: -76 },
          { a: new Date(2020, 1, 18), b: -82 },
          { a: new Date(2020, 1, 25), b: -70 },
          { a: new Date(2020, 2, 3), b: -65 },
          { a: new Date(2020, 2, 10), b: -64 },
          { a: new Date(2020, 2, 17), b: -61 },
          { a: new Date(2020, 2, 24), b: -61 },
          { a: new Date(2020, 2, 31), b: -61 },
          { a: new Date(2020, 3, 7), b: -62 },
          { a: new Date(2020, 3, 14), b: -61 },
          { a: new Date(2020, 3, 21), b: -58 },
          { a: new Date(2020, 3, 28), b: -51 },
          { a: new Date(2020, 4, 5), b: -41 },
          { a: new Date(2020, 4, 12), b: -37 },
          { a: new Date(2020, 4, 19), b: -37 },
          { a: new Date(2020, 4, 26), b: -39 },
          { a: new Date(2020, 5, 2), b: -33 },
          { a: new Date(2020, 5, 9), b: -12 },
          { a: new Date(2020, 5, 16), b: -25 }
        ],
        [
          { a: new Date(2020, 0, 7), b: -5 },
          { a: new Date(2020, 0, 14), b: 0 },
          { a: new Date(2020, 0, 21), b: -19 },
          { a: new Date(2020, 0, 28), b: 3 },
          { a: new Date(2020, 1, 4), b: 7 },
          { a: new Date(2020, 1, 11), b: -36 },
          { a: new Date(2020, 1, 18), b: -74 },
          { a: new Date(2020, 1, 25), b: -77 },
          { a: new Date(2020, 2, 3), b: -68 },
          { a: new Date(2020, 2, 10), b: -69 },
          { a: new Date(2020, 2, 17), b: -67 },
          { a: new Date(2020, 2, 24), b: -67 },
          { a: new Date(2020, 2, 31), b: -65 },
          { a: new Date(2020, 3, 7), b: -65 },
          { a: new Date(2020, 3, 14), b: -68 },
          { a: new Date(2020, 3, 21), b: -66 },
          { a: new Date(2020, 3, 28), b: -64 },
          { a: new Date(2020, 4, 5), b: -52 },
          { a: new Date(2020, 4, 12), b: -48 },
          { a: new Date(2020, 4, 19), b: -47 },
          { a: new Date(2020, 4, 26), b: -52 },
          { a: new Date(2020, 5, 2), b: -47 },
          { a: new Date(2020, 5, 9), b: -26 },
          { a: new Date(2020, 5, 16), b: -29 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 31 },
          { a: new Date(2020, 0, 14), b: 26 },
          { a: new Date(2020, 0, 21), b: 50 },
          { a: new Date(2020, 0, 28), b: 321 },
          { a: new Date(2020, 1, 4), b: 625 },
          { a: new Date(2020, 1, 11), b: 534 },
          { a: new Date(2020, 1, 18), b: 103 },
          { a: new Date(2020, 1, 25), b: 39 },
          { a: new Date(2020, 2, 3), b: 69 },
          { a: new Date(2020, 2, 10), b: 52 },
          { a: new Date(2020, 2, 17), b: 25 },
          { a: new Date(2020, 2, 24), b: 22 },
          { a: new Date(2020, 2, 31), b: 20 },
          { a: new Date(2020, 3, 7), b: -7 },
          { a: new Date(2020, 3, 14), b: -20 },
          { a: new Date(2020, 3, 21), b: -13 },
          { a: new Date(2020, 3, 28), b: -18 },
          { a: new Date(2020, 4, 5), b: -1 },
          { a: new Date(2020, 4, 12), b: 2 },
          { a: new Date(2020, 4, 19), b: -5 },
          { a: new Date(2020, 4, 26), b: -22 },
          { a: new Date(2020, 5, 2), b: -17 },
          { a: new Date(2020, 5, 9), b: -6 },
          { a: new Date(2020, 5, 16), b: 44 }
        ]
      ],
      italyDataDomestic: [
        [
          { a: new Date(2020, 0, 7), b: -2 },
          { a: new Date(2020, 0, 14), b: 11 },
          { a: new Date(2020, 0, 21), b: 8 },
          { a: new Date(2020, 0, 28), b: 9 },
          { a: new Date(2020, 1, 4), b: -4 },
          { a: new Date(2020, 1, 11), b: 2 },
          { a: new Date(2020, 1, 18), b: 6 },
          { a: new Date(2020, 1, 25), b: -23 },
          { a: new Date(2020, 2, 3), b: -57 },
          { a: new Date(2020, 2, 10), b: -72 },
          { a: new Date(2020, 2, 17), b: -89 },
          { a: new Date(2020, 2, 24), b: -90 },
          { a: new Date(2020, 2, 31), b: -94 },
          { a: new Date(2020, 3, 7), b: -95 },
          { a: new Date(2020, 3, 14), b: -95 },
          { a: new Date(2020, 3, 21), b: -92 },
          { a: new Date(2020, 3, 28), b: -91 },
          { a: new Date(2020, 4, 5), b: -91 },
          { a: new Date(2020, 4, 12), b: -87 },
          { a: new Date(2020, 4, 19), b: -83 },
          { a: new Date(2020, 4, 26), b: -80 },
          { a: new Date(2020, 5, 2), b: -70 },
          { a: new Date(2020, 5, 9), b: -46 },
          { a: new Date(2020, 5, 16), b: -47 }
        ],
        [
          { a: new Date(2020, 0, 7), b: -53 },
          { a: new Date(2020, 0, 14), b: -44 },
          { a: new Date(2020, 0, 21), b: -48 },
          { a: new Date(2020, 0, 28), b: -42 },
          { a: new Date(2020, 1, 4), b: -51 },
          { a: new Date(2020, 1, 11), b: -31 },
          { a: new Date(2020, 1, 18), b: -48 },
          { a: new Date(2020, 1, 25), b: 20 },
          { a: new Date(2020, 2, 3), b: 200 },
          { a: new Date(2020, 2, 10), b: -34 },
          { a: new Date(2020, 2, 17), b: -16 },
          { a: new Date(2020, 2, 24), b: -22 },
          { a: new Date(2020, 2, 31), b: -10 },
          { a: new Date(2020, 3, 7), b: -73 },
          { a: new Date(2020, 3, 14), b: 19 },
          { a: new Date(2020, 3, 21), b: -66 },
          { a: new Date(2020, 3, 28), b: -78 },
          { a: new Date(2020, 4, 5), b: -75 },
          { a: new Date(2020, 4, 12), b: -44 },
          { a: new Date(2020, 4, 19), b: -67 },
          { a: new Date(2020, 4, 26), b: -54 },
          { a: new Date(2020, 5, 2), b: -44 },
          { a: new Date(2020, 5, 9), b: -87 },
          { a: new Date(2020, 5, 16), b: -80 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 198 },
          { a: new Date(2020, 0, 14), b: 229 },
          { a: new Date(2020, 0, 21), b: 249 },
          { a: new Date(2020, 0, 28), b: 235 },
          { a: new Date(2020, 1, 4), b: 227 },
          { a: new Date(2020, 1, 11), b: 396 },
          { a: new Date(2020, 1, 18), b: 492 },
          { a: new Date(2020, 1, 25), b: 566 },
          { a: new Date(2020, 2, 3), b: 646 },
          { a: new Date(2020, 2, 10), b: 441 },
          { a: new Date(2020, 2, 17), b: 142 },
          { a: new Date(2020, 2, 24), b: 114 },
          { a: new Date(2020, 2, 31), b: 63 },
          { a: new Date(2020, 3, 7), b: -11 },
          { a: new Date(2020, 3, 14), b: -18 },
          { a: new Date(2020, 3, 21), b: -35 },
          { a: new Date(2020, 3, 28), b: -28 },
          { a: new Date(2020, 4, 5), b: -32 },
          { a: new Date(2020, 4, 12), b: -38 },
          { a: new Date(2020, 4, 19), b: -43 },
          { a: new Date(2020, 4, 26), b: -49 },
          { a: new Date(2020, 5, 2), b: -1 },
          { a: new Date(2020, 5, 9), b: -52 },
          { a: new Date(2020, 5, 16), b: -40 }
        ]
      ],
      japanDataDomestic: [
        [
          { a: new Date(2020, 0, 7), b: -8 },
          { a: new Date(2020, 0, 14), b: -10 },
          { a: new Date(2020, 0, 21), b: -11 },
          { a: new Date(2020, 0, 28), b: -24 },
          { a: new Date(2020, 1, 4), b: -36 },
          { a: new Date(2020, 1, 11), b: -24 },
          { a: new Date(2020, 1, 18), b: -34 },
          { a: new Date(2020, 1, 25), b: -47 },
          { a: new Date(2020, 2, 3), b: -65 },
          { a: new Date(2020, 2, 10), b: -64 },
          { a: new Date(2020, 2, 17), b: -66 },
          { a: new Date(2020, 2, 24), b: -63 },
          { a: new Date(2020, 2, 31), b: -75 },
          { a: new Date(2020, 3, 7), b: -87 },
          { a: new Date(2020, 3, 14), b: -93 },
          { a: new Date(2020, 3, 21), b: -93 },
          { a: new Date(2020, 3, 28), b: -94 },
          { a: new Date(2020, 4, 5), b: -92 },
          { a: new Date(2020, 4, 12), b: -91 },
          { a: new Date(2020, 4, 19), b: -90 },
          { a: new Date(2020, 4, 26), b: -84 },
          { a: new Date(2020, 5, 2), b: -80 },
          { a: new Date(2020, 5, 9), b: -80 },
          { a: new Date(2020, 5, 16), b: -73 }
        ],
        [
          { a: new Date(2020, 0, 7), b: -8 },
          { a: new Date(2020, 0, 14), b: 23 },
          { a: new Date(2020, 0, 21), b: 39 },
          { a: new Date(2020, 0, 28), b: 10 },
          { a: new Date(2020, 1, 4), b: -21 },
          { a: new Date(2020, 1, 11), b: -17 },
          { a: new Date(2020, 1, 18), b: 6 },
          { a: new Date(2020, 1, 25), b: 41 },
          { a: new Date(2020, 2, 3), b: 4 },
          { a: new Date(2020, 2, 10), b: 88 },
          { a: new Date(2020, 2, 17), b: 169 },
          { a: new Date(2020, 2, 24), b: 125 },
          { a: new Date(2020, 2, 31), b: 51 },
          { a: new Date(2020, 3, 7), b: 3 },
          { a: new Date(2020, 3, 14), b: -6 },
          { a: new Date(2020, 3, 21), b: -27 },
          { a: new Date(2020, 3, 28), b: 0 },
          { a: new Date(2020, 4, 5), b: -29 },
          { a: new Date(2020, 4, 12), b: -39 },
          { a: new Date(2020, 4, 19), b: -24 },
          { a: new Date(2020, 4, 26), b: 37 },
          { a: new Date(2020, 5, 2), b: 16 },
          { a: new Date(2020, 5, 9), b: 1 },
          { a: new Date(2020, 5, 16), b: 23 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 57 },
          { a: new Date(2020, 0, 14), b: 83 },
          { a: new Date(2020, 0, 21), b: 92 },
          { a: new Date(2020, 0, 28), b: 97 },
          { a: new Date(2020, 1, 4), b: 178 },
          { a: new Date(2020, 1, 11), b: 205 },
          { a: new Date(2020, 1, 18), b: 259 },
          { a: new Date(2020, 1, 25), b: 344 },
          { a: new Date(2020, 2, 3), b: 272 },
          { a: new Date(2020, 2, 10), b: 318 },
          { a: new Date(2020, 2, 17), b: 293 },
          { a: new Date(2020, 2, 24), b: 299 },
          { a: new Date(2020, 2, 31), b: 349 },
          { a: new Date(2020, 3, 7), b: 126 },
          { a: new Date(2020, 3, 14), b: 142 },
          { a: new Date(2020, 3, 21), b: 112 },
          { a: new Date(2020, 3, 28), b: 120 },
          { a: new Date(2020, 4, 5), b: 84 },
          { a: new Date(2020, 4, 12), b: 60 },
          { a: new Date(2020, 4, 19), b: 23 },
          { a: new Date(2020, 4, 26), b: 3 },
          { a: new Date(2020, 5, 2), b: -7 },
          { a: new Date(2020, 5, 9), b: -3 },
          { a: new Date(2020, 5, 16), b: -14 }
        ]
      ],
      southkoreaDataDomestic: [
        [
          { a: new Date(2020, 0, 7), b: 2 },
          { a: new Date(2020, 0, 14), b: -11 },
          { a: new Date(2020, 0, 21), b: -17 },
          { a: new Date(2020, 0, 28), b: -29 },
          { a: new Date(2020, 1, 4), b: -23 },
          { a: new Date(2020, 1, 11), b: -30 },
          { a: new Date(2020, 1, 18), b: -12 },
          { a: new Date(2020, 1, 25), b: -57 },
          { a: new Date(2020, 2, 3), b: -60 },
          { a: new Date(2020, 2, 10), b: -58 },
          { a: new Date(2020, 2, 17), b: -61 },
          { a: new Date(2020, 2, 24), b: -55 },
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -55 },
          { a: new Date(2020, 3, 14), b: -46 },
          { a: new Date(2020, 3, 21), b: -26 },
          { a: new Date(2020, 3, 28), b: -23 },
          { a: new Date(2020, 4, 5), b: -31 },
          { a: new Date(2020, 4, 12), b: -18 },
          { a: new Date(2020, 4, 19), b: -30 },
          { a: new Date(2020, 4, 26), b: -25 },
          { a: new Date(2020, 5, 2), b: -45 },
          { a: new Date(2020, 5, 9), b: -31 },
          { a: new Date(2020, 5, 16), b: -37}
        ],
        [
          { a: new Date(2020, 0, 7), b: 27 },
          { a: new Date(2020, 0, 14), b: 29 },
          { a: new Date(2020, 0, 21), b: 28 },
          { a: new Date(2020, 0, 28), b: 29 },
          { a: new Date(2020, 1, 4), b: 6 },
          { a: new Date(2020, 1, 11), b: 1 },
          { a: new Date(2020, 1, 18), b: -20 },
          { a: new Date(2020, 1, 25), b: -8 },
          { a: new Date(2020, 2, 3), b: -48 },
          { a: new Date(2020, 2, 10), b: -55 },
          { a: new Date(2020, 2, 17), b: -45 },
          { a: new Date(2020, 2, 24), b: -44 },
          { a: new Date(2020, 2, 31), b: -46 },
          { a: new Date(2020, 3, 7), b: -45 },
          { a: new Date(2020, 3, 14), b: -53 },
          { a: new Date(2020, 3, 21), b: -41 },
          { a: new Date(2020, 3, 28), b: -27 },
          { a: new Date(2020, 4, 5), b: -19 },
          { a: new Date(2020, 4, 12), b: -28 },
          { a: new Date(2020, 4, 19), b: -33 },
          { a: new Date(2020, 4, 26), b: -33 },
          { a: new Date(2020, 5, 2), b: -52 },
          { a: new Date(2020, 5, 9), b: -23 },
          { a: new Date(2020, 5, 16), b: -31 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 1 },
          { a: new Date(2020, 0, 14), b: 6 },
          { a: new Date(2020, 0, 21), b: 2 },
          { a: new Date(2020, 0, 28), b: 141 },
          { a: new Date(2020, 1, 4), b: 258 },
          { a: new Date(2020, 1, 11), b: 166 },
          { a: new Date(2020, 1, 18), b: 26 },
          { a: new Date(2020, 1, 25), b: 234 },
          { a: new Date(2020, 2, 3), b: 76 },
          { a: new Date(2020, 2, 10), b: -1 },
          { a: new Date(2020, 2, 17), b: -5 },
          { a: new Date(2020, 2, 24), b: -16 },
          { a: new Date(2020, 2, 31), b: -7 },
          { a: new Date(2020, 3, 7), b: -23 },
          { a: new Date(2020, 3, 14), b: -37 },
          { a: new Date(2020, 3, 21), b: -18 },
          { a: new Date(2020, 3, 28), b: -15 },
          { a: new Date(2020, 4, 5), b: -30 },
          { a: new Date(2020, 4, 12), b: 3 },
          { a: new Date(2020, 4, 19), b: -13 },
          { a: new Date(2020, 4, 26), b: -26 },
          { a: new Date(2020, 5, 2), b: -20 },
          { a: new Date(2020, 5, 9), b: -12 },
          { a: new Date(2020, 5, 16), b: -27 }
        ]
      ],
      chinaDataInbound: [
        [
          { a: new Date(2020, 0, 7), b: -2 },
          { a: new Date(2020, 0, 14), b: -9 },
          { a: new Date(2020, 0, 21), b: -9 },
          { a: new Date(2020, 0, 28), b: -41 },
          { a: new Date(2020, 1, 4), b: -26 },
          { a: new Date(2020, 1, 11), b: -62 },
          { a: new Date(2020, 1, 18), b: -80 },
          { a: new Date(2020, 1, 25), b: -76 },
          { a: new Date(2020, 2, 3), b: -74 },
          { a: new Date(2020, 2, 10), b: -73 },
          { a: new Date(2020, 2, 17), b: -45 },
          { a: new Date(2020, 2, 24), b: -57 },
          { a: new Date(2020, 2, 31), b: -67 },
          { a: new Date(2020, 3, 7), b: -85 },
          { a: new Date(2020, 3, 14), b: -87 },
          { a: new Date(2020, 3, 21), b: -80 },
          { a: new Date(2020, 3, 28), b: -88 },
          { a: new Date(2020, 4, 5), b: -90 },
          { a: new Date(2020, 4, 12), b: -91 },
          { a: new Date(2020, 4, 19), b: -90 },
          { a: new Date(2020, 4, 26), b: -87 },
          { a: new Date(2020, 5, 2), b: -92 },
          { a: new Date(2020, 5, 9), b: -92 }
        ],
        [
          { a: new Date(2020, 0, 7), b: -7 },
          { a: new Date(2020, 0, 14), b: -10 },
          { a: new Date(2020, 0, 21), b: -14 },
          { a: new Date(2020, 0, 28), b: 86 },
          { a: new Date(2020, 1, 4), b: 289 },
          { a: new Date(2020, 1, 11), b: 95 },
          { a: new Date(2020, 1, 18), b: -10 },
          { a: new Date(2020, 1, 25), b: -30 },
          { a: new Date(2020, 2, 3), b: -28 },
          { a: new Date(2020, 2, 10), b: -43 },
          { a: new Date(2020, 2, 17), b: -40 },
          { a: new Date(2020, 2, 24), b: -35 },
          { a: new Date(2020, 2, 31), b: -50 },
          { a: new Date(2020, 3, 7), b: -70 },
          { a: new Date(2020, 3, 14), b: -73 },
          { a: new Date(2020, 3, 21), b: -52 },
          { a: new Date(2020, 3, 28), b: -70 },
          { a: new Date(2020, 4, 5), b: -73 },
          { a: new Date(2020, 4, 12), b: -76 },
          { a: new Date(2020, 4, 19), b: -74 },
          { a: new Date(2020, 4, 26), b: -68 },
          { a: new Date(2020, 5, 2), b: -79 },
          { a: new Date(2020, 5, 9), b: -77 },
          { a: new Date(2020, 5, 16), b: -77 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 35 },
          { a: new Date(2020, 0, 14), b: 48 },
          { a: new Date(2020, 0, 21), b: 70 },
          { a: new Date(2020, 0, 28), b: 312 },
          { a: new Date(2020, 1, 4), b: 935 },
          { a: new Date(2020, 1, 11), b: 1081 },
          { a: new Date(2020, 1, 18), b: 492 },
          { a: new Date(2020, 1, 25), b: 355 },
          { a: new Date(2020, 2, 3), b: 266 },
          { a: new Date(2020, 2, 10), b: 207 },
          { a: new Date(2020, 2, 17), b: 210 },
          { a: new Date(2020, 2, 24), b: 366 },
          { a: new Date(2020, 2, 31), b: 448 },
          { a: new Date(2020, 3, 7), b: 187 },
          { a: new Date(2020, 3, 14), b: 102 },
          { a: new Date(2020, 3, 21), b: 227 },
          { a: new Date(2020, 3, 28), b: 115 },
          { a: new Date(2020, 4, 5), b: 30 },
          { a: new Date(2020, 4, 12), b: 35 },
          { a: new Date(2020, 4, 19), b: 47 },
          { a: new Date(2020, 4, 26), b: 99 },
          { a: new Date(2020, 5, 2), b: 44 },
          { a: new Date(2020, 5, 9), b: 27 },
          { a: new Date(2020, 5, 16), b: 23 }
        ]
      ],
      italyDataInbound: [
        [
          { a: new Date(2020, 0, 7), b: 3 },
          { a: new Date(2020, 0, 14), b: 6 },
          { a: new Date(2020, 0, 21), b: 17 },
          { a: new Date(2020, 0, 28), b: 6 },
          { a: new Date(2020, 1, 4), b: 0 },
          { a: new Date(2020, 1, 11), b: 1 },
          { a: new Date(2020, 1, 18), b: -3 },
          { a: new Date(2020, 1, 25), b: -26 },
          { a: new Date(2020, 2, 3), b: -70 },
          { a: new Date(2020, 2, 10), b: -79 },
          { a: new Date(2020, 2, 17), b: -84 },
          { a: new Date(2020, 2, 24), b: -89 },
          { a: new Date(2020, 2, 31), b: -95 },
          { a: new Date(2020, 3, 7), b: -85 },
          { a: new Date(2020, 3, 14), b: -97 },
          { a: new Date(2020, 3, 21), b: -97 },
          { a: new Date(2020, 3, 28), b: -97 },
          { a: new Date(2020, 4, 5), b: -96 },
          { a: new Date(2020, 4, 12), b: -95 },
          { a: new Date(2020, 4, 19), b: -92 },
          { a: new Date(2020, 4, 26), b: -90 },
          { a: new Date(2020, 5, 2), b: -88 },
          { a: new Date(2020, 5, 9), b: -79 },
          { a: new Date(2020, 5, 16), b: -79 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 10 },
          { a: new Date(2020, 0, 14), b: -4 },
          { a: new Date(2020, 0, 21), b: 9 },
          { a: new Date(2020, 0, 28), b: 5 },
          { a: new Date(2020, 1, 4), b: -7 },
          { a: new Date(2020, 1, 11), b: 19 },
          { a: new Date(2020, 1, 18), b: 5 },
          { a: new Date(2020, 1, 25), b: 13 },
          { a: new Date(2020, 2, 3), b: 53 },
          { a: new Date(2020, 2, 10), b: 81 },
          { a: new Date(2020, 2, 17), b: 20 },
          { a: new Date(2020, 2, 24), b: -49 },
          { a: new Date(2020, 2, 31), b: -60 },
          { a: new Date(2020, 3, 7), b: -72 },
          { a: new Date(2020, 3, 14), b: -72 },
          { a: new Date(2020, 3, 21), b: -38 },
          { a: new Date(2020, 3, 28), b: -74 },
          { a: new Date(2020, 4, 5), b: -79 },
          { a: new Date(2020, 4, 12), b: -78 },
          { a: new Date(2020, 4, 19), b: -68 },
          { a: new Date(2020, 4, 26), b: -66 },
          { a: new Date(2020, 5, 2), b: -70 },
          { a: new Date(2020, 5, 9), b: -59 },
          { a: new Date(2020, 5, 16), b: -49 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 172 },
          { a: new Date(2020, 0, 14), b: 184 },
          { a: new Date(2020, 0, 21), b: 210 },
          { a: new Date(2020, 0, 28), b: 221 },
          { a: new Date(2020, 1, 4), b: 255 },
          { a: new Date(2020, 1, 11), b: 298  },
          { a: new Date(2020, 1, 18), b: 297 },
          { a: new Date(2020, 1, 25), b: 372 },
          { a: new Date(2020, 2, 3), b: 569 },
          { a: new Date(2020, 2, 10), b: 661 },
          { a: new Date(2020, 2, 17), b: 671 },
          { a: new Date(2020, 2, 24), b: 358 },
          { a: new Date(2020, 2, 31), b: 358 },
          { a: new Date(2020, 3, 7), b: 212 },
          { a: new Date(2020, 3, 14), b: 141 },
          { a: new Date(2020, 3, 21), b: 184 },
          { a: new Date(2020, 3, 28), b: 215 },
          { a: new Date(2020, 4, 5), b: 204 },
          { a: new Date(2020, 4, 12), b: 188 },
          { a: new Date(2020, 4, 19), b: 150 },
          { a: new Date(2020, 4, 26), b: 136 },
          { a: new Date(2020, 5, 2), b: 137 },
          { a: new Date(2020, 5, 9), b: 109 },
          { a: new Date(2020, 5, 16), b: 187 }
        ]
      ],
      japanDataInbound: [
        [
          { a: new Date(2020, 0, 7), b: -8 },
          { a: new Date(2020, 0, 14), b: 4 },
          { a: new Date(2020, 0, 21), b: 12 },
          { a: new Date(2020, 0, 28), b: -23 },
          { a: new Date(2020, 1, 4), b: -39 },
          { a: new Date(2020, 1, 11), b: -31 },
          { a: new Date(2020, 1, 18), b: -60 },
          { a: new Date(2020, 1, 25), b: -70 },
          { a: new Date(2020, 2, 3), b: -81 },
          { a: new Date(2020, 2, 10), b: -82 },
          { a: new Date(2020, 2, 17), b: -83 },
          { a: new Date(2020, 2, 24), b: -82 },
          { a: new Date(2020, 2, 31), b: -89 },
          { a: new Date(2020, 3, 7), b: -94 },
          { a: new Date(2020, 3, 14), b: -96 },
          { a: new Date(2020, 3, 21), b: -96 },
          { a: new Date(2020, 3, 28), b: -97 },
          { a: new Date(2020, 4, 5), b: -97 },
          { a: new Date(2020, 4, 12), b: -97 },
          { a: new Date(2020, 4, 19), b: -96 },
          { a: new Date(2020, 4, 26), b: -96 },
          { a: new Date(2020, 5, 2), b: -95 },
          { a: new Date(2020, 5, 9), b: -95 },
          { a: new Date(2020, 5, 16), b: -95 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 11 },
          { a: new Date(2020, 0, 14), b: 8 },
          { a: new Date(2020, 0, 21), b: 8 },
          { a: new Date(2020, 0, 28), b: 20 },
          { a: new Date(2020, 1, 4), b: 31 },
          { a: new Date(2020, 1, 11), b: 74 },
          { a: new Date(2020, 1, 18), b: 35 },
          { a: new Date(2020, 1, 25), b: 28 },
          { a: new Date(2020, 2, 3), b: 34 },
          { a: new Date(2020, 2, 10), b: 66 },
          { a: new Date(2020, 2, 17), b: 80 },
          { a: new Date(2020, 2, 24), b: 71 },
          { a: new Date(2020, 2, 31), b: -13 },
          { a: new Date(2020, 3, 7), b: -51 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -49 },
          { a: new Date(2020, 3, 28), b: -64 },
          { a: new Date(2020, 4, 5), b: -70 },
          { a: new Date(2020, 4, 12), b: -76 },
          { a: new Date(2020, 4, 19), b: -71 },
          { a: new Date(2020, 4, 26), b: -65 },
          { a: new Date(2020, 5, 2), b: -70 },
          { a: new Date(2020, 5, 9), b: -71 },
          { a: new Date(2020, 5, 16), b: -62 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 43 },
          { a: new Date(2020, 0, 14), b: 56 },
          { a: new Date(2020, 0, 21), b: 82 },
          { a: new Date(2020, 0, 28), b: 171 },
          { a: new Date(2020, 1, 4), b: 690 },
          { a: new Date(2020, 1, 11), b: 787 },
          { a: new Date(2020, 1, 18), b: 432 },
          { a: new Date(2020, 1, 25), b: 407 },
          { a: new Date(2020, 2, 3), b: 457 },
          { a: new Date(2020, 2, 10), b: 495 },
          { a: new Date(2020, 2, 17), b: 407 },
          { a: new Date(2020, 2, 24), b: 475 },
          { a: new Date(2020, 2, 31), b: 300 },
          { a: new Date(2020, 3, 7), b: 209 },
          { a: new Date(2020, 3, 14), b: 181 },
          { a: new Date(2020, 3, 21), b: 201 },
          { a: new Date(2020, 3, 28), b: 137 },
          { a: new Date(2020, 4, 5), b: 98 },
          { a: new Date(2020, 4, 12), b: 88 },
          { a: new Date(2020, 4, 19), b:  73 },
          { a: new Date(2020, 4, 26), b: 52 },
          { a: new Date(2020, 5, 2), b:70 },
          { a: new Date(2020, 5, 9), b: 98 },
          { a: new Date(2020, 5, 16), b: 67 }
        ]
      ],
      southkoreaDataInbound: [
        [
          { a: new Date(2020, 0, 7), b: 8 },
          { a: new Date(2020, 0, 14), b: 9 },
          { a: new Date(2020, 0, 21), b: 13 },
          { a: new Date(2020, 0, 28), b: -4 },
          { a: new Date(2020, 1, 4), b: -16 },
          { a: new Date(2020, 1, 11), b: -24 },
          { a: new Date(2020, 1, 18), b: -44 },
          { a: new Date(2020, 1, 25), b: -66 },
          { a: new Date(2020, 2, 3), b: -85 },
          { a: new Date(2020, 2, 10), b: -88 },
          { a: new Date(2020, 2, 17), b: -78 },
          { a: new Date(2020, 2, 24), b: -71 },
          { a: new Date(2020, 2, 31), b: -80 },
          { a: new Date(2020, 3, 7), b: -86 },
          { a: new Date(2020, 3, 14), b: -89 },
          { a: new Date(2020, 3, 21), b: -86 },
          { a: new Date(2020, 3, 28), b: -88 },
          { a: new Date(2020, 4, 5), b: -90 },
          { a: new Date(2020, 4, 12), b: -90 },
          { a: new Date(2020, 4, 19), b: -90 },
          { a: new Date(2020, 4, 26), b: -90 },
          { a: new Date(2020, 5, 2), b: -92 },
          { a: new Date(2020, 5, 9), b: -90 },
          { a: new Date(2020, 5, 16), b: -91 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 7 },
          { a: new Date(2020, 0, 14), b: 7 },
          { a: new Date(2020, 0, 21), b: -3 },
          { a: new Date(2020, 0, 28), b: 1 },
          { a: new Date(2020, 1, 4), b: 41 },
          { a: new Date(2020, 1, 11), b: 43 },
          { a: new Date(2020, 1, 18), b: 16 },
          { a: new Date(2020, 1, 25), b: 19 },
          { a: new Date(2020, 2, 3), b: 36 },
          { a: new Date(2020, 2, 10), b: 38 },
          { a: new Date(2020, 2, 17), b: 29 },
          { a: new Date(2020, 2, 24), b: 27 },
          { a: new Date(2020, 2, 31), b: -11 },
          { a: new Date(2020, 3, 7), b: -36 },
          { a: new Date(2020, 3, 14), b: -52 },
          { a: new Date(2020, 3, 21), b: -55 },
          { a: new Date(2020, 3, 28), b: -59 },
          { a: new Date(2020, 4, 5), b: -65 },
          { a: new Date(2020, 4, 12), b: -65 },
          { a: new Date(2020, 4, 19), b: -67 },
          { a: new Date(2020, 4, 26), b: -64 },
          { a: new Date(2020, 5, 2), b: -72 },
          { a: new Date(2020, 5, 9), b: -65 },
          { a: new Date(2020, 5, 16), b: -71 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 31 },
          { a: new Date(2020, 0, 14), b: 30 },
          { a: new Date(2020, 0, 21), b: 47 },
          { a: new Date(2020, 0, 28), b: 132 },
          { a: new Date(2020, 1, 4), b: 528 },
          { a: new Date(2020, 1, 11), b: 629 },
          { a: new Date(2020, 1, 18), b: 305 },
          { a: new Date(2020, 1, 25), b: 372 },
          { a: new Date(2020, 2, 3), b: 557 },
          { a: new Date(2020, 2, 10), b: 341 },
          { a: new Date(2020, 2, 17), b: 483 },
          { a: new Date(2020, 2, 24), b: 367 },
          { a: new Date(2020, 2, 31), b: 293 },
          { a: new Date(2020, 3, 7), b: 183 },
          { a: new Date(2020, 3, 14), b: 143 },
          { a: new Date(2020, 3, 21), b: 146 },
          { a: new Date(2020, 3, 28), b: 91 },
          { a: new Date(2020, 4, 5), b: 58 },
          { a: new Date(2020, 4, 12), b: 42 },
          { a: new Date(2020, 4, 19), b: 53 },
          { a: new Date(2020, 4, 26), b: 53 },
          { a: new Date(2020, 5, 2), b: 24 },
          { a: new Date(2020, 5, 9), b: 16 },
          { a: new Date(2020, 5, 16), b: 11 }
        ]
      ],
      chinaDataOutbound: [
        [
          { a: new Date(2020, 0, 7), b: -1 },
          { a: new Date(2020, 0, 14), b: -4 },
          { a: new Date(2020, 0, 21), b: 12 },
          { a: new Date(2020, 0, 28), b: -24 },
          { a: new Date(2020, 1, 4), b: -40 },
          { a: new Date(2020, 1, 11), b: -49 },
          { a: new Date(2020, 1, 18), b: -80 },
          { a: new Date(2020, 1, 25), b: -84 },
          { a: new Date(2020, 2, 3), b: -88 },
          { a: new Date(2020, 2, 10), b: -91 },
          { a: new Date(2020, 2, 17), b: -93 },
          { a: new Date(2020, 2, 24), b: -96 },
          { a: new Date(2020, 2, 31), b: -97 },
          { a: new Date(2020, 3, 7), b: -98 },
          { a: new Date(2020, 3, 14), b: -99 },
          { a: new Date(2020, 3, 21), b: -98 },
          { a: new Date(2020, 3, 28), b: -99 },
          { a: new Date(2020, 4, 5), b: -98 },
          { a: new Date(2020, 4, 12), b: -99 },
          { a: new Date(2020, 4, 19), b: -98 },
          { a: new Date(2020, 4, 26), b: -98 },
          { a: new Date(2020, 5, 2), b: -98 },
          { a: new Date(2020, 5, 9), b: -98 },
          { a: new Date(2020, 5, 16), b: -98 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 7 },
          { a: new Date(2020, 0, 14), b: -6 },
          { a: new Date(2020, 0, 21), b: -6 },
          { a: new Date(2020, 0, 28), b: 131 },
          { a: new Date(2020, 1, 4), b: 256 },
          { a: new Date(2020, 1, 11), b: 115 },
          { a: new Date(2020, 1, 18), b: 0 },
          { a: new Date(2020, 1, 25), b: -35 },
          { a: new Date(2020, 2, 3), b: -41 },
          { a: new Date(2020, 2, 10), b: -59 },
          { a: new Date(2020, 2, 17), b: -67 },
          { a: new Date(2020, 2, 24), b: -72 },
          { a: new Date(2020, 2, 31), b: -77 },
          { a: new Date(2020, 3, 7), b: -86 },
          { a: new Date(2020, 3, 14), b: -90 },
          { a: new Date(2020, 3, 21), b: -86 },
          { a: new Date(2020, 3, 28), b: -90 },
          { a: new Date(2020, 4, 5), b: -90 },
          { a: new Date(2020, 4, 12), b: -91 },
          { a: new Date(2020, 4, 19), b: -91 },
          { a: new Date(2020, 4, 26), b: -86 },
          { a: new Date(2020, 5, 2), b: -87 },
          { a: new Date(2020, 5, 9), b: -87 },
          { a: new Date(2020, 5, 16), b: -88 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 26 },
          { a: new Date(2020, 0, 14), b: 37 },
          { a: new Date(2020, 0, 21), b: 68 },
          { a: new Date(2020, 0, 28), b: 297 },
          { a: new Date(2020, 1, 4), b: 1248 },
          { a: new Date(2020, 1, 11), b: 2011 },
          { a: new Date(2020, 1, 18), b: 617 },
          { a: new Date(2020, 1, 25), b: 464 },
          { a: new Date(2020, 2, 3), b: 349 },
          { a: new Date(2020, 2, 10), b: 250 },
          { a: new Date(2020, 2, 17), b: 177 },
          { a: new Date(2020, 2, 24), b: 155 },
          { a: new Date(2020, 2, 31), b: 108 },
          { a: new Date(2020, 3, 7), b: 26 },
          { a: new Date(2020, 3, 14), b: -1 },
          { a: new Date(2020, 3, 21), b: -9 },
          { a: new Date(2020, 3, 28), b: -38 },
          { a: new Date(2020, 4, 5), b: -57 },
          { a: new Date(2020, 4, 12), b: -51 },
          { a: new Date(2020, 4, 19), b: -53 },
          { a: new Date(2020, 4, 26), b: -48 },
          { a: new Date(2020, 5, 2), b: -60 },
          { a: new Date(2020, 5, 9), b: -53 },
          { a: new Date(2020, 5, 16), b: -58 }
        ]
      ],
      italyDataOutbound: [
        [
          { a: new Date(2020, 0, 7), b: -5 },
          { a: new Date(2020, 0, 14), b: 2 },
          { a: new Date(2020, 0, 21), b: 4 },
          { a: new Date(2020, 0, 28), b: 1 },
          { a: new Date(2020, 1, 4), b: -3 },
          { a: new Date(2020, 1, 11), b: -7 },
          { a: new Date(2020, 1, 18), b: -4 },
          { a: new Date(2020, 1, 25), b: -21 },
          { a: new Date(2020, 2, 3), b: -58 },
          { a: new Date(2020, 2, 10), b: -69 },
          { a: new Date(2020, 2, 17), b: -85 },
          { a: new Date(2020, 2, 24), b: -95 },
          { a: new Date(2020, 2, 31), b: -97 },
          { a: new Date(2020, 3, 7), b: -98 },
          { a: new Date(2020, 3, 14), b: -98 },
          { a: new Date(2020, 3, 21), b: -97 },
          { a: new Date(2020, 3, 28), b: -97 },
          { a: new Date(2020, 4, 5), b: -97 },
          { a: new Date(2020, 4, 12), b: -97 },
          { a: new Date(2020, 4, 19), b: -95 },
          { a: new Date(2020, 4, 26), b: -93 },
          { a: new Date(2020, 5, 2), b: -91 },
          { a: new Date(2020, 5, 9), b: -86 },
          { a: new Date(2020, 5, 16), b: -85 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 27 },
          { a: new Date(2020, 0, 14), b: -6 },
          { a: new Date(2020, 0, 21), b: 4 },
          { a: new Date(2020, 0, 28), b: -12 },
          { a: new Date(2020, 1, 4), b: -8 },
          { a: new Date(2020, 1, 11), b: 30 },
          { a: new Date(2020, 1, 18), b: -1 },
          { a: new Date(2020, 1, 25), b: 30 },
          { a: new Date(2020, 2, 3), b: -91 },
          { a: new Date(2020, 2, 10), b: 111 },
          { a: new Date(2020, 2, 17), b: 6 },
          { a: new Date(2020, 2, 24), b: -67 },
          { a: new Date(2020, 2, 31), b: -74 },
          { a: new Date(2020, 3, 7), b: -79 },
          { a: new Date(2020, 3, 14), b: -73 },
          { a: new Date(2020, 3, 21), b: -66 },
          { a: new Date(2020, 3, 28), b: -83 },
          { a: new Date(2020, 4, 5), b: -86 },
          { a: new Date(2020, 4, 12), b: -86 },
          { a: new Date(2020, 4, 19), b: -85 },
          { a: new Date(2020, 4, 26), b: -80 },
          { a: new Date(2020, 5, 2), b: -82 },
          { a: new Date(2020, 5, 9), b: -76 },
          { a: new Date(2020, 5, 16), b: -67 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 108 },
          { a: new Date(2020, 0, 14), b: 154 },
          { a: new Date(2020, 0, 21), b: 172 },
          { a: new Date(2020, 0, 28), b: 211 },
          { a: new Date(2020, 1, 4), b: 282 },
          { a: new Date(2020, 1, 11), b: 319 },
          { a: new Date(2020, 1, 18), b: 297 },
          { a: new Date(2020, 1, 25), b: 370 },
          { a: new Date(2020, 2, 3), b: 526 },
          { a: new Date(2020, 2, 10), b: 566 },
          { a: new Date(2020, 2, 17), b: 480 },
          { a: new Date(2020, 2, 24), b: 221 },
          { a: new Date(2020, 2, 31), b: 64 },
          { a: new Date(2020, 3, 7), b: 50 },
          { a: new Date(2020, 3, 14), b: 17 },
          { a: new Date(2020, 3, 21), b: 71 },
          { a: new Date(2020, 3, 28), b: 72 },
          { a: new Date(2020, 4, 5), b: 61 },
          { a: new Date(2020, 4, 12), b: 41 },
          { a: new Date(2020, 4, 19), b: 35 },
          { a: new Date(2020, 4, 26), b: 30 },
          { a: new Date(2020, 5, 2), b: 57 },
          { a: new Date(2020, 5, 9), b: 60 },
          { a: new Date(2020, 5, 16), b: 89 }
        ]
      ],
      japanDataOutbound: [
        [
          { a: new Date(2020, 0, 7), b: 3 },
          { a: new Date(2020, 0, 14), b: 10 },
          { a: new Date(2020, 0, 21), b: 5 },
          { a: new Date(2020, 0, 28), b: -8 },
          { a: new Date(2020, 1, 4), b: -20 },
          { a: new Date(2020, 1, 11), b: -7 },
          { a: new Date(2020, 1, 18), b: -28 },
          { a: new Date(2020, 1, 25), b: -45 },
          { a: new Date(2020, 2, 3), b: -60 },
          { a: new Date(2020, 2, 10), b: -69 },
          { a: new Date(2020, 2, 17), b: -77 },
          { a: new Date(2020, 2, 24), b: -83 },
          { a: new Date(2020, 2, 31), b: -89 },
          { a: new Date(2020, 3, 7), b: -96 },
          { a: new Date(2020, 3, 14), b: -95 },
          { a: new Date(2020, 3, 21), b: -96 },
          { a: new Date(2020, 3, 28), b: -97 },
          { a: new Date(2020, 4, 5), b: -92 },
          { a: new Date(2020, 4, 12), b: -96 },
          { a: new Date(2020, 4, 19), b: -95 },
          { a: new Date(2020, 4, 26), b: -96 },
          { a: new Date(2020, 5, 2), b: -96 },
          { a: new Date(2020, 5, 9), b: -94 },
          { a: new Date(2020, 5, 16), b: -94 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 8 },
          { a: new Date(2020, 0, 14), b: -1 },
          { a: new Date(2020, 0, 21), b: 3 },
          { a: new Date(2020, 0, 28), b: 48 },
          { a: new Date(2020, 1, 4), b: 102 },
          { a: new Date(2020, 1, 11), b: 86 },
          { a: new Date(2020, 1, 18), b: 51 },
          { a: new Date(2020, 1, 25), b: 49 },
          { a: new Date(2020, 2, 3), b: 66 },
          { a: new Date(2020, 2, 10), b: 62 },
          { a: new Date(2020, 2, 17), b: 72 },
          { a: new Date(2020, 2, 24), b: 76 },
          { a: new Date(2020, 2, 31), b: 5 },
          { a: new Date(2020, 3, 7), b: -43 },
          { a: new Date(2020, 3, 14), b: -52 },
          { a: new Date(2020, 3, 21), b: -36 },
          { a: new Date(2020, 3, 28), b: -48 },
          { a: new Date(2020, 4, 5), b: -51 },
          { a: new Date(2020, 4, 12), b: -62 },
          { a: new Date(2020, 4, 19), b: -42 },
          { a: new Date(2020, 4, 26), b: -53 },
          { a: new Date(2020, 5, 2), b: -54 },
          { a: new Date(2020, 5, 9), b: -55 },
          { a: new Date(2020, 5, 16), b: -43 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 73 },
          { a: new Date(2020, 0, 14), b: 89 },
          { a: new Date(2020, 0, 21), b: 84 },
          { a: new Date(2020, 0, 28), b: 181 },
          { a: new Date(2020, 1, 4), b: 355 },
          { a: new Date(2020, 1, 11), b: 458 },
          { a: new Date(2020, 1, 18), b: 390 },
          { a: new Date(2020, 1, 25), b: 362 },
          { a: new Date(2020, 2, 3), b: 503 },
          { a: new Date(2020, 2, 10), b: 562 },
          { a: new Date(2020, 2, 17), b: 551 },
          { a: new Date(2020, 2, 24), b: 595 },
          { a: new Date(2020, 2, 31), b: 421 },
          { a: new Date(2020, 3, 7), b: 173 },
          { a: new Date(2020, 3, 14), b: 112 },
          { a: new Date(2020, 3, 21), b: 88 },
          { a: new Date(2020, 3, 28), b: 36 },
          { a: new Date(2020, 4, 5), b: 50 },
          { a: new Date(2020, 4, 12), b: 7 },
          { a: new Date(2020, 4, 19), b: 33 },
          { a: new Date(2020, 4, 26), b: -1 },
          { a: new Date(2020, 5, 2), b: -12 },
          { a: new Date(2020, 5, 9), b: 25 },
          { a: new Date(2020, 5, 16), b: 40 }
        ]
      ],
      southkoreaDataOutbound: [
        [
          { a: new Date(2020, 0, 7), b: -8 },
          { a: new Date(2020, 0, 14), b: -8 },
          { a: new Date(2020, 0, 21), b: -4 },
          { a: new Date(2020, 0, 28), b: -31 },
          { a: new Date(2020, 1, 4), b: -39 },
          { a: new Date(2020, 1, 11), b: -45 },
          { a: new Date(2020, 1, 18), b: -57 },
          { a: new Date(2020, 1, 25), b: -61 },
          { a: new Date(2020, 2, 3), b: -73 },
          { a: new Date(2020, 2, 10), b: -81 },
          { a: new Date(2020, 2, 17), b: -88 },
          { a: new Date(2020, 2, 24), b: -92 },
          { a: new Date(2020, 2, 31), b: -94 },
          { a: new Date(2020, 3, 7), b: -94 },
          { a: new Date(2020, 3, 14), b: -95 },
          { a: new Date(2020, 3, 21), b: -94 },
          { a: new Date(2020, 3, 28), b: -95 },
          { a: new Date(2020, 4, 5), b: -96 },
          { a: new Date(2020, 4, 12), b: -96 },
          { a: new Date(2020, 4, 19), b: -96 },
          { a: new Date(2020, 4, 26), b: -96 },
          { a: new Date(2020, 5, 2), b: -96 },
          { a: new Date(2020, 5, 9), b: -95 },
          { a: new Date(2020, 5, 16), b: -96 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 5 },
          { a: new Date(2020, 0, 14), b: 3 },
          { a: new Date(2020, 0, 21), b: 3 },
          { a: new Date(2020, 0, 28), b: 8 },
          { a: new Date(2020, 1, 4), b: 65 },
          { a: new Date(2020, 1, 11), b: 70 },
          { a: new Date(2020, 1, 18), b: 22 },
          { a: new Date(2020, 1, 25), b: 53 },
          { a: new Date(2020, 2, 3), b: 51 },
          { a: new Date(2020, 2, 10), b: 16 },
          { a: new Date(2020, 2, 17), b: -36 },
          { a: new Date(2020, 2, 24), b: -52 },
          { a: new Date(2020, 2, 31), b: -67 },
          { a: new Date(2020, 3, 7), b: -74 },
          { a: new Date(2020, 3, 14), b: -77 },
          { a: new Date(2020, 3, 21), b: -76 },
          { a: new Date(2020, 3, 28), b: -77 },
          { a: new Date(2020, 4, 5), b: -79 },
          { a: new Date(2020, 4, 12), b: -78 },
          { a: new Date(2020, 4, 19), b: -79 },
          { a: new Date(2020, 4, 26), b: -79 },
          { a: new Date(2020, 5, 2), b: -80 },
          { a: new Date(2020, 5, 9), b: -71 },
          { a: new Date(2020, 5, 16), b: -76 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 10 },
          { a: new Date(2020, 0, 14), b: 31 },
          { a: new Date(2020, 0, 21), b: 48 },
          { a: new Date(2020, 0, 28), b: 125 },
          { a: new Date(2020, 1, 4), b: 474 },
          { a: new Date(2020, 1, 11), b: 331 },
          { a: new Date(2020, 1, 18), b: 205 },
          { a: new Date(2020, 1, 25), b: 205 },
          { a: new Date(2020, 2, 3), b: 344 },
          { a: new Date(2020, 2, 10), b: 287 },
          { a: new Date(2020, 2, 17), b: 231 },
          { a: new Date(2020, 2, 24), b: 241 },
          { a: new Date(2020, 2, 31), b: 181 },
          { a: new Date(2020, 3, 7), b: 71 },
          { a: new Date(2020, 3, 14), b: 46 },
          { a: new Date(2020, 3, 21), b: 7 },
          { a: new Date(2020, 3, 28), b: 32 },
          { a: new Date(2020, 4, 5), b: -32 },
          { a: new Date(2020, 4, 12), b: 11 },
          { a: new Date(2020, 4, 19), b: -4 },
          { a: new Date(2020, 4, 26), b: -16 },
          { a: new Date(2020, 5, 2), b: -44 },
          { a: new Date(2020, 5, 9), b: -35 },
          { a: new Date(2020, 5, 16), b: -17 }
        ]
      ]
    };

    this.toggleActiveGraph = this.toggleActiveGraph.bind(this);
    this.setDirection = this.setDirection.bind(this);
    this.setType = this.setType.bind(this);
  }

  toggleActiveGraph(val) {
    this.setState({ activeGraph: val });
  }

  setDirection(val) {
    this.setState({ direction: val });
  }

  setType(val) {
    this.setState({ type: val });
  }

  componentDidMount() {
    var tempGraph = (
      <GraphGlobal
        direction={this.state.direction}
        dataTitle={this.state.dataTitle}
        data1={this.state[this.state.activeGraph + "Data" + this.state.type][0]}
        data2={this.state[this.state.activeGraph + "Data" + this.state.type][1]}
        data3={this.state[this.state.activeGraph + "Data" + this.state.type][2]}
        tableHeaders={this.state.tableHeaders1}
        direction={this.state.direction}
      />
    );

    this.setState({
      currentGraph: tempGraph
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.state.activeGraph != prevState.activeGraph ||
      this.state.type != prevState.type ||
      this.state.direction != prevState.direction
    ) {
      var tempGraph = (
        <GraphGlobal
          direction={this.state.direction}
          dataTitle={this.state.dataTitle}
          data1={
            this.state[this.state.activeGraph + "Data" + this.state.type][0]
          }
          data2={
            this.state[this.state.activeGraph + "Data" + this.state.type][1]
          }
          data3={
            this.state[this.state.activeGraph + "Data" + this.state.type][2]
          }
          tableHeaders={this.state.tableHeaders1}
          direction={this.state.direction}
        />
      );

      this.setState({
        currentGraph: tempGraph
      });
    }
  }

  render() {
    var graphTitle = "";
    var graphVal = this.state.activeGraph;
    if (graphVal == "southkorea") {
      graphVal = "South Korea";
    }

    graphTitle = (
      <div>
        <span className="countryName">{graphVal}</span> Air Travel
      </div>
    );

    return (
      <div className="covidPage">
        <div className="covidJumbo">
          <h1>
            The Impact of the Coronavirus (COVID-19) Outbreak on Global Air
            Travel Transactions - Data
          </h1>
          <p>
            This data shows{" "}
            <strong>
              the year-over-year change in air travel transactions between 2020
              and 2019 for each given seven-day period
            </strong>
            . Data is derived from Direct Data Solutions, a global air
            transaction dataset managed by ARC and IATA.
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

          <div className="buttonGroup ">
            <h2>Select Location</h2>

            <div className="buttonGroupButtons center">
              <div
                onClick={this.toggleActiveGraph.bind(this, "china")}
                className={
                  "buttonGroupButton " +
                  (this.state.activeGraph == "china" ? "active" : "")
                }
              >
                China
              </div>
              <div
                onClick={this.toggleActiveGraph.bind(this, "italy")}
                className={
                  "buttonGroupButton " +
                  (this.state.activeGraph == "italy" ? "active" : "")
                }
              >
                Italy
              </div>
              <div
                onClick={this.toggleActiveGraph.bind(this, "japan")}
                className={
                  "buttonGroupButton " +
                  (this.state.activeGraph == "japan" ? "active" : "")
                }
              >
                Japan
              </div>
              <div
                onClick={this.toggleActiveGraph.bind(this, "southkorea")}
                className={
                  "buttonGroupButton " +
                  (this.state.activeGraph == "southkorea" ? "active" : "")
                }
              >
                South Korea
              </div>
            </div>
          </div>
        </div>

        <div className="covidGraphContainer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="graphTitle">{graphTitle}</div>
                <div className="graphSubTitle">
                  {this.state.tableHeaders1[this.state.direction + 1]} -{" "}
                  {this.state.subTitle}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="buttongroupSelectors d-flex">
                  <div className="buttonGroup d-flex">
                    <div className="buttonGroupButtons">
                      <div
                        onClick={this.setDirection.bind(this, 0)}
                        className={
                          "buttonGroupButton " +
                          (this.state.direction == 0 ? "active" : "")
                        }
                      >
                        Sales
                      </div>
                      <div
                        onClick={this.setDirection.bind(this, 1)}
                        className={
                          "buttonGroupButton " +
                          (this.state.direction == 1 ? "active" : "")
                        }
                      >
                        Exchanges
                      </div>
                      <div
                        onClick={this.setDirection.bind(this, 2)}
                        className={
                          "buttonGroupButton " +
                          (this.state.direction == 2 ? "active" : "")
                        }
                      >
                        Refunds
                      </div>
                    </div>
                  </div>

                  <div
                    className="buttonGroup d-flex"
                    style={{ marginLeft: "15px" }}
                  >
                    <div className="buttonGroupButtons">
                      <div
                        onClick={this.setType.bind(this, "Global")}
                        className={
                          "buttonGroupButton " +
                          (this.state.type == "Global" ? "active" : "")
                        }
                      >
                        Total
                      </div>
                      <div
                        onClick={this.setType.bind(this, "Domestic")}
                        className={
                          "buttonGroupButton " +
                          (this.state.type == "Domestic" ? "active" : "")
                        }
                      >
                        Domestic
                      </div>
                      <div
                        onClick={this.setType.bind(this, "Inbound")}
                        className={
                          "buttonGroupButton " +
                          (this.state.type == "Inbound" ? "active" : "")
                        }
                      >
                        Inbound
                      </div>
                      <div
                        onClick={this.setType.bind(this, "Outbound")}
                        className={
                          "buttonGroupButton " +
                          (this.state.type == "Outbound" ? "active" : "")
                        }
                      >
                        Outbound
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {this.state.currentGraph}

        <div className="bottomData container">
          <div className="row">
            <div className="col-md-6">
              <h2>US Travel Agency Data</h2>
              <p>
                ARC is also tracking the effect COVID-19 has had on airline
                ticketing by comparing this year’s numbers to 2019. ARC is
                currently collecting data on YOY changes in tickets issued and
                variance in tickets sold by segment by US travel agencies and
                processed through the ARC settlement system, plus the average
                air ticket price for US domestic round trips.
              </p>
              <a
                href="https://www2.arccorp.com/articles-trends/the-latest/coronavirus/"
                className="ctaBtn"
              >
                View Data
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
