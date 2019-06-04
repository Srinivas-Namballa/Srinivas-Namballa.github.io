'use strict';

$(document).ready(function() {
    var questions = [];
    var index = Math.floor(Math.random() * 10);
    var answer;

    var displayQuestion = function(questions) {
        questions = questions[index].question;
        $("#questions").html(questions);
        timer();
    }

    var userInputValidation = function() {
        answer = $("#userInput").val();
    
        if(answer == "") {
            alert("Please enter the answer");
        } else {
            if(answer.toLowerCase() == questions[index].answer.toLowerCase()) {
                $("#result").css("color", "green");
                alert("Correct Answer");
                $("#result").html("Correct Answer");
                setTimeout(function() {
                    location.reload();
                }, 1500);
            }
            else {
                $("#result").css("color", "red");
                alert("Wrong Answer");
                $("#result").html("Wrong Answer");
                setTimeout(function() {
                    location.reload();
                }, 1500);
            }
        }
    }
    
    var timer = function() {
        var timer = 30;
        var interval = setInterval(function() {
            timer = timer - 1;
            $("#timer").css("color", "green");
            $("#timer").html(timer);
    
            if(timer <= 10) {
                $("#timer").css("color", "red");
            }
    
            if (timer == 0)
            {
                $("#button").css("display", "none");
                 
                clearInterval(interval);
    
                alert("Time is over!");
                setTimeout(function() {
                    location.reload();
                }, 2000);
            }
        }, 1000); 
    }

    $.ajax({
        url: "quiz.json",
        method: "get",
        dataType: "json",
        success: function(data) {
            questions = data;
            displayQuestion(questions);
        }
    });
    
    $("#button").click(userInputValidation);
});