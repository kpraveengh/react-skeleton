
import React, { Component, Fragment } from "react";
import './styles/layout.style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';




class MenuList extends Component<any, any>{

      constructor(props) {
            super(props);
            this.state = {
                  clicked: false,
                  showsubmenu: false,
                  items: [
                        {
                              id: 1,
                              name: "Dashboard",
                              label: 'New',
                              icon:'fa fa-dashboard',
                              checked:false,
                              children: [
                                    {
                                          id: 2,
                                          name: "Dashboard-1",
                                          icon:'',
                                          checked:false,
                                          children: [
                                                {
                                                      id: 3,
                                                      name: "Dashboard-2",
                                                      icon:'',
                                                      children:[]
                                                },
                                                {
                                                      id: 4,
                                                      name: "Dashboard-3",
                                                      icon:'',
                                                      children: []
                                                },
                                                {
                                                      id: 5,
                                                      name: "Dashboard-4",
                                                      icon:'',
                                                      children: []
                                                }
                                          ]
                                    },
                                    {
                                          id: 6,
                                          name: "Dashboard-5",
                                          icon:'',
                                          children: [],
                                          
                                    }
                              ]
                        },
                        {
                              id: 6,
                              name: "E-Commerce",
                              icon:'fa fa-shopping-cart',
                              checked:false,
                              children: [{
                                    id: 7,
                                    name: "E-Commerce-1",
                                    icon:'',
                                    children: []
                              },
                              {
                                    id: 8,
                                    name: "E-Commerce-2",
                                    icon:'',
                                    children: []
                              }]
                        },
                        {
                              id: 9,
                              name: "Maps",
                              label: 'Beta',
                              icon:'fa fa-globe',
                              children: []
                        },
                        {
                              id: 10,
                              name: "Documentation",
                              icon:'fa fa-book',
                              children: []
                        },
                        {
                              id: 11,
                              name: "Calendar",
                              icon:'fa fa-calendar',
                              children: []
                        }


                  ]
            }

      }


      toggleClass = () => {
            const currentState = this.state.clicked;
            this.setState({ clicked: !currentState });
            this.props.checked();
      };

      handleCheck = (data,e) => {
            e.stopPropagation();
            console.log(data, 'popopopopopo')
            if (e.target.class === 'active') {
                  e.target.className = 'sidebar-dropdown'
            } else {
                  e.target.className = 'sidebar-dropdown active';
                  const showhide = this.state.showsubmenu;

                  // {this.state.items.map(i => (
                  //       i.checked=false
                  // ))}

                  data.item.checked=!data.item.checked;
                  this.setState({ showsubmenu: !showhide })

            }
      }

      ListItem = (item) => {
            let children = null;

            if (item.item.children && item.item.children.length) {

                  children = (
                        <div className={item.item.checked ? 'sidebar-submenu showSubmenu' : 'sidebar-submenu '} >
                              <ul>
                                    {item.item.children.map(i => (
                                          <this.ListItem item={i} key={i.id} />
                                    ))}
                              </ul>
                        </div>
                  );
            }

            return (
                  <ul>
                        <li className='sidebar-dropdown' onClick={this.handleCheck.bind(this, item)} >
                              <a href="#">
                                    <i className={item.item.icon}></i>
                                    <span>{item.item.name}</span>
                                    {item.item.label &&
                                          <span className={item.item.label == 'New' ? 'badge badge-pill badge-warning' : 'badge badge-pill badge-primary '}> {item.item.label}</span>
                                    }
                              </a>
                              {children}
                        </li>
                  </ul>
            );
      }



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

                                          <div className="sidebar-menu" >
                                                <ul>
                                                      <li className="header-menu">
                                                            <span>General</span>
                                                      </li>
                                                </ul>
                                                {this.state.items.map(i => (                                                    
                                                      <this.ListItem item={i} key={i.id} />
                                                ))}
                                                {/* <ul>
                                                      <li className="header-menu">
                                                            <span>General</span>
                                                      </li>
                                                      <li className='sidebar-dropdown' onClick={(e) => this.handleCheck(e)}>
                                                            <a href="#">
                                                                  <i className="fa fa-dashboard"></i>
                                                                  <span>Dashboard</span>
                                                                  <span className="badge badge-pill badge-warning">New</span>
                                                            </a>

                                                            <div className={this.state.showsubmenu ? 'sidebar-submenu showSubmenu' : 'sidebar-submenu '} >
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
                                                      <li className="sidebar-dropdown" onClick={(e) => this.handleCheck(e)}>
                                                            <a href="#">
                                                                  <i className="fa fa-shopping-cart"></i>
                                                                  <span>E-commerce</span>
                                                                  <span className="badge badge-pill badge-danger">3</span>
                                                            </a>
                                                            <div className={this.state.showsubmenu ? 'sidebar-submenu showSubmenu' : 'sidebar-submenu '} >
                                                                  <ul>
                                                                        <li>
                                                                              <a href="#">Products</a>
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
                                                </ul> */}
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
                  </Fragment>
            )

      }
}

export default MenuList;

