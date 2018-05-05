import React, {Component} from 'react';
import './/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from '../../../node_modules/jquery/dist/jquery';
import '../../../node_modules/tablesorter/dist/js/jquery.tablesorter'

class BigInfoBlock extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        $("#report-table").tablesorter({debug: true});
        $("#report-table").trigger('update');

        //If this value >= 7.0 make it green, if <5 make it red, in all other cases – gray
        $('span.osat, span.rsp, span.prd').on('DOMSubtreeModified', function () {
            var obj = $(this);
            var value = obj.text();
            if(Number(value) >= 7){
                obj.removeClass('lowCell', 'normalCell');
                obj.addClass('highCell');
            }
            else if(Number(value) < 5){
                obj.removeClass('highCell', 'normalCell');
                obj.addClass('lowCell');
            }
            else if((Number(value) >= 5 && Number(value) < 7)) {
                obj.removeClass('lowCell', 'highCell');
                obj.addClass('normalCell');
            }
        })


    }
    render() {
        return (
            <div className="big-info-block-container-new">
                <div className="big-info-block">
                    <h5>Team Perfomance</h5>
                    <div className="big-info-table-container">
                        <table id="report-table">
                            <thead>
                            <tr>
                                <th>--</th>
                                <td>Overall</td>
                                <td>Responsiveness</td>
                                <td>Product Knowledge</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr id="global">
                                <th>Global</th>
                                <td><span className="osat">0.0</span></td>
                                <td><span className="rsp">0.0</span></td>
                                <td><span className="prd">0.0</span></td>
                            </tr>
                            <tr id="emea">
                                <th>EMEA</th>
                                <td><span className="osat">0.0</span></td>
                                <td><span className="rsp">0.0</span></td>
                                <td><span className="prd">0.0</span></td>
                            </tr>
                            <tr id="canada">
                                <th>Canada</th>
                                <td><span className="osat">0.0</span></td>
                                <td><span className="rsp">0.0</span></td>
                                <td><span className="prd">0.0</span></td>
                            </tr>
                            <tr id="us">
                                <th>United States</th>
                                <td><span className="osat">0.0</span></td>
                                <td><span className="rsp">0.0</span></td>
                                <td><span className="prd">0.0</span></td>
                            </tr>
                            <tr id="apac">
                                <th>APAC</th>
                                <td><span className="osat">0.0</span></td>
                                <td><span className="rsp">0.0</span></td>
                                <td><span className="prd">0.0</span></td>
                            </tr>
                            <tr id="sam">
                                <th>S. America</th>
                                <td><span className="osat">0.0</span></td>
                                <td><span className="rsp">0.0</span></td>
                                <td><span className="prd">0.0</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default BigInfoBlock;