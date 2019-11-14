//App.js
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/jobs.list.scss'
// import{Badge} from 'react-bootstrap'
import MenuList from '../../_components/_layouts/menulist.layout';
import NavBar from '../../_components/_layouts/navbar.layout';
import BreadcrumbLayout from '../../_components/_layouts/breadcrumb.layout';

export default class JobList extends Component<any,any> {

    
 constructor(props) {
    super(props);
    this.state = {
      show: false,
      fullwidth:false,
      clicked: false,
      showSubmenu:false,
      chartData: {},
      breadcrumbData:[{'name':'Home','link':'/'},{'name':'Jobs','link':'/jobs'}]
    }
  }


  componentWillMount() {
    
  }

    onemethod=()=>{
        const cwidth =this.state.fullwidth;
        this.setState({ fullwidth: !cwidth });
      }

      
 render() {
    return (
        <React.Fragment>
            <MenuList checked={this.onemethod}/> 
            <section id="contents" style={this.state.fullwidth ? {width:'100%'} : {}}>
          <NavBar />
          <BreadcrumbLayout breadcrumbData={this.state.breadcrumbData} />
       
<div className="container-fluid">
    <div className="row">
        <div className="col-md-12">
            <div className="row justify-content-around">
                <div className="col-md-6 post">
                <div className="col-md-12 well j-post-card">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>
                                <strong><a href="http://www.jquery2dotnet.com/2013/12/cool-share-button-effects-styles.html" className="post-title">Cool Share Button Effects Styles</a></strong></h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 post-header-line">
                            <span className="fa fa-user"></span>by <a href="#">Bhaumik</a> | <span className="fa fa-calendar">
                            </span>Sept 16th, 2012 | <span className="fa fa-comment"></span><a href="#">
                                3 Comments</a> | <i className="icon-share"></i><a href="#">39 Shares</a> | <span className="fa fa-tags">
                                </span>Tags : <a href="#"><span className="label label-info">Snipp</span></a> <a href="#">
                                    <span className="label label-info">Bootstrap</span></a> <a href="#"><span className="label label-info">
                                        UI</span></a> <a href="#"><span className="label label-info">growth</span></a>
                        </div>
                    </div>
                    <div className="row post-content">
                        <div className="col-md-9">
                            <p>
                                Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option.
                                Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari
                                conclusionemque, ad nobis propriae quaerendum sea.
                            </p>
                            <p>
                                <a className="btn btn-read-more" href="http://www.jquery2dotnet.com/2013/12/cool-share-button-effects-styles.html">Read more</a></p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md-6 post">
                <div className="col-md-12 well j-post-card">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>
                                <strong><a href="http://www.jquery2dotnet.com/2013/12/brand-icons-design-using-css.html" className="post-title">Brand Icons Design Using Css</a></strong></h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 post-header-line">
                            <span className="fa fa-user"></span>by <a href="#">Bhaumik</a> | <span className="fa fa-calendar">
                            </span>Sept 16th, 2012 | <span className="fa fa-comment"></span><a href="#">
                                3 Comments</a> | <i className="icon-share"></i><a href="#">39 Shares</a> | <span className="fa fa-tags">
                                </span>Tags : <a href="#"><span className="label label-info">Snipp</span></a> <a href="#">
                                    <span className="label label-info">Bootstrap</span></a> <a href="#"><span className="label label-info">
                                        UI</span></a> <a href="#"><span className="label label-info">growth</span></a>
                        </div>
                    </div>
                    <div className="row post-content">
                        <div className="col-md-9">
                            <p>
                                Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option.
                                Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari
                                conclusionemque, ad nobis propriae quaerendum sea.
                            </p>
                            <p>
                                <a className="btn btn-read-more" href="http://www.jquery2dotnet.com/2013/12/brand-icons-design-using-css.html">Read more</a></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
      </section>
      </React.Fragment>
  		)
	}
}