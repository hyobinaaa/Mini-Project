$('a.showtimer').click(function() {
  $('div.timeShow').slideToggle("slow")
});

var start = true;

$("#button1").click(function() {
  if(start) {
    start = false;
  
  var time = 30;
  timer = setInterval(function() {

    if(time == 0) {
      clearInterval(timer);
      start = true;
    }

    if(time < 10) {
      time = "0" + time;
    }

    $("#time").html("00:"+time);
    time--;
  }, 1000);
}
});