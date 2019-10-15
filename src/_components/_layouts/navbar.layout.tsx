import React, { Component, Fragment} from "react";
import './styles/layout.style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


class NavBar extends Component<any, any>{

      constructor(props) {
         super(props);
         this.state = {
           show: false,
           fullwidth:false,
           clicked: false,
           showSubmenu:false,
           chartData: {}};
       }

       render() {

            return (
                  <Fragment>
                        <nav className="navbar navbar-default">
                        <div className="container-fluid">
                        <div className="navbar-header">
                              <a className="navbar-brand" href="#"></a>
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
                  </Fragment>
            )
       }

      }

      export default NavBar