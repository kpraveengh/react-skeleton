import React, {Component} from 'react';

import { Bar, Line, Pie,Radar } from 'react-chartjs-2';
// var Charts = require('chart.js');
// var BarChart = require("react-chartjs-2").Bar;
// var LineChart = require("react-chartjs-2").Line;
// var PieChart = require("react-chartjs-2").Pie;

 
export class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
      type:props.type
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
       {this.state.type =='bar' &&
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: 'Largest Cities In ' + this.props.location,
              fontSize: 25
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }}
          width="600" height="250"
        />
       }
 {this.state.type =='line' &&
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: 'Largest Cities In ' + this.props.location,
              fontSize: 25
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }}
          width="600" height="250"
        />
 }

{this.state.type =='pie' &&

        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: 'Largest Cities In ' + this.props.location,
              fontSize: 25
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }}
          width="600" height="250"
        />
}
  {this.state.type =='radar' &&
        <Radar
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: 'Largest Cities In ' + this.props.location,
              fontSize: 25
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }}
          width="600" height="250"
        />
       }
      </div>
    );
  }
}
export default Chart;