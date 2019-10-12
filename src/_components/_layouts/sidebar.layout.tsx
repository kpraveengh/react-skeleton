import React, { Component} from "react";
import './styles/layout.style.scss';

class AppSidebar extends Component<any, any>{

 constructor(props) {
    super(props);
    this.state = {clicked: false};
  }


 toggleClass = () => {
      const currentState = this.state.clicked;
      console.log(currentState)
        this.setState({ clicked: !currentState });
  };

    render() {    

           return (
            <div className={this.state.clicked ? 'page-wrapper chiller-theme' : 'page-wrapper chiller-theme toggled'}>
            <a id="show-sidebar" className="btn btn-sm btn-dark" href="#" onClick={this.toggleClass}>
              <i className="fa fa-bars"></i>
            </a>
            <nav id="sidebar" className={this.state.clicked ? 'sidebar-wrapper sidebar-collapse' : 'sidebar-wrapper'} >
              <div className="sidebar-content">
                <div className="sidebar-brand">
                  <a href="#">pro sidebar</a>
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
          </div>
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





