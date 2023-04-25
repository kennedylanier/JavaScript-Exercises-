$(document).ready(function() {
  $("#submit").click(function() {
    // variables for each form input
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();

    // array for required fields
    var required = [name, email, phone];

    // for loop to iterate through required array
    for (var i = 0; i < required.length; i++) {
      // check if field is empty
      if (required[i] === "") {
        // show error message
        $("#error-message").text("Please Fill Out Required Fields.").show();
        // add warning class to corresponding label
        $("label").eq(i).addClass("warning");
      } else {
        // if field has value, hide error message and remove warning class
        $("#error-message").text("").hide();
        $("label").eq(i).removeClass("warning");
      }
    }

    // check if all labels have warning class
    if ($("label.warning").length === 0) {
      // remove form from the DOM
      $("#form").remove();
      // "thank you" message
      $("#pre-form h2").text("Thanks for your feedback!");
    }
  });
});
