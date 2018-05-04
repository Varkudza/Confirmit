import React, {Component} from 'react';
import './/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from '../../../node_modules/jquery/dist/jquery';

class BigInfoBlock extends Component {
    render() {
        return (
            <div className="big-info-block-container-new">
                <div className="big-info-block">
                    <h5>Team Perfomance</h5>
                    <div className="big-info-table-container">
                        <table>
                            <tr>
                                <td>--</td>
                                <td>Overall</td>
                                <td>Responsiveness</td>
                                <td>Product Knowledge</td>
                            </tr>
                            <tr id="global">
                                <td>Global</td>
                                <td><span className="osat">6.3</span></td>
                                <td><span className="rsp">3.8</span></td>
                                <td><span className="prd">6.4</span></td>
                            </tr>
                            <tr id="emea">
                                <td>EMEA</td>
                                <td><span className="osat">6.3</span></td>
                                <td><span className="rsp">3.8</span></td>
                                <td><span className="prd">6.4</span></td>
                            </tr>
                            <tr id="canada">
                                <td>Canada</td>
                                <td><span className="osat">6.3</span></td>
                                <td><span className="rsp">3.8</span></td>
                                <td><span className="prd">6.4</span></td>
                            </tr>
                            <tr id="us">
                                <td>United States</td>
                                <td><span className="osat">6.3</span></td>
                                <td><span className="rsp">3.8</span></td>
                                <td><span className="prd">6.4</span></td>
                            </tr>
                            <tr id="apac">
                                <td>APAC</td>
                                <td><span className="osat">6.3</span></td>
                                <td><span className="rsp">3.8</span></td>
                                <td><span className="prd">6.4</span></td>
                            </tr>
                            <tr id="sam">
                                <td>S. America</td>
                                <td><span className="osat">6.3</span></td>
                                <td><span className="rsp">3.8</span></td>
                                <td><span className="prd">6.4</span></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


export default BigInfoBlock;