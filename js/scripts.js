$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var name = $("input#user").val();
    var question2 = $("input#q2").val();
    var question3 = $("input:radio[name=option]:checked").val();
    var question4 = $("#q4").val();
    var question5 = $("#q5").val();
    var track;

    if (question4 !== "loveit") {
      $("#suggestion").hide();
      $("#recommendation").show();
    } else if ((question2 === "yes" && question3 !== "response2" && question3 !== "response3" && question3 !== "response4") || question3 === "response1") {
        var track = "C#/.NET";
        $("#name").hide()
        $("#name").show()
        $("#suggestion").hide();
        $("#exception").hide();
        $("#recommendation").hide();
        $("#suggestion").show();
        $("#result").text(track);
        $("#name").text(name);
    } else if (question3 === "response2") {
        var track = "CSS/Design";
        $("#name").hide()
        $("#name").show()
        $("#suggestion").hide();
        $("#exception").hide();
        $("#recommendation").hide();
        $("#suggestion").show();
        $("#result").text(track);
        $("#name").text(name);
    } else if ((question3 === "response3" && question5 === "several") || question5 ==="several") {
        var track = "Java/Android";
        $("#name").hide()
        $("#name").show()
        $("#suggestion").hide();
        $("#exception").hide();
        $("#recommendation").hide();
        $("#suggestion").show();
        $("#result").text(track);
        $("#name").text(name);
    } else if (question3 === "response4") {
        var track = "Ruby/Rails";
        $("#name").hide()
        $("#name").show()
        $("#suggestion").hide();
        $("#exception").hide();
        $("#recommendation").hide();
        $("#suggestion").show();
        $("#result").text(track);
        $("#name").text(name);
    } else if (question3 === "response3" && question5 === "none") {
        var track = "Java/Android";
        $("#name").hide()
        $("#name").show()
        $("#suggestion").hide();
        $("#exception").hide();
        $("#recommendation").hide();
        $("#suggestion").show();
        $("#exception").show();
        $("#result").text(track);
        $("#name").text(name);
    }
    else {
    alert("I couldn't find your match!");
  }

    // alert(question2);
    // alert(question3);
    // alert(question5);

    event.preventDefault();
  });
});
