import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './responsive.css';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import registerServiceWorker from './registerServiceWorker';
import SmallInfoBlock from "./components/SmallInfoBlock/SmallInfoBlock";
import FilterBar from "./components/FilterBar/FilterBar";
import BigInfoBlock from "./components/BigInfoBlock/BigInfoBlock";


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Filter />, document.getElementById('filter'));
ReactDOM.render(<FilterBar />, document.getElementById('filter-bar'));
ReactDOM.render(<SmallInfoBlock />, document.getElementById('small-info-blocks'));
ReactDOM.render(<BigInfoBlock />, document.getElementById('big-block'));
registerServiceWorker();
