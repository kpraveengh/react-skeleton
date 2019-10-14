import React, {Component} from 'react';

import { Bar, Line, Pie } from 'react-chartjs-2';
// var Charts = require('chart.js');
// var BarChart = require("react-chartjs-2").Bar;
// var LineChart = require("react-chartjs-2").Line;
// var PieChart = require("react-chartjs-2").Pie;

 
export class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }


  // static defaultProps = {
  //   displayTitle: true,
  //   displayLegend: true,
  //   legendPosition: 'right',
  //   location: 'City'
  // };
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Largest Cities In ' + this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
          width="600" height="250"
        />

        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Largest Cities In ' + this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
          width="600" height="250"
        />

        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Largest Cities In ' + this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
          width="600" height="250"
        />
      </div>
    );
  }
}
export default Chart;