import {TimeCalc} from './../js/time.js';

$(document).ready(function(){
  $("#date-form").submit(function(event) {
    event.preventDefault();
    $('.result').show();
    let sex = $('#sex').val();
    let country = $('#countries').val();
    let dob = $('#birthday').val();
    let birthday = new TimeCalc(new Date($('#birthday').val()));
    let today = new TimeCalc(new Date());
    let secondsLived = birthday.findDifferenceBetweenTwoDates(today);
    let earthYears = birthday.calculateAgeInEarthYears(today);
    let MercuryAge = birthday.getAgeInYearsByPlanet(earthYears, "Mercury");
    let VenusAge = birthday.getAgeInYearsByPlanet(earthYears, "Venus");
    let MarsAge = birthday.getAgeInYearsByPlanet(earthYears, "Mars");
    let JupiterAge = birthday.getAgeInYearsByPlanet(earthYears, "Jupiter");
    let SaturnAge = birthday.getAgeInYearsByPlanet(earthYears, "Saturn");
    let UranusAge = birthday.getAgeInYearsByPlanet(earthYears, "Uranus");
    let NeptuneAge = birthday.getAgeInYearsByPlanet(earthYears, "Neptune");
    let PlutoAge = birthday.getAgeInYearsByPlanet(earthYears, "Pluto");
    $('.timeLivedOnMercury').text(MercuryAge+" years on Mercury");
    $('.timeLivedOnVenus').text(VenusAge+" years on Venus");
    $('.timeLivedOnEarth').text(earthYears+" years on Earth");
    $('.timeLivedOnMars').text(MarsAge+" years on Mars");
    $('.timeLivedOnJupiter').text(JupiterAge+" years on Jupiter");
    $('.timeLivedOnSaturn').text(SaturnAge+" years on Saturn");
    $('.timeLivedOnUranus').text(UranusAge+" years on Uranus");
    $('.timeLivedOnNeptune').text(NeptuneAge+" years on Neptune");
    $('.timeLivedOnPluto').text(PlutoAge+" years on Pluto");
    $.ajax({
      url: `http://api.population.io/1.0/life-expectancy/total/${sex}/${country}/${dob}/`,
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        let totalLifeExpect = response.total_life_expectancy;
        let yearsLeft = birthday.calculateTimeLeft(totalLifeExpect, today);
        let MercuryAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Mercury");
        let VenusAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Venus");
        let MarsAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Mars");
        let JupiterAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Jupiter");
        let SaturnAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Saturn");
        let UranusAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Uranus");
        let NeptuneAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Neptune");
        let PlutoAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Pluto");
        $('.timeLeftLeftOnMercury').text(MercuryAgeLeft+" years on Mercury");
        $('.timeLeftOnVenus').text(VenusAgeLeft+" years on Venus");
        $('.timeLeftOnEarth').text(earthYears+" years on Earth");
        $('.timeLeftOnMars').text(MarsAgeLeft+" years on Mars");
        $('.timeLeftOnJupiter').text(JupiterAgeLeft+" years on Jupiter");
        $('.timeLeftOnSaturn').text(SaturnAgeLeft+" years on Saturn");
        $('.timeLeftOnUranus').text(UranusAgeLeft+" years on Uranus");
        $('.timeLeftOnNeptune').text(NeptuneAgeLeft+" years on Neptune");
        $('.timeLeftOnPluto').text(PlutoAgeLeft+" years on Pluto");
      },
      error: function() {
        alert("There was an error processing a your life expectancy. Please try again.");
      }
    });
  });
    $.ajax({
      url: `http://api.population.io:80/1.0/countries`,
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        $.each(response.countries, function(i, v){
        $('#countries').append(`<option value="${[v]}">${[v]}</option>`);
      });
      },
      error: function() {
        alert("There was an error processing a list. Please try again.");
      }
    });
});
