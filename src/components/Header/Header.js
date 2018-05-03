import React, {Component} from 'react';
import './/style.css';
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/util/util';
import logo from '../../logo.svg';
import $ from '../../../node_modules/jquery/dist/jquery';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid header-bar">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-12 logo-container">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <span className="logo-text">Company Logo</span>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                        <ul className="tab-list justify-content-center">
                            <li className="nav-item">
                                <a className="tab-link" onClick={this.homeTabClick}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="tab-link" onClick={this.headlinesTabClick}>HeadLines</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    homeTabClick = () =>{
        console.log();
        $('a').removeClass("tab-link-selected");
        $('#home-tab').addClass("tab-link-selected");
        $('.small-info-block').show();
        $('.small-info-block').show();
    };

    headlinesTabClick = () => {
        console.log();
        $('a').removeClass("tab-link-selected");
        $('#headlines-tab').addClass("tab-link-selected");
        $('.small-info-block').hide();
        $('.small-info-block').hide();
    };
}

export default Header;