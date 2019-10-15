import React, { Component, Fragment} from "react";
import './styles/layout.style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyChart from "../../_modules/graphs/Charts";
import MenuList from './menulist.layout';
import NavBar from './navbar.layout';
// var Bar = require("react-chartjs-2").Bar;



// var BarChart = require("react-chartjs").Bar;


class AppSidebar extends Component<any, any>{

 constructor(props) {
    super(props);
    this.state = {
      show: false,
      fullwidth:false,
      clicked: false,
      showSubmenu:false,
      chartData: {}};
  }


  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: [
          "Jerusalem",
          "Tel Aviv",
          "Haifa",
          "Ashdod",
          "Rishon LeZiyyon",
          "Petah Tikva"
        ],
        datasets: [
          {
            label: "Population",
            fillColor: [],
            backgroundColor: ["rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(255, 99, 132, 0.6)"],
            strokeColor: "rgba(220,220,220,0.8)", 
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",

            data: [801000, 432892, 267300, 432892, 220492, 801000],

          }
        ]
      }
    });
  }
  onemethod=()=>{
    const cwidth =this.state.fullwidth;
    this.setState({ fullwidth: !cwidth });
  }



    render() {    

           return (
             <Fragment>
          
            
            <MenuList checked={this.onemethod}/>     
          <section id="contents" style={this.state.fullwidth ? {width:'100%'} : {}}>
          <NavBar />
     
      <div className="welcome">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <h2>Welcome to Dashboard</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='statis text-center'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <div className="box bg-primary">
                  <i className="fa fa-eye"></i>
                  <h3>5,154</h3>
                  <p className="lead">Page views</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box danger">
                  <i className="fa fa-user-o"></i>
                  <h3>245</h3>
                  <p className="lead">User registered</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box warning">
                  <i className="fa fa-shopping-cart"></i>
                  <h3>5,154</h3>
                  <p className="lead">Product sales</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box success">
                  <i className="fa fa-handshake-o"></i>
                  <h3>5,154</h3>
                  <p className="lead">Transactions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      <section className="statistics">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="box">
                <i className="fa fa-envelope fa-fw bg-primary"></i>
                <div className="info">
                  <h3>1,245</h3> <span>Emails</span>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <i className="fa fa-file fa-fw danger"></i>
                <div className="info">
                  <h3>34</h3> <span>Projects</span>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <i className="fa fa-users fa-fw success"></i>
                <div className="info">
                  <h3>5,245</h3> <span>Users</span>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="charts">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="chart-container">
                <h3>Chart</h3>
                {/* <MyChart data={this.state.chartData}/> */}
               <MyChart
            chartData={this.state.chartData}
            type="bar"
            location="Israel"
            legendPosition="top"
          />
                {/* <BarChart data={chartData} options={chartOptions}/> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="chart-container">
                <h3>Chart2</h3>
                <MyChart
            chartData={this.state.chartData}
            type="pie"
            location="Israel"
            legendPosition="top"
          />
                {/* <canvas id="myChart2"></canvas> */}
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className="charts">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="chart-container">
                <h3>Chart3</h3>
                <MyChart
            chartData={this.state.chartData}
            type="line"
            location="Israel"
            legendPosition="top"
          />
                </div>
              </div>
              <div className="col-md-6">
                <div className="chart-container">
                <h3>Chart4</h3>
                <MyChart
            chartData={this.state.chartData}
            type="radar"
            location="Israel"
            legendPosition="top"
          />
                </div>
              </div>
            </div>
          </div>
      </section>
      </section>
     
          </Fragment>
        )}
}

export default AppSidebar;

// $(".sidebar-dropdown > a").click(function() {
//   $(".sidebar-submenu").slideUp(200);
//   if (
//     $(this)
//       .parent()
//       .hasClass("active")
//   ) {
//     $(".sidebar-dropdown").removeClass("active");
//     $(this)
//       .parent()
//       .removeClass("active");
//   } else {
//     $(".sidebar-dropdown").removeClass("active");
//     $(this)
//       .next(".sidebar-submenu")
//       .slideDown(200);
//     $(this)
//       .parent()
//       .addClass("active");
//   }
// });





