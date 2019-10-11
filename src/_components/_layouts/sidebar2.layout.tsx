import React, {Fragment} from 'react';
import './styles/layout2.style.scss';
class AppSidebar extends React.Component {

render(){

	return(
		<Fragment>

<body className="sidebar-is-reduced">
  <header className="l-header">
    <div className="l-header__inner clearfix">
      <div className="c-header-icon js-hamburger">
        <div className="hamburger-toggle"><span className="bar-top"></span><span className="bar-mid"></span><span className="bar-bot"></span></div>
      </div>
      <div className="c-header-icon has-dropdown"><span className="c-badge c-badge--red c-badge--header-icon animated swing">13</span><i className="fa fa-bell"></i>
        <div className="c-dropdown c-dropdown--notifications">
          <div className="c-dropdown__header"></div>
          <div className="c-dropdown__content"></div>
        </div>
      </div>
      <div className="c-search">
        <input className="c-search__input u-input" placeholder="Search..." type="text"/>
      </div>
      <div className="header-icons-group">
        <div className="c-header-icon basket"><span className="c-badge c-badge--blue c-badge--header-icon animated swing">4</span><i className="fa fa-shopping-basket"></i></div>
        <div className="c-header-icon logout"><i className="fa fa-power-off"></i></div>
      </div>
    </div>
  </header>
  <div className="l-sidebar">
    <div className="logo">
      <div className="logo__txt">D</div>
    </div>
    <div className="l-sidebar__content">
      <nav className="c-menu js-menu">
        <ul className="u-list">
          <li className="c-menu__item is-active" data-toggle="tooltip" title="Flights">
            <div className="c-menu__item__inner"><i className="fa fa-plane"></i>
              <div className="c-menu-item__title"><span>Flights</span></div>
            </div>
          </li>
          <li className="c-menu__item has-submenu" data-toggle="tooltip" title="Modules">
            <div className="c-menu__item__inner"><i className="fa fa-puzzle-piece"></i>
              <div className="c-menu-item__title"><span>Modules</span></div>
              <div className="c-menu-item__expand js-expand-submenu"><i className="fa fa-angle-down"></i></div>
            </div>
            <ul className="c-menu__submenu u-list">
              <li>Payments</li>
              <li>Maps</li>
              <li>Notifications</li>
            </ul>
          </li>
          <li className="c-menu__item has-submenu" data-toggle="tooltip" title="Statistics">
            <div className="c-menu__item__inner"><i className="far fa-chart-bar"></i>
              <div className="c-menu-item__title"><span>Statistics</span></div>
            </div>
          </li>
          <li className="c-menu__item has-submenu" data-toggle="tooltip" title="Gifts">
            <div className="c-menu__item__inner"><i className="fa fa-gift"></i>
              <div className="c-menu-item__title"><span>Gifts</span></div>
            </div>
          </li>
          <li className="c-menu__item has-submenu" data-toggle="tooltip" title="Settings">
            <div className="c-menu__item__inner"><i className="fa fa-cogs"></i>
              <div className="c-menu-item__title"><span>Settings</span></div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</body>
<main className="l-main">
  <div className="content-wrapper content-wrapper--with-bg">
    <h1 className="page-title">Dashboard</h1>
    <div className="page-content">Content goes here</div>
  </div>
</main>
		</Fragment>
		)
}


}
export default AppSidebar;