(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeCalc = exports.TimeCalc = function () {
  function TimeCalc(birthday) {
    _classCallCheck(this, TimeCalc);

    this.birthday = birthday;
  }

  _createClass(TimeCalc, [{
    key: "findSeconds",
    value: function findSeconds() {
      var timeLived = this.birthday.getTime() / 1000;

      return timeLived;
    }
  }, {
    key: "findDifferenceBetweenTwoDates",
    value: function findDifferenceBetweenTwoDates(second) {
      var primary = this.birthday.findSeconds();
      var secondary = second.findSeconds();
      var difference = secondary - primary;
      return difference;
    }
  }]);

  return TimeCalc;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _time = require('./../js/time.js');

$(document).ready(function () {
  $("#date-form").submit(function (event) {
    event.preventDefault();
    var birthday = new Date($('#birthday').val());
    var timeSince = birthday.findSeconds();
    $('#result').text(timeSince);
  });
});

},{"./../js/time.js":1}]},{},[2]);
