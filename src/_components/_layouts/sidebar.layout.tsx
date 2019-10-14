import React, { Component, Fragment} from "react";
import './styles/layout.style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyChart from "../../_modules/graphs/Charts";
// var Bar = require("react-chartjs-2").Bar;



// var BarChart = require("react-chartjs").Bar;


class AppSidebar extends Component<any, any>{

 constructor(props) {
    super(props);
    this.state = {clicked: false,
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

            data: [801000, 432892, 267300, 224656, 220492, 200000],

          }
        ]
      }
    });
  }


 toggleClass = () => {
      const currentState = this.state.clicked;
      console.log(currentState)
        this.setState({ clicked: !currentState });
  };

    render() {    

           return (
             <Fragment>
            <div className={this.state.clicked ? 'page-wrapper chiller-theme' : 'page-wrapper chiller-theme toggled'}>
            <a id="show-sidebar" className="btn btn-sm btn-dark" href="#" onClick={this.toggleClass}>
              <i className="fa fa-bars"></i>
            </a>
            <nav id="sidebar" className={this.state.clicked ? 'sidebar-wrapper sidebar-collapse' : 'sidebar-wrapper'} >
              <div className="sidebar-content">
                <div className="sidebar-brand">
                <a className="navbar-brand navbar-header" href="#">my<span className="main-color">Dashboard</span></a>
                  <div id="close-sidebar" onClick={this.toggleClass} >
                    <i className="fa fa-times"></i>
                  </div>
                </div>
                <div className="sidebar-header">
                  <div className="user-pic">
                    <img className="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                      alt="User picture" />
                  </div>
                  <div className="user-info">
                    <span className="user-name">Jhon
                      <strong>Smith</strong>
                    </span>
                    <span className="user-role">Administrator</span>
                    <span className="user-status">
                      <i className="fa fa-circle"></i>
                      <span>Online</span>
                    </span>
                  </div>
                </div>
                <div className="sidebar-search">
                  <div>
                    <div className="input-group">
                      <input type="text" className="form-control search-menu" placeholder="Search..." />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-menu">
                  <ul>
                    <li className="header-menu">
                      <span>General</span>
                    </li>
                    <li className="sidebar-dropdown">
                      <a href="#">
                        <i className="fa fa-dashboard"></i>
                        <span>Dashboard</span>
                        <span className="badge badge-pill badge-warning">New</span>
                      </a>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">Dashboard 1
                              <span className="badge badge-pill badge-success">Pro</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">Dashboard 2</a>
                          </li>
                          <li>
                            <a href="#">Dashboard 3</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="sidebar-dropdown">
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                        <span>E-commerce</span>
                        <span className="badge badge-pill badge-danger">3</span>
                      </a>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">Products

                            </a>
                          </li>
                          <li>
                            <a href="#">Orders</a>
                          </li>
                          <li>
                            <a href="#">Credit cart</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="sidebar-dropdown">
                      <a href="#">
                        <i className="fa fa-globe"></i>
                        <span>Maps</span>
                      </a>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">Google maps</a>
                          </li>
                          <li>
                            <a href="#">Open street map</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="header-menu">
                      <span>Extra</span>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-book"></i>
                        <span>Documentation</span>
                        <span className="badge badge-pill badge-primary">Beta</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-calendar"></i>
                        <span>Calendar</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-folder"></i>
                        <span>Examples</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sidebar-footer">
                <a href="#">
                  <i className="fa fa-bell"></i>
                  <span className="badge badge-pill badge-warning notification">3</span>
                </a>
                <a href="#">
                  <i className="fa fa-envelope"></i>
                  <span className="badge badge-pill badge-success notification">7</span>
                </a>
                <a href="#">
                  <i className="fa fa-cog"></i>
                  <span className="badge-sonar"></span>
                </a>
                <a href="#">
                  <i className="fa fa-power-off"></i>
                </a>
              </div>
            </nav>
      
          <section id="contents">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">my<span className="main-color">Dashboard</span></a>
          </div>
          <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My profile <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#"><i className="fa fa-user-o fw"></i> My account</a></li>
                  <li><a href="#"><i className="fa fa-envelope-o fw"></i> My inbox</a></li>
                  <li><a href="#"><i className="fa fa-question-circle-o fw"></i> Help</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#"><i className="fa fa-sign-out"></i> Log out</a></li>
                </ul>
              </li>
              <li><a href="#"><i className="fa fa-comments"></i><span>23</span></a></li>
              <li><a href="#"><i className="fa fa-bell-o"></i><span>98</span></a></li>
              <li><a href="#"><i data-show="show-side-navigation1" className="fa fa-bars show-side-btn"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>
     
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
                  {/* <canvas id="chart3" width="100%"></canvas> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="chart-container">
                <h3>Chart4</h3>
                
                </div>
              </div>
            </div>
          </div>
      </section>
      </section>
      </div>
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





