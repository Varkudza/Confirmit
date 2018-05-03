import React, {Component} from 'react';
import './/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import filterOpened from '../../resources/filterOpened.png';
import filterOpen from '../../resources/filterOpen.png';
import $ from '../../../node_modules/jquery/dist/jquery';

class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: true
        }
    };
    render() {
        return (
            <span className="filter-bar-container">
                <img src={filterOpened} onClick={this.openCloseFilters}/>
            </span>
        )
    }

    openCloseFilters = () => {
        this.state.isOpened = !this.state.isOpened;

        if(this.state.isOpened === false){
            $('.filter-container').hide();
            $('.filter-bar-container').width("100%");
            $('div#report-data').width("100%");
            $('.filter-bar-container > img').attr("src", filterOpen);
        }else{
            $('.filter-bar-container > img').attr("src", filterOpened);
            $('.filter-bar-container').width("calc(100% - 400px)");
            $('div#report-data').width("calc(100% - 400px)");
            $('.filter-container').show();
        }
        console.log("---" + this.state.isOpened);
    }
}

export default FilterBar;