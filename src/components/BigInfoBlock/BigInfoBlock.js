import React, {Component} from 'react';
import './/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from '../../../node_modules/jquery/dist/jquery';

class BigInfoBlock extends Component {
    render() {
        return (
            <div className="big-info-block-container">
                <div className="big-info-block ">
                    <h5>Team Perfomance</h5>
                    <p>NPS Value</p>
                </div>
            </div>
        )
    }
}

export default BigInfoBlock;