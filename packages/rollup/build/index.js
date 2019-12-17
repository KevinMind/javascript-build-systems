(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
	(global = global || self, factory(global.React, global.ReactDOM));
}(this, (function (React, ReactDom) { 'use strict';

	React = React && React.hasOwnProperty('default') ? React['default'] : React;
	ReactDom = ReactDom && ReactDom.hasOwnProperty('default') ? ReactDom['default'] : ReactDom;

	var App = () => React.createElement("div", null, "hello");

	ReactDom.render(React.createElement(App, null), document.getElementById('root'));

})));
