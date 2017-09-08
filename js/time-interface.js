import {TimeCalc} from './../js/time.js';

$(document).ready(function(){
  $("#date-form").submit(function(event) {
    event.preventDefault();
    let sex = $('#sex').val();
    let country = $('#countries').val();
    let dob = $('#birthday').val();
    let birthday = new TimeCalc(new Date($('#birthday').val()));
    let today = new TimeCalc(new Date());
    let secondsLived = birthday.findDifferenceBetweenTwoDates(today);
    alert(secondsLived);
    let earthYears = birthday.calculateAgeInEarthYears(today);
    $.ajax({
      url: `http://api.population.io/1.0/life-expectancy/total/${sex}/${country}/${dob}/`,
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        let totalLifeExpect = response.total_life_expectancy;
        let spaceAge = birthday.getAgeInYearsByPlanet(earthYears, planet);
        let yearsLeft = birthday.calculateTimeLeft(totalLifeExpect, today);
        $('#result').append( );
        alert(birthday.calculateTimeLeft(yearsLeft, today));
        alert(birthday.getAgeInYearsByPlanet(yearsLeft, "Mercury"));
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
