$(document).ready(function () {
  console.log("jQuery is ready!");

  // ID, class and tag selectors.
  $("#changeText").click(function () {
    $("#idText").text("I selected this paragraph by ID.");
    $(".classText").text("I selected this paragraph by class.");
    $("#htmlText").html("<strong>This text is bold because of .html().</strong>");
    $("li").css("color", "blue");
    $(".classText").css("background-color", "#fff2b3");
  });
});
