$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#hideText").click(function () { $("#message").hide(); });
  $("#showText").click(function () { $("#message").show(); });
  $("#toggleText").click(function () { $("#message").toggle(); });
  $("#fadeIn").click(function () { $("#fadeImage").stop(true, true).fadeIn(600); });
  $("#fadeOut").click(function () { $("#fadeImage").stop(true, true).fadeOut(600); });
  $("#fadeToggle").click(function () { $("#fadeImage").stop(true, true).fadeToggle(600); });
  $("#slideUp").click(function () { $("#panel").stop(true, true).slideUp(500); });
  $("#slideDown").click(function () { $("#panel").stop(true, true).slideDown(500); });
  $("#slideToggle").click(function () { $("#panel").stop(true, true).slideToggle(500); });
});
