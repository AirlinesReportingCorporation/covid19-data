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
        <foreignObject x={x2} y={y2} width="250" height="230">
          <div className="graph-tooltip">
            <div className="graph-tooltip-data-label">
              <div
                style={{
                  fontFamily: "SourceSansPro-Bold, arial, sans-serif"
                }}
              >
                {moment(data[0][datum.x - 1].a).format("MMM D, YYYY")}
              </div>
            </div>
            {layout == "1" && (
              <div>
                <div className="graph-tooltip-data-label">{data[3][0]}</div>
                <div className="graph-tooltip-data">
                  <i className="fas fa-circle graphToggleKey1"></i>{" "}
                  {numeral(data[0][datum.x - 1].b).format("0.00")}%
                </div>

                {data[1][datum.x - 1] && (
                  <div>
                    <div className="graph-tooltip-data-label">{data[3][1]}</div>
                    <div className="graph-tooltip-data">
                      <i className="fas fa-circle graphToggleKey2"></i>{" "}
                      {numeral(data[1][datum.x - 1].b).format("0.00")}%
                    </div>
                  </div>
                )}
                {data[2][datum.x - 1] && (
                  <div>
                    <div className="graph-tooltip-data-label">{data[3][2]}</div>
                    <div className="graph-tooltip-data">
                      <i className="fas fa-circle graphToggleKey3"></i>{" "}
                      {numeral(data[2][datum.x - 1].b).format("0.00")}%
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
                      {numeral(data[1][datum.x - 1].b).format("0.00")}%
                    </div>
                  </div>
                )}

                {data[2][datum.x - 1] && (
                  <div>
                    <div className="graph-tooltip-data-label">{data[3][2]}</div>
                    <div className="graph-tooltip-data">
                      <i className="fas fa-circle graphToggleKey3"></i>{" "}
                      {numeral(data[2][datum.x - 1].b).format("0.00")}%
                    </div>
                  </div>
                )}

                <div className="graph-tooltip-data-label">{data[3][0]}</div>
                <div className="graph-tooltip-data">
                  <i className="fas fa-circle graphToggleKey1"></i>{" "}
                  {numeral(data[0][datum.x - 1].b).format("0.00")}%
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
