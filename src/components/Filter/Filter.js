import React, {Component} from 'react';
import './/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from '../../../node_modules/jquery/dist/jquery';

class Filter extends Component {
       selectedOpt = {
           detractor: false,
           passive: false,
           promoter: false,
           productGroup: ""

   };
    render(){
        return (
            <div className="filter-container">
                <div className="filter-header">
                    <p>Filters</p>
                </div>
                <div className="filter-body">
                    <span className="filter-titles">NPS Group</span>

                    <label className="input-body">
                        <input className="checkbox" type="checkbox" id="detractor" onClick={this.detractorClick}/>
                        <span className="checkbox-custom"/>
                        <span className="checkbox-custom-label"> Detractor</span>
                    </label>

                    <label className="input-body">
                        <input className="checkbox" type="checkbox" id="passive" onClick={this.passiveClick}/>
                        <span className="checkbox-custom"/>
                        <span className="checkbox-custom-label"> Passive</span>
                    </label>

                    <label className="input-body">
                        <input className="checkbox" type="checkbox" id="promoter" onClick={this.promoterClick}/>
                        <span className="checkbox-custom"/>
                        <span className="checkbox-custom-label"> Promoter</span>
                    </label>


                    <span className="filter-titles">Product Group</span>
                    <label className="input-body">
                        <input name="prodGrp" className="radio" type="radio" id="prodA" onClick={event => {this.selectedOpt.productGroup = "prodA"}}/>
                        <span className="radio-custom"/>
                        <span className="radio-custom-label">Product Group A</span>
                    </label>

                    <label className="input-body">
                        <input name="prodGrp" className="radio" type="radio" id="prodB" onClick={event => {this.selectedOpt.productGroup = "prodB"}}/>
                        <span className="radio-custom"/>
                        <span className="radio-custom-label">Product Group B</span>
                    </label>

                    <label className="input-body">
                        <input name="prodGrp" className="radio" type="radio" id="prodC" onClick={event => {this.selectedOpt.productGroup = "prodC"}}/>
                        <span className="radio-custom"/>
                        <span className="radio-custom-label">Product Group C</span>
                    </label>

                    <label className="input-body">
                        <input name="prodGrp" className="radio" type="radio" id="prodD" onClick={event => {this.selectedOpt.productGroup = "prodD"}}/>
                        <span className="radio-custom"/>
                        <span className="radio-custom-label">Product Group D</span>
                    </label>
                </div>
            </div>
        )
    }

    detractorClick = () => {
        this.selectedOpt.detractor = $("#detractor").prop("checked");
        console.log("detractor = " + this.selectedOpt.detractor)
    }

    passiveClick = () => {
        this.selectedOpt.passive = $("#passive").prop("checked");
        console.log("passive = " + this.selectedOpt.passive)
    }

    promoterClick = () => {
        this.selectedOpt.promoter = $("#promoter").prop("checked");
        console.log("promoter = " + this.selectedOpt.promoter)
    }


    // $("#myRadio").prop("checked");
}

export default Filter;