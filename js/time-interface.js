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
    $('.timeLivedOnMercury').text(MercuryAge);
    $('.timeLivedOnVenus').text(VenusAge);
    $('.timeLivedOnEarth').text(earthYears);
    $('.timeLivedOnMars').text(MarsAge);
    $('.timeLivedOnJupiter').text(JupiterAge);
    $('.timeLivedOnSaturn').text(SaturnAge);
    $('.timeLivedOnUranus').text(UranusAge);
    $('.timeLivedOnNeptune').text(NeptuneAge);
    $('.timeLivedOnPluto').text(PlutoAge);
    $.ajax({
      url: `http://api.population.io/1.0/life-expectancy/total/${sex}/${country}/${dob}/`,
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        let totalLifeExpect = response.total_life_expectancy;
        let yearsLeft = birthday.calculateTimeLeft(totalLifeExpect, today);
        let MercuryAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Mercury");
        let VenusAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Venus");
        let EarthAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Earth");
        let MarsAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Mars");
        let JupiterAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Jupiter");
        let SaturnAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Saturn");
        let UranusAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Uranus");
        let NeptuneAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Neptune");
        let PlutoAgeLeft = birthday.getAgeInYearsByPlanet(yearsLeft, "Pluto");
        $('.timeLeftOnMercury').text(MercuryAgeLeft);
        $('.timeLeftOnVenus').text(VenusAgeLeft);
        $('.timeLeftOnEarth').text(EarthAgeLeft);
        $('.timeLeftOnMars').text(MarsAgeLeft);
        $('.timeLeftOnJupiter').text(JupiterAgeLeft);
        $('.timeLeftOnSaturn').text(SaturnAgeLeft);
        $('.timeLeftOnUranus').text(UranusAgeLeft);
        $('.timeLeftOnNeptune').text(NeptuneAgeLeft);
        $('.timeLeftOnPluto').text(PlutoAgeLeft);
      },
      error: function(result) {
        console.log(result.responseText);
        alert("There was an error processing your life expectancy. Only birthdays only dates between 01-01-1920 and 12-31-2059 are currently supported. Please try again.");
        $('.expectancy').text("");
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
        alert("There was an error processing the countries list. Please reload the page.");
      }
    });
});
