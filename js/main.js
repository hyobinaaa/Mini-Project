var start = true;
var time = 30;

$('a.showtimer').click(function() {
  $('div.timeShow').slideToggle("slow")
  time = 0;
});


$("#button1").click(function() {
  if(start) {
    time = 30;
    start = false;
  
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

$(".showset").click(function() {
  $(".sets").slideToggle();
});

$("li.set").on("click", function(event) {
  if($(this).hasClass("on")) {
    $(this).removeClass("on")
  }
  else {
    $(this).addClass("on");
  }
})
