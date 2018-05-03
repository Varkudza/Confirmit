import React, {Component} from 'react';
import './/style.css';
import 'bootstrap/dist/css/bootstrap.css';

class SmallInfoBlock extends Component {
    render() {
        return (
            <div className="small-info-blocks-container-new">

                    <div id="nps" className="small-info-block">
                        <h5>NPS</h5>
                        <p>1</p>
                    </div>
                    <div id="easy" className="small-info-block">
                        <h5>EASY</h5>
                        <p>1%</p>
                    </div>

                    <div id="overSat" className="small-info-block ">
                        <h5>Overvall Satisfaction</h5>
                        <p>1%</p>
                    </div>

                    <div id="likeToRen" className="small-info-block">
                        <h5>Likely To Renew</h5>
                        <p>1%</p>
                    </div>
            </div>
        )
    }
}

export default SmallInfoBlock;