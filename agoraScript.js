/* Agora Javascript file */

//Need the doc load function always
$(document).ready(function() {

  //Syncs checkboxes based of simple myCheckbox class
  $(".myCheckbox").change(function() {
    $(".myCheckbox").prop("checked", this.checked);
  });


  //Countdown function
  function contador() {

    //Midnight Tonight Value
    var midnight = new Date();
    midnight.setHours(24,0,0,0);
    var timeTillMidnight = midnight.getTime() - Date.now();

    //Midnight Four Days Later Value (Added to todays)
    var fiveExtra = 345600000;
    var finalCountdown = timeTillMidnight + fiveExtra;

    //Simplified sample code from w3 and mysef
    var distance = finalCountdown;

    //Breaking it down
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Instantiate variables based on time left calculated
    var dy = days;
    var hr = hours;
	  var mm = minutes;
	  var ss = seconds;

    //Actual countdown iterator
    var interval = setInterval(function(){

        if(dy == 0 && hr == 0 && mm == 0 && ss == 0)clearInterval(interval);
        ss--;
        if(ss == 0)
        {
            ss = 59;
            mm--;
            if(mm == 0)
            {
                mm = 59;
                hr--;
                if(hr == 0)
                {
                    hr = 23;
                    dy--;
                }
            }
        }

        //Numerical separator for digits, includes 0 for place holder
        if(dy.toString().length < 2) dy = "0"+dy;
        if(hr.toString().length < 2) hr = "0"+hr;
        if(mm.toString().length < 2) mm = "0"+mm;
        if(ss.toString().length < 2) ss = "0"+ss;
        $("#contador").html("<span class='dia'>"+dy+"</span> : <span class='hora'>"+hr+"</span> : <span class='minuto'>"+mm+"</span> : <span class='segundo'>"+ss+'</span>');

      },1000)
    }
    window.onload = contador;

});



//Checkbox check for buttons (needs to be outside the document load function)
function buttonPush() {
  if($('input[type=checkbox]').prop('checked')) {

      return;

  }
  else {
    $("form").submit(function(e) {
        e.preventDefault();
    });
    window.alert("Hey you gotta check those boxes buckaroo!");
  }
}
