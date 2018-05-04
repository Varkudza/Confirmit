import React, {Component} from 'react';
import './/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from '../../../node_modules/jquery/dist/jquery';

class Filter extends Component {
    selectedOpt = {
        detractor: false,
        passive: false,
        promoter: false,
        productGroup: "",
        reportData: [
            {id: 1, nps: 1, easy: 8, osat: 1, ltr: 8, rsp: 7, prd: 0, prd_group: "B", hier: "United States"},
            {id: 2, nps: 5, easy: 9, osat: 6, ltr: 5, rsp: 10, prd: 4, prd_group: "D", hier: "Canada"},
            {id: 3, nps: 0, easy: 10, osat: 8, ltr: 4, rsp: 2, prd: 6, prd_group: "C", hier: "United States"},
            {id: 4, nps: 7, easy: 5, osat: 8, ltr: 9, rsp: 1, prd: 4, prd_group: "A", hier: "S. America"},
            {id: 5, nps: 1, easy: 2, osat: 3, ltr: 5, rsp: 3, prd: 4, prd_group: "A", hier: "EMEA"},
            {id: 6, nps: 6, easy: 3, osat: 1, ltr: 6, rsp: 6, prd: 1, prd_group: "C", hier: "APAC"},
            {id: 7, nps: 1, easy: 0, osat: 6, ltr: 0, rsp: 5, prd: 3, prd_group: "A", hier: "APAC"},
            {id: 8, nps: 2, easy: 5, osat: 8, ltr: 7, rsp: 7, prd: 4, prd_group: "B", hier: "APAC"},
            {id: 9, nps: 6, easy: 10, osat: 3, ltr: 8, rsp: 7, prd: 5, prd_group: "A", hier: "EMEA"},
            {id: 10, nps: 0, easy: 2, osat: 3, ltr: 4, rsp: 9, prd: 7, prd_group: "B", hier: "United States"},
            {id: 11, nps: 0, easy: 3, osat: 0, ltr: 7, rsp: 10, prd: 10, prd_group: "D", hier: "S. America"},
            {id: 12, nps: 6, easy: 9, osat: 4, ltr: 7, rsp: 9, prd: 8, prd_group: "A", hier: "Canada"},
            {id: 13, nps: 9, easy: 4, osat: 3, ltr: 2, rsp: 1, prd: 4, prd_group: "A", hier: "EMEA"},
            {id: 14, nps: 4, easy: 5, osat: 9, ltr: 2, rsp: 0, prd: 3, prd_group: "D", hier: "Global"},
            {id: 15, nps: 4, easy: 9, osat: 2, ltr: 10, rsp: 6, prd: 8, prd_group: "C", hier: "EMEA"},
            {id: 16, nps: 4, easy: 6, osat: 6, ltr: 8, rsp: 5, prd: 10, prd_group: "B", hier: "APAC"},
            {id: 17, nps: 4, easy: 5, osat: 9, ltr: 0, rsp: 0, prd: 5, prd_group: "D", hier: "United States"},
            {id: 18, nps: 4, easy: 8, osat: 9, ltr: 5, rsp: 8, prd: 5, prd_group: "A", hier: "S. America"},
            {id: 19, nps: 4, easy: 8, osat: 6, ltr: 3, rsp: 8, prd: 8, prd_group: "B", hier: "Canada"},
            {id: 20, nps: 2, easy: 10, osat: 9, ltr: 3, rsp: 1, prd: 5, prd_group: "D", hier: "United States"},
            {id: 21, nps: 2, easy: 1, osat: 8, ltr: 3, rsp: 1, prd: 9, prd_group: "C", hier: "Canada"},
            {id: 22, nps: 6, easy: 3, osat: 7, ltr: 10, rsp: 7, prd: 2, prd_group: "D", hier: "APAC"},
            {id: 23, nps: 8, easy: 9, osat: 4, ltr: 4, rsp: 5, prd: 0, prd_group: "C", hier: "EMEA"},
            {id: 24, nps: 2, easy: 0, osat: 1, ltr: 2, rsp: 9, prd: 5, prd_group: "A", hier: "APAC"},
            {id: 25, nps: 6, easy: 2, osat: 0, ltr: 0, rsp: 8, prd: 9, prd_group: "B", hier: "EMEA"},
            {id: 26, nps: 5, easy: 3, osat: 7, ltr: 7, rsp: 0, prd: 3, prd_group: "A", hier: "Canada"},
            {id: 27, nps: 4, easy: 7, osat: 9, ltr: 0, rsp: 10, prd: 5, prd_group: "C", hier: "Global"},
            {id: 28, nps: 1, easy: 10, osat: 4, ltr: 8, rsp: 1, prd: 4, prd_group: "C", hier: "EMEA"},
            {id: 29, nps: 3, easy: 3, osat: 8, ltr: 8, rsp: 2, prd: 5, prd_group: "B", hier: "EMEA"},
            {id: 30, nps: 4, easy: 1, osat: 4, ltr: 1, rsp: 10, prd: 8, prd_group: "C", hier: "Canada"},
            {id: 31, nps: 4, easy: 9, osat: 1, ltr: 6, rsp: 5, prd: 1, prd_group: "B", hier: "Canada"},
            {id: 32, nps: 4, easy: 3, osat: 6, ltr: 2, rsp: 8, prd: 3, prd_group: "B", hier: "Canada"},
            {id: 33, nps: 4, easy: 10, osat: 0, ltr: 3, rsp: 2, prd: 2, prd_group: "D", hier: "Canada"},
            {id: 34, nps: 10, easy: 6, osat: 7, ltr: 9, rsp: 2, prd: 1, prd_group: "D", hier: "Global"},
            {id: 35, nps: 9, easy: 2, osat: 0, ltr: 1, rsp: 0, prd: 3, prd_group: "C", hier: "S. America"},
            {id: 36, nps: 0, easy: 3, osat: 8, ltr: 7, rsp: 6, prd: 1, prd_group: "D", hier: "S. America"},
            {id: 37, nps: 9, easy: 4, osat: 1, ltr: 2, rsp: 7, prd: 7, prd_group: "B", hier: "United States"},
            {id: 38, nps: 0, easy: 6, osat: 3, ltr: 6, rsp: 7, prd: 9, prd_group: "B", hier: "Canada"},
            {id: 39, nps: 6, easy: 5, osat: 2, ltr: 10, rsp: 1, prd: 1, prd_group: "B", hier: "APAC"},
            {id: 40, nps: 3, easy: 4, osat: 5, ltr: 5, rsp: 1, prd: 8, prd_group: "A", hier: "APAC"},
            {id: 41, nps: 8, easy: 8, osat: 5, ltr: 1, rsp: 8, prd: 9, prd_group: "C", hier: "United States"},
            {id: 42, nps: 10, easy: 7, osat: 9, ltr: 8, rsp: 3, prd: 3, prd_group: "A", hier: "S. America"},
            {id: 43, nps: 8, easy: 8, osat: 2, ltr: 3, rsp: 3, prd: 5, prd_group: "C", hier: "EMEA"},
            {id: 44, nps: 3, easy: 5, osat: 6, ltr: 6, rsp: 5, prd: 6, prd_group: "D", hier: "United States"},
            {id: 45, nps: 1, easy: 0, osat: 8, ltr: 2, rsp: 9, prd: 6, prd_group: "B", hier: "Canada"},
            {id: 46, nps: 7, easy: 5, osat: 8, ltr: 1, rsp: 4, prd: 5, prd_group: "D", hier: "Global"},
            {id: 47, nps: 0, easy: 7, osat: 8, ltr: 6, rsp: 1, prd: 8, prd_group: "D", hier: "Canada"},
            {id: 48, nps: 8, easy: 0, osat: 10, ltr: 4, rsp: 4, prd: 10, prd_group: "B", hier: "EMEA"},
            {id: 49, nps: 0, easy: 1, osat: 6, ltr: 4, rsp: 2, prd: 3, prd_group: "B", hier: "United States"},
            {id: 50, nps: 5, easy: 8, osat: 8, ltr: 8, rsp: 10, prd: 5, prd_group: "B", hier: "Canada"}
        ]
    };

    render() {
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
                        <input name="prodGrp" className="radio" type="radio" id="prodA" onClick={event => {
                            this.selectedOpt.productGroup = "A";
                            this.doIt();
                        }}/>
                        <span className="radio-custom"/>
                        <span className="radio-custom-label">Product Group A</span>
                    </label>

                    <label className="input-body">
                        <input name="prodGrp" className="radio" type="radio" id="prodB" onClick={event => {
                            this.selectedOpt.productGroup = "B";
                            this.doIt();
                        }}/>
                        <span className="radio-custom"/>
                        <span className="radio-custom-label">Product Group B</span>
                    </label>

                    <label className="input-body">
                        <input name="prodGrp" className="radio" type="radio" id="prodC" onClick={event => {
                            this.selectedOpt.productGroup = "C";
                            this.doIt();
                        }}/>
                        <span className="radio-custom"/>
                        <span className="radio-custom-label">Product Group C</span>
                    </label>

                    <label className="input-body">
                        <input name="prodGrp" className="radio" type="radio" id="prodD" onClick={event => {
                            this.selectedOpt.productGroup = "D";
                            this.doIt();
                        }}/>
                        <span className="radio-custom"/>
                        <span className="radio-custom-label">Product Group D</span>
                    </label>
                </div>
            </div>
        )
    }

    detractorClick = () => {
        this.selectedOpt.detractor = $("#detractor").prop("checked");
        console.log("detractor = " + this.selectedOpt.detractor);
        this.doIt();
    };

    passiveClick = () => {
        this.selectedOpt.passive = $("#passive").prop("checked");
        console.log("passive = " + this.selectedOpt.passive);
        this.doIt();
    };

    promoterClick = () => {
        this.selectedOpt.promoter = $("#promoter").prop("checked");
        console.log("promoter = " + this.selectedOpt.promoter);
        this.doIt();
    };


    doIt = () => {
        console.log("doIt");
        //Detractor (nps=0-6), Passive (nps=7-8), Promoter (nps=9-10)
        var jsonArr = this.selectedOpt.reportData.slice();
        //titles variables
        var nps = 0;
        var easy = 0;
        var overSat = 0;
        var likeToRen = 0;

        var productGroup = this.selectedOpt.productGroup;
        var isDetractor = this.selectedOpt.detractor;
        var isPassive = this.selectedOpt.passive;
        var isPromoter = this.selectedOpt.promoter;

        //table variables
        var Global = {osat: 0, rsp: 0, prd: 0, count: 0},
            EMEA = {osat: 0, rsp: 0, prd: 0, count: 0},
            Canada = {osat: 0, rsp: 0, prd: 0, count: 0},
            US = {osat: 0, rsp: 0, prd: 0, count: 0},
            APAC = {osat: 0, rsp: 0, prd: 0, count: 0},
            SAM = {osat: 0, rsp: 0, prd: 0, count: 0};



        var newArray = jsonArr.slice();

        if(productGroup !== ""){
            newArray = newArray.filter(function (el) {
                return el.prd_group === productGroup
            });
        }
        if(isDetractor === true || isPassive === true || isPromoter === true){
            newArray = newArray.filter(function (el) {
                let npsVal = Number(el.nps);
                return (isDetractor === true ? (npsVal >= 0 && npsVal <= 6) : false) ||
                    (isPassive === true ? (npsVal >= 7 && npsVal <= 8) : false) ||
                    (isPromoter === true ? (npsVal >= 9 && npsVal <= 10) : false);
            });
        }

        var selectedRows = newArray.length;

        for (var i = 0; i < selectedRows; i++) {
            var obj = newArray[i];
            var npsVal = Number(obj.nps);

            //titles general average
            nps += npsVal;
            easy += Number(obj.easy);
            overSat += Number(obj.osat);
            likeToRen += Number(obj.ltr);

            //table average

            // Global
            // EMEA
            // Canada
            // United States
            // APAC
            // S. America


            //Overall
            //Responsiveness
            //Product Knowledge

            switch (obj.hier){
                case "Global" :
                    Global.osat += obj.osat;
                    Global.rsp += obj.osat;
                    Global.prd += obj.prd;
                    Global.count++;
                    break;

                case "EMEA" :
                    EMEA.osat += obj.osat;
                    EMEA.rsp += obj.osat;
                    EMEA.prd += obj.prd;
                    EMEA.count++;
                    break;

                case "Canada" :
                    Canada.osat += obj.osat;
                    Canada.rsp += obj.osat;
                    Canada.prd += obj.prd;
                    Canada.count++;
                    break;

                case "United States" :
                    US.osat += obj.osat;
                    US.rsp += obj.osat;
                    US.prd += obj.prd;
                    US.count++;
                    break;

                case "APAC" :
                    APAC.osat += obj.osat;
                    APAC.rsp += obj.osat;
                    APAC.prd += obj.prd;
                    APAC.count++;
                    break;

                case "S. America" :
                    SAM.osat += obj.osat;
                    SAM.rsp += obj.osat;
                    SAM.prd += obj.prd;
                    SAM.count++;
                    break;
            }

        }

        //TODO не совсем понял отчего именно считать процент для easy, overSat и likeToRen, поэтому оставил просто среднее арифметическое
        if (selectedRows > 0) {
            $('div#nps p').val((nps / selectedRows).toFixed(2));
            $('div#easy p').val((easy / selectedRows).toFixed(2) + "%");
            $('div#overSat p').val((overSat / selectedRows).toFixed(2) + "%");
            $('div#likeToRen p').val((likeToRen / selectedRows).toFixed(2) + "%");
        } else  {
            $('div#nps p').val(0);
            $('div#easy p').val("0%");
            $('div#overSat p').val("0%");
            $('div#likeToRen p').val("0%");
        }

        this.setTableValues(Global, 'global');
        this.setTableValues(EMEA, 'emea');
        this.setTableValues(Canada, 'canada');
        this.setTableValues(US, 'us');
        this.setTableValues(APAC, 'apac');
        this.setTableValues(SAM, 'sam');
    };

    setTableValues = (obj, id) => {
        if(obj.count > 0){
            $('tr#'+id+' span.osat').text((obj.osat / obj.count).toFixed(1));
            $('tr#'+id+' span.rsp').text((obj.rsp / obj.count).toFixed(1));
            $('tr#'+id+' span.prd').text((obj.prd / obj.count).toFixed(1));
        }
        else{
            $('tr#'+id+' span.osat').text(0);
            $('tr#'+id+' span.rsp').text(0);
            $('tr#'+id+' span.prd').text(0);
        }
    }

    // $("#myRadio").prop("checked");
}

export default Filter;


/*
*
* Data for tiles – JSON array:
[
    { id: “Identificator”, nps: “NPS”, easy: “Easy”, osat: “Overall Satisfaction”, ltr: “Likely to Renew”, rsp: “Responsiveness”,
    prd: “Product knowledge”, prd_group: “Product Group”, hier: “Hierarchy” },
    [ 1, 7, 3, 6, 5, 10, 3, “B”, “APAC” ],
    [ 2, 4, 9, 2, 0, 7, 2, “A”, “United States” ],
    [ 3, 5, 7, 8, 1, 0, 5, “D”, “Global” ],
    …
    [ 50, 10, 2, 7, 6, 3, 9, “B”, “Canada” ]
]
*/

/*
* Code fo generating Data
*
*

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var str = "";
for(var i = 1; i <= 50; i++){
	var strArr = [];
	var prodArr = ["\"A\"", "\"B\"", "\"C\"", "\"D\""];
	var countryArr = ["\"Global\"","\"EMEA\"","\"Canada\"","\"United States\"","\"APAC\"", "\"S. America\""];

	//[ 1, 7, 3, 6, 5, 10, 3, “B”, “APAC” ]
	strArr.push("id:" + i);

	strArr.push("nps:" + getRandomInt(0,10));
	strArr.push("easy:" + getRandomInt(0,10));
	strArr.push("osat:" + getRandomInt(0,10));
	strArr.push("ltr:" + getRandomInt(0,10));
	strArr.push("rsp:" + getRandomInt(0,10));
	strArr.push("prd:" + getRandomInt(0,10));


	strArr.push("prd_group:" + prodArr[getRandomInt(0,3)]);
	strArr.push("hier:" + countryArr[getRandomInt(0,5)]);
	str +="{" + strArr + "}," + "\n"

}
* */

/*Generated data is
*
{id:1,nps:1,easy:8,osat:1,ltr:8,rsp:7,prd:0,prd_group:"B",hier:"United States"},
{id:2,nps:5,easy:9,osat:6,ltr:5,rsp:10,prd:4,prd_group:"D",hier:"Canada"},
{id:3,nps:0,easy:10,osat:8,ltr:4,rsp:2,prd:6,prd_group:"C",hier:"United States"},
{id:4,nps:7,easy:5,osat:8,ltr:9,rsp:1,prd:4,prd_group:"A",hier:"S. America"},
{id:5,nps:1,easy:2,osat:3,ltr:5,rsp:3,prd:4,prd_group:"A",hier:"EMEA"},
{id:6,nps:6,easy:3,osat:1,ltr:6,rsp:6,prd:1,prd_group:"C",hier:"APAC"},
{id:7,nps:1,easy:0,osat:6,ltr:0,rsp:5,prd:3,prd_group:"A",hier:"APAC"},
{id:8,nps:2,easy:5,osat:8,ltr:7,rsp:7,prd:4,prd_group:"B",hier:"APAC"},
{id:9,nps:6,easy:10,osat:3,ltr:8,rsp:7,prd:5,prd_group:"A",hier:"EMEA"},
{id:10,nps:0,easy:2,osat:3,ltr:4,rsp:9,prd:7,prd_group:"B",hier:"United States"},
{id:11,nps:0,easy:3,osat:0,ltr:7,rsp:10,prd:10,prd_group:"D",hier:"S. America"},
{id:12,nps:6,easy:9,osat:4,ltr:7,rsp:9,prd:8,prd_group:"A",hier:"Canada"},
{id:13,nps:9,easy:4,osat:3,ltr:2,rsp:1,prd:4,prd_group:"A",hier:"EMEA"},
{id:14,nps:4,easy:5,osat:9,ltr:2,rsp:0,prd:3,prd_group:"D",hier:"Global"},
{id:15,nps:4,easy:9,osat:2,ltr:10,rsp:6,prd:8,prd_group:"C",hier:"EMEA"},
{id:16,nps:4,easy:6,osat:6,ltr:8,rsp:5,prd:10,prd_group:"B",hier:"APAC"},
{id:17,nps:4,easy:5,osat:9,ltr:0,rsp:0,prd:5,prd_group:"D",hier:"United States"},
{id:18,nps:4,easy:8,osat:9,ltr:5,rsp:8,prd:5,prd_group:"A",hier:"S. America"},
{id:19,nps:4,easy:8,osat:6,ltr:3,rsp:8,prd:8,prd_group:"B",hier:"Canada"},
{id:20,nps:2,easy:10,osat:9,ltr:3,rsp:1,prd:5,prd_group:"D",hier:"United States"},
{id:21,nps:2,easy:1,osat:8,ltr:3,rsp:1,prd:9,prd_group:"C",hier:"Canada"},
{id:22,nps:6,easy:3,osat:7,ltr:10,rsp:7,prd:2,prd_group:"D",hier:"APAC"},
{id:23,nps:8,easy:9,osat:4,ltr:4,rsp:5,prd:0,prd_group:"C",hier:"EMEA"},
{id:24,nps:2,easy:0,osat:1,ltr:2,rsp:9,prd:5,prd_group:"A",hier:"APAC"},
{id:25,nps:6,easy:2,osat:0,ltr:0,rsp:8,prd:9,prd_group:"B",hier:"EMEA"},
{id:26,nps:5,easy:3,osat:7,ltr:7,rsp:0,prd:3,prd_group:"A",hier:"Canada"},
{id:27,nps:4,easy:7,osat:9,ltr:0,rsp:10,prd:5,prd_group:"C",hier:"Global"},
{id:28,nps:1,easy:10,osat:4,ltr:8,rsp:1,prd:4,prd_group:"C",hier:"EMEA"},
{id:29,nps:3,easy:3,osat:8,ltr:8,rsp:2,prd:5,prd_group:"B",hier:"EMEA"},
{id:30,nps:4,easy:1,osat:4,ltr:1,rsp:10,prd:8,prd_group:"C",hier:"Canada"},
{id:31,nps:4,easy:9,osat:1,ltr:6,rsp:5,prd:1,prd_group:"B",hier:"Canada"},
{id:32,nps:4,easy:3,osat:6,ltr:2,rsp:8,prd:3,prd_group:"B",hier:"Canada"},
{id:33,nps:4,easy:10,osat:0,ltr:3,rsp:2,prd:2,prd_group:"D",hier:"Canada"},
{id:34,nps:10,easy:6,osat:7,ltr:9,rsp:2,prd:1,prd_group:"D",hier:"Global"},
{id:35,nps:9,easy:2,osat:0,ltr:1,rsp:0,prd:3,prd_group:"C",hier:"S. America"},
{id:36,nps:0,easy:3,osat:8,ltr:7,rsp:6,prd:1,prd_group:"D",hier:"S. America"},
{id:37,nps:9,easy:4,osat:1,ltr:2,rsp:7,prd:7,prd_group:"B",hier:"United States"},
{id:38,nps:0,easy:6,osat:3,ltr:6,rsp:7,prd:9,prd_group:"B",hier:"Canada"},
{id:39,nps:6,easy:5,osat:2,ltr:10,rsp:1,prd:1,prd_group:"B",hier:"APAC"},
{id:40,nps:3,easy:4,osat:5,ltr:5,rsp:1,prd:8,prd_group:"A",hier:"APAC"},
{id:41,nps:8,easy:8,osat:5,ltr:1,rsp:8,prd:9,prd_group:"C",hier:"United States"},
{id:42,nps:10,easy:7,osat:9,ltr:8,rsp:3,prd:3,prd_group:"A",hier:"S. America"},
{id:43,nps:8,easy:8,osat:2,ltr:3,rsp:3,prd:5,prd_group:"C",hier:"EMEA"},
{id:44,nps:3,easy:5,osat:6,ltr:6,rsp:5,prd:6,prd_group:"D",hier:"United States"},
{id:45,nps:1,easy:0,osat:8,ltr:2,rsp:9,prd:6,prd_group:"B",hier:"Canada"},
{id:46,nps:7,easy:5,osat:8,ltr:1,rsp:4,prd:5,prd_group:"D",hier:"Global"},
{id:47,nps:0,easy:7,osat:8,ltr:6,rsp:1,prd:8,prd_group:"D",hier:"Canada"},
{id:48,nps:8,easy:0,osat:10,ltr:4,rsp:4,prd:10,prd_group:"B",hier:"EMEA"},
{id:49,nps:0,easy:1,osat:6,ltr:4,rsp:2,prd:3,prd_group:"B",hier:"United States"},
{id:50,nps:5,easy:8,osat:8,ltr:8,rsp:10,prd:5,prd_group:"B",hier:"Canada"}
* */