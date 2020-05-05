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
      currentGraph: "",
      direction: 0,
      type: "Global",
      currentData: "",
      subTitle: "Transaction Count",
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
        [
          { a: new Date(2020, 0, 7), b: -4 },
          { a: new Date(2020, 0, 14), b: -2 },
          { a: new Date(2020, 0, 21), b: -17 },
          { a: new Date(2020, 0, 28), b: -28 },
          { a: new Date(2020, 1, 4), b: -77 },
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
          { a: new Date(2020, 3, 21), b: -68 }
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
          { a: new Date(2020, 2, 17), b: 45 },
          { a: new Date(2020, 2, 24), b: 50 },
          { a: new Date(2020, 2, 31), b: 50 },
          { a: new Date(2020, 3, 7), b: 5 },
          { a: new Date(2020, 3, 14), b: -14 },
          { a: new Date(2020, 3, 21), b: -7 }
        ]
      ],
      italyDataGlobal: [
        [
          { a: new Date(2020, 0, 7), b: -0 },
          { a: new Date(2020, 0, 14), b: -6 },
          { a: new Date(2020, 0, 21), b: 11 },
          { a: new Date(2020, 0, 28), b: 5 },
          { a: new Date(2020, 1, 4), b: -2 },
          { a: new Date(2020, 1, 11), b: -2 },
          { a: new Date(2020, 1, 18), b: -2 },
          { a: new Date(2020, 1, 25), b: -24 },
          { a: new Date(2020, 2, 3), b: -64 },
          { a: new Date(2020, 2, 10), b: -76 },
          { a: new Date(2020, 2, 17), b: -85 },
          { a: new Date(2020, 2, 24), b: -91 },
          { a: new Date(2020, 2, 31), b: -95 },
          { a: new Date(2020, 3, 7), b: -91 },
          { a: new Date(2020, 3, 14), b: -98 },
          { a: new Date(2020, 3, 21), b: -98 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 13 },
          { a: new Date(2020, 0, 14), b: -8 },
          { a: new Date(2020, 0, 21), b: 2 },
          { a: new Date(2020, 0, 28), b: -4 },
          { a: new Date(2020, 1, 4), b: -10 },
          { a: new Date(2020, 1, 11), b: 23 },
          { a: new Date(2020, 1, 18), b: -1 },
          { a: new Date(2020, 1, 25), b: 19 },
          { a: new Date(2020, 2, 3), b: -71 },
          { a: new Date(2020, 2, 10), b: -77 },
          { a: new Date(2020, 2, 17), b: -13 },
          { a: new Date(2020, 2, 24), b: -53 },
          { a: new Date(2020, 2, 31), b: -62 },
          { a: new Date(2020, 3, 7), b: -75 },
          { a: new Date(2020, 3, 14), b: -74 },
          { a: new Date(2020, 3, 21), b: -74 }
        ],
        [
          { a: new Date(2020, 0, 7), b: 82 },
          { a: new Date(2020, 0, 14), b: 97 },
          { a: new Date(2020, 0, 21), b: 114 },
          { a: new Date(2020, 0, 28), b: 133 },
          { a: new Date(2020, 1, 4), b: 182 },
          { a: new Date(2020, 1, 11), b: 222 },
          { a: new Date(2020, 1, 18), b: 233 },
          { a: new Date(2020, 1, 25), b: 320 },
          { a: new Date(2020, 2, 3), b: 518 },
          { a: new Date(2020, 2, 10), b: 570 },
          { a: new Date(2020, 2, 17), b: 528 },
          { a: new Date(2020, 2, 24), b: 270 },
          { a: new Date(2020, 2, 31), b: 136 },
          { a: new Date(2020, 3, 7), b: 86 },
          { a: new Date(2020, 3, 14), b: 95 },
          { a: new Date(2020, 3, 21), b: 103 }
        ]
      ],
      japanDataGlobal: [
        [
          { a: new Date(2020, 0, 7), b: -4 },
          { a: new Date(2020, 0, 14), b: -6 },
          { a: new Date(2020, 0, 21), b: -8 },
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
          { a: new Date(2020, 3, 21), b: -96 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ]
      ],
      southkoreaDataGlobal: [
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ]
      ],
      chinaDataDomestic: [
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
        [
          { a: new Date(2020, 0, 7), b: -4 },
          { a: new Date(2020, 0, 14), b: -2 },
          { a: new Date(2020, 0, 21), b: -17 },
          { a: new Date(2020, 0, 28), b: -28 },
          { a: new Date(2020, 1, 4), b: -77 },
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
          { a: new Date(2020, 3, 21), b: -68 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ]
      ],
      italyDataDomestic: [
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ]
      ],
      japanDataDomestic: [
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ]
      ],
      southkoreaDataDomestic: [
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ]
      ],
      chinaDataInbound: [
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
        [
          { a: new Date(2020, 0, 7), b: -4 },
          { a: new Date(2020, 0, 14), b: -2 },
          { a: new Date(2020, 0, 21), b: -17 },
          { a: new Date(2020, 0, 28), b: -28 },
          { a: new Date(2020, 1, 4), b: -77 },
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
          { a: new Date(2020, 3, 21), b: -68 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ]
      ],
      italyDataInbound: [
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ]
      ],
      japanDataInbound: [
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ]
      ],
      southkoreaDataInbound: [
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ]
      ],
      chinaDataOutbound: [
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
        [
          { a: new Date(2020, 0, 7), b: -4 },
          { a: new Date(2020, 0, 14), b: -2 },
          { a: new Date(2020, 0, 21), b: -17 },
          { a: new Date(2020, 0, 28), b: -28 },
          { a: new Date(2020, 1, 4), b: -77 },
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
          { a: new Date(2020, 3, 21), b: -68 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ]
      ],
      italyDataOutbound: [
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ]
      ],
      japanDataOutbound: [
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ]
      ],
      southkoreaDataOutbound: [
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ],
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
          { a: new Date(2020, 2, 31), b: -64 },
          { a: new Date(2020, 3, 7), b: -67 },
          { a: new Date(2020, 3, 14), b: -66 },
          { a: new Date(2020, 3, 21), b: -65 }
        ]
      ]
    };

    this.toggleActiveGraph = this.toggleActiveGraph.bind(this);
    this.setDirection = this.setDirection.bind(this);
    this.setType = this.setType.bind(this);
    this.generateGraph = this.generateGraph.bind(this);
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

  generateGraph(dataTitle1, dataDomain1, tableHeaders1) {
    return (
      <div>
        <GraphGlobal
          direction={this.state.direction}
          dataTitle={dataTitle1}
          data1={
            this.state[this.state.activeGraph + "Data" + this.state.type][0]
          }
          data2={
            this.state[this.state.activeGraph + "Data" + this.state.type][1]
          }
          data3={
            this.state[this.state.activeGraph + "Data" + this.state.type][2]
          }
          dataDomain={dataDomain1}
          tableHeaders={tableHeaders1}
        />
      </div>
    );
  }

  render() {
    var dataTitle1 = ["Transaction Count", "Sales Variance"];

    var tableHeaders1 = [
      "7-Day Period Ending",
      "Sales",
      "Exchanges",
      "Refunds"
    ];

    var dataDomain1 = [
      10,
      0,
      -10,
      -20,
      -30,
      -40,
      -50,
      -60,
      -70,
      -80,
      -90,
      -100
    ];

    var dataDomain2 = [-25, 0, 350, 700];

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
                  {tableHeaders1[this.state.direction + 1]} -{" "}
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

        <GraphGlobal
          direction={this.state.direction}
          dataTitle={dataTitle1}
          data1={
            this.state[this.state.activeGraph + "Data" + this.state.type][0]
          }
          data2={
            this.state[this.state.activeGraph + "Data" + this.state.type][1]
          }
          data3={
            this.state[this.state.activeGraph + "Data" + this.state.type][2]
          }
          dataDomain={(this.state.direction == 2) ? dataDomain2 : dataDomain1}
          tableHeaders={tableHeaders1}
          direction={this.state.direction}
        />

        <div className="bottomData container">
          <div className="row">
            <div className="col-md-6">
              <h2>Country-Specific Data</h2>
              <p>
                ARC is also tracking the impact of COVID-19 on airline ticketing
                in regions that have been most impacted, including China, Italy,
                Japan, and South Korea. Data on air tickets sold for domestic,
                global inbound, and global outbound flights for each of these
                countries is publicly available. This data is updated weekly.
              </p>
              <a
                href="https://www2.arccorp.com/articles-trends/the-latest/coronavirus-data/"
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
