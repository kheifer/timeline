import {TimeCalc} from './../js/time.js'

$(document).ready(function(){
  $("#date-form").submit(function(event) {
    event.preventDefault();
    let birthday = new Date($('#birthday').val());
    let timeSince = birthday.findSeconds();
    $('#result').text(timeSince);
    })
});
