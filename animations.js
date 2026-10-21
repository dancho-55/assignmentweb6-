$(document).ready(function () {
  console.log("jQuery is ready!");

  // Reset also clears queued animations.
  $(".reset").click(function () {
    $($(this).attr("data-box")).stop(true, false).css({
      left: 0, top: 0, width: 60, height: 60, opacity: 1
    });
  });
  $("#basicStart").click(function () {
    $("#basicBox").stop(true, false).css({left: 0, top: 0, width: 60, height: 60})
      .animate({left: 120, width: 100, height: 100}, 800);
  });
  $("#sequenceStart").click(function () {
    $("#sequenceBox").stop(true, false).css({left: 0, top: 0, width: 60, height: 60})
      .animate({left: 150}, 600)
      .animate({top: 90}, 600)
      .animate({width: 30, height: 30}, 600)
      .animate({left: 0, top: 0, width: 60, height: 60}, 600);
  });
  $("#combinedStart").click(function () {
    $("#combinedBox").stop(true, false).css({left: 0, top: 0, width: 60, height: 60, opacity: 1})
      .animate({left: 120, top: 50, width: 100, height: 100, opacity: 0.4}, 1000);
  });
});
