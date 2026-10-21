$(document).ready(function () {
  console.log("jQuery is ready!");

  var itemNumber = 3;
  $("#addItem").click(function () {
    $("#itemList").append("<li>Item " + itemNumber + "</li>");
    itemNumber++;
  });
  $("#prependItem").click(function () {
    $("#itemList").prepend("<li>Item " + itemNumber + "</li>");
    itemNumber++;
  });
  $("#removeItem").click(function () { $("#itemList li:last").remove(); });

  $("#changeImage").click(function () {
    if ($("#switchImage").attr("src") === "assets/day.svg") {
      $("#switchImage").attr("src", "assets/night.svg").attr("alt", "Moon above green hills");
    } else {
      $("#switchImage").attr("src", "assets/day.svg").attr("alt", "Sun above green hills");
    }
  });
  $("#changeLink").click(function () {
    $("#studyLink").attr("href", "https://api.jquery.com/").text("jQuery documentation");
  });
  $("#profileForm").submit(function (event) { event.preventDefault(); });
  $("#name").on("input", function () { $("#liveName").text($(this).val()); });
  $("#email").on("input", function () { $("#liveEmail").text($(this).val()); });
});
