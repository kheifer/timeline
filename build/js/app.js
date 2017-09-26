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
      var primary = this.findSeconds();
      var secondary = second.findSeconds();
      var difference = secondary - primary;
      return difference;
    }
  }, {
    key: "calculateAgeInEarthYears",
    value: function calculateAgeInEarthYears(currentDate) {
      var age = parseFloat((this.findDifferenceBetweenTwoDates(currentDate) / 31536000).toFixed(2));
      return age;
    }
  }, {
    key: "calculateTimeLeft",
    value: function calculateTimeLeft(total, currentDate) {
      var age = parseFloat(total - this.calculateAgeInEarthYears(currentDate).toFixed(2));

      return age;
    }
  }, {
    key: "getAgeInYearsByPlanet",
    value: function getAgeInYearsByPlanet(age, planet) {
      var multiplier = 0;
      if (planet == "Mercury") {
        multiplier = 0.24;
      } else if (planet == "Venus") {
        multiplier = 0.62;
      } else if (planet == "Mars") {
        multiplier = 1.88;
      } else if (planet == "Jupiter") {
        multiplier = 11.88;
      } else if (planet == "Earth") {
        multiplier = 1;
      } else if (planet == "Saturn") {
        multiplier = 29.46;
      } else if (planet == "Uranus") {
        multiplier = 84.01;
      } else if (planet == "Neptune") {
        multiplier = 164.79;
      } else if (planet == "Pluto") {
        multiplier = 248.59;
      } else if (planet == "Sun") {
        return "You would burn bright like a star";
      } else {
        return "I'm not sure how you got that planet, but we don't have data for it";
      }
      var planetAge = parseFloat((age / multiplier).toFixed(2));
      return planetAge;
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
    $('.result').show();
    var sex = $('#sex').val();
    var country = $('#countries').val();
    var dob = $('#birthday').val();
    var birthday = new _time.TimeCalc(new Date($('#birthday').val()));
    var today = new _time.TimeCalc(new Date());
    var secondsLived = birthday.findDifferenceBetweenTwoDates(today);
    var earthYears = birthday.calculateAgeInEarthYears(today);
    var MercuryAge = birthday.getAgeInYearsByPlanet(earthYears, "Mercury");
    var VenusAge = birthday.getAgeInYearsByPlanet(earthYears, "Venus");
    var MarsAge = birthday.getAgeInYearsByPlanet(earthYears, "Mars");
    var JupiterAge = birthday.getAgeInYearsByPlanet(earthYears, "Jupiter");
    var SaturnAge = birthday.getAgeInYearsByPlanet(earthYears, "Saturn");
    var UranusAge = birthday.getAgeInYearsByPlanet(earthYears, "Uranus");
    var NeptuneAge = birthday.getAgeInYearsByPlanet(earthYears, "Neptune");
    var PlutoAge = birthday.getAgeInYearsByPlanet(earthYears, "Pluto");
    $('.timeLivedOnMercury').text(MercuryAge + " years on Mercury");
    $('.timeLivedOnVenus').text(VenusAge + " years on Venus");
    $('.timeLivedOnEarth').text(earthYears + " years on Earth");
    $('.timeLivedOnMars').text(MarsAge + " years on Mars");
    $('.timeLivedOnJupiter').text(JupiterAge + " years on Jupiter");
    $('.timeLivedOnSaturn').text(SaturnAge + " years on Saturn");
    $('.timeLivedOnUranus').text(UranusAge + " years on Uranus");
    $('.timeLivedOnNeptune').text(NeptuneAge + " years on Neptune");
    $('.timeLivedOnPluto').text(PlutoAge + " years on Pluto");
    $.ajax({
      url: 'http://api.population.io/1.0/life-expectancy/total/' + sex + '/' + country + '/' + dob + '/',
      type: 'GET',
      dataType: 'json',
      success: function success(response) {
        var totalLifeExpect = response.total_life_expectancy;
        var yearsLeft = birthday.calculateTimeLeft(totalLifeExpect, today);
        var MercuryAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Mercury");
        var VenusAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Venus");
        var MarsAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Mars");
        var JupiterAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Jupiter");
        var SaturnAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Saturn");
        var UranusAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Uranus");
        var NeptuneAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Neptune");
        var PlutoAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Pluto");
        $('.timeLeftLeftOnMercury').text(MercuryAgeLeft + " years on Mercury");
        $('.timeLeftOnVenus').text(VenusAgeLeft + " years on Venus");
        $('.timeLeftOnEarth').text(earthYears + " years on Earth");
        $('.timeLeftOnMars').text(MarsAgeLeft + " years on Mars");
        $('.timeLeftOnJupiter').text(JupiterAgeLeft + " years on Jupiter");
        $('.timeLeftOnSaturn').text(SaturnAgeLeft + " years on Saturn");
        $('.timeLeftOnUranus').text(UranusAgeLeft + " years on Uranus");
        $('.timeLeftOnNeptune').text(NeptuneAgeLeft + " years on Neptune");
        $('.timeLeftOnPluto').text(PlutoAgeLeft + " years on Pluto");
      },
      error: function error() {
        alert("There was an error processing a your life expectancy. Please try again.");
      }
    });
  });
  $.ajax({
    url: 'http://api.population.io:80/1.0/countries',
    type: 'GET',
    dataType: 'json',
    success: function success(response) {
      $.each(response.countries, function (i, v) {
        $('#countries').append('<option value="' + [v] + '">' + [v] + '</option>');
      });
    },
    error: function error() {
      alert("There was an error processing a list. Please try again.");
    }
  });
});

},{"./../js/time.js":1}]},{},[2]);
