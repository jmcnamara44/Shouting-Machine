$(document).ready(function() {
  $(".formOne").submit(function(event) {
    var sentenceInput = $("input#sentence").val().toUpperCase();

    $(".sentence").text(sentenceInput);

    $("#capitalize").show();

    event.preventDefault();
  });
});
