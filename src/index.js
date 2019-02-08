import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableProductTable from './thinking-in-react/FilterableProductTable/FilterableProductTable.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<FilterableProductTable search="" inStock={false}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
