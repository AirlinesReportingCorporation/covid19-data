import React, { Component } from "react";
import * as moment from "moment";
import numeral from "numeral";

class GraphTooltip extends Component {
  render() {
    const { x, y, dx, dy, index, datum, data } = this.props;

    const layout = this.props.layout;

    const a = moment(data.a).format("MMMM D");
    const x2 = parseFloat(x) - 100;
    const y2 = parseFloat(y) / 2.0;

    return (
      <g style={{ pointerEvents: "none" }}>
        <foreignObject x={x2} y={y2} width="200" height="230">
          <div className="graph-tooltip">
            {layout == "1" && (
              <div>
                <div className="graph-tooltip-data-label">{data[3][0]}</div>
                <div className="graph-tooltip-data">
                  <i className="fas fa-circle graphToggleKey1"></i>{" "}
                  {data[0][datum.x - 1].b}%
                </div>

                {data[1][datum.x - 1] && (
                  <div>
                    <div className="graph-tooltip-data-label">{data[3][1]}</div>
                    <div className="graph-tooltip-data">
                      <i className="fas fa-circle graphToggleKey2"></i>{" "}
                      {data[1][datum.x - 1].b}%
                    </div>
                  </div>
                )}
                {data[2][datum.x - 1] && (
                  <div>
                    <div className="graph-tooltip-data-label">{data[3][2]}</div>
                    <div className="graph-tooltip-data">
                      <i className="fas fa-circle graphToggleKey3"></i>{" "}
                      {data[2][datum.x - 1].b}%
                    </div>
                  </div>
                )}
              </div>
            )}
            {layout != "1" && (
              <div>
                {data[1][datum.x - 1] && (
                  <div>
                    <div className="graph-tooltip-data-label">{data[3][1]}</div>
                    <div className="graph-tooltip-data">
                      <i className="fas fa-circle graphToggleKey2"></i>{" "}
                      {data[1][datum.x - 1].b}%
                    </div>
                  </div>
                )}

                {data[2][datum.x - 1] && (
                  <div>
                    <div className="graph-tooltip-data-label">{data[3][2]}</div>
                    <div className="graph-tooltip-data">
                      <i className="fas fa-circle graphToggleKey3"></i>{" "}
                      {data[2][datum.x - 1].b}%
                    </div>
                  </div>
                )}

                <div className="graph-tooltip-data-label">{data[3][0]}</div>
                <div className="graph-tooltip-data">
                  <i className="fas fa-circle graphToggleKey1"></i>{" "}
                  {data[0][datum.x - 1].b}%
                </div>
              </div>
            )}
          </div>
        </foreignObject>
      </g>
    );
  }
}

export default GraphTooltip;
