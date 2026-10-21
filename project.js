$(document).ready(function () {
  console.log("jQuery is ready!");

  $(".question").click(function () {
    var answer = $(this).next(".answer");
    var wasOpen = $(this).attr("aria-expanded") === "true";

    $(".answer").not(answer).stop(true, true).slideUp(300);
    $(".question").not(this).attr("aria-expanded", "false");
    if (wasOpen) {
      answer.stop(true, true).slideUp(300);
      $(this).attr("aria-expanded", "false");
    } else {
      answer.stop(true, true).slideDown(300);
      $(this).attr("aria-expanded", "true");
    }
  });
});
