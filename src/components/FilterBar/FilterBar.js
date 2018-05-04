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

    componentDidMount(){

    }

    render() {
        return (
            <div className="filter-bar-container">
                <img src={filterOpened} onClick={this.openCloseFilters}/>
            </div>
        )
    }

    openCloseFilters = () => {
        this.state.isOpened = !this.state.isOpened;

        if(this.state.isOpened === false){
            $('.filter-container').hide();
            $('.filter-bar-container > img').attr("src", filterOpen);
        }else{
            $('.filter-bar-container > img').attr("src", filterOpened);
            $('.filter-container').show();
        }
        setCorrectWidthStyle();
        console.log("---" + this.state.isOpened);
    }
}

//небольшой костыль
function setCorrectWidthStyle() {
    var isFilterShow = $('.filter-container').is(":visible");
    // console.log("---" + isFilterShow);
    console.log("-isFilterShow === true-" + isFilterShow === true);

    if ($(window).width() <= '568') {
        $('.filter-bar-container').width("100%");
        $('div#report-data').width("100%");
    } else {
        if (isFilterShow === true) {
            $('.filter-bar-container').width("calc(100% - 400px)");
            $('div#report-data').width("calc(100% - 400px)");
        }else {
            $('.filter-bar-container').width("100%");
            $('div#report-data').width("100%");
        }
    }
}

$(window).resize(function () {
    setCorrectWidthStyle();
});

export default FilterBar;