/******************************
VARIABLES
******************************/
// store questions, answer options, and solutions
var questions = [
    {
        question: "What does 'Es wird schon hell' mean?",
        choices: ["It is slowly getting brighter.", "Oh hell, no!", "It will be hell"],
        correctAnswer: 1
    },

    {
        question: "What is 'Handy'?",
        choices: ["A handyman", "Something is convenient", "A mobile phone"],
        correctAnswer: 3
    },
    {
        question: "What does 'bekommen' mean?",
        choices: ["(to) get", "(to) begin", "(to) become"],
        correctAnswer: 1
    },

    {
        question: "What is a 'fatal' mistake?",
        choices: ["A learning opportunity", "A deadly mistake", "An funny mishap"],
        correctAnswer: 2
    },
    {
        question: "What is a 'Bürger'?",
        choices: ["A delicious food item", "A citizen", "A castle or fortress"],
        correctAnswer: 2
    },

    {
        question: "What is the meaning of 'unterstehen'?",
        choices: ["(to) stand under something", "(to) understand", "(to) be subordinate to"],
        correctAnswer: 3
    },
    {
        question: "What is a 'Tablette'?",
        choices: ["A pill", "A tray", "A tablet"],
        correctAnswer: 1
    },

    {
        question: "What does a 'Chef' do?",
        choices: ["Cooks meals", "Manages employees or a business", "Oversees the police department"],
        correctAnswer: 2
    },
    {
        question: "What is the meaning of 'gültig'?",
        choices: ["Valid", "Honest", "Guilty"],
        correctAnswer: 1
    },

    {
        question: "What is a 'Gymnasium'?",
        choices: ["A sneaker store", "A gym", "High School"],
        correctAnswer: 3
    }
];

// count correct answers
var questionIndex = 0;
var correctAnswers = 0;

// timer variables
var clockRunning = false;
var intervalId;

/******************************
FUNCTIONS
******************************/
function displayQuestion() {
    // display question
    $('#question').text(questions[questionIndex].question);
    // display answer options
    $('#opt1').html('<label><input type="radio" name="option" value="1" >   ' + questions[questionIndex].choices[0] + '</label>');
    $('#opt2').html('<label><input type="radio" name="option" value="2" >   ' + questions[questionIndex].choices[1] + '</label>');
    $('#opt3').html('<label><input type="radio" name="option" value="3" >   ' + questions[questionIndex].choices[2] + '</label>');
};

// check if chosen answer is correct
function checkAnswer() {
    if ($('input[name=option]:checked').val() == questions[questionIndex].correctAnswer) {
        correctAnswers++;
    }
};

/******************************
OBJECTS
******************************/
// timer
var timer = {
    time: 100,
    start: function () {
        if (!clockRunning) {
            intervalId = setInterval(timer.count, 1000);
            clockRunning = true;
        }
    },
    count: function () {
        timer.time = timer.time - 1;
        // display remaining time
        $("#timer").text(timer.time);
        // hide questions when timer runs out and display score
        if (timer.time == 0) {
            $(".container").hide();
            $("#result").html("You got " + correctAnswers + " out of " + questionIndex + " questions correct! Gut gemacht!").hide();
            $("#result").fadeIn(1000);
            clearInterval(intervalId);
            clockRunning = false;
            $("#game-over").append("Time's Up!");
        }
    }
};

/******************************
GAME CODE
******************************/
$(document).ready(function () {
    // hide trivia-body from page before game is started
    $("#result").hide();
    $('.container').hide();
    $('#remaining-time').hide();
    // set up start button
    $('#start-btn').click(function () {
        // trivia-body and timer are displayed
        $('.container').fadeIn();
        $('#remaining-time').fadeIn();
        // hide start button
        $(this).hide();
        // start timer
        timer.start();
    });

    displayQuestion();

    // display new question
    $('#next-btn').click(function () {
        // keeps button from submitting form
        event.preventDefault();
        // check chosen answer
        checkAnswer();
        questionIndex++;
        // TEST
        console.log("Correct Answers: " + correctAnswers + " Questions Answered: " + questionIndex + "/10");

        // set up how long game should run
        if (questionIndex < questions.length) {
            displayQuestion();
            // change next button to submit button on last question
            if (questionIndex == questions.length - 1) {
                $("#next-btn").html("Submit");
                $("#next-btn").click(function () {
                    // hide questions
                    $(".container").hide();
                    // display score
                    $("#result").html("You got " + correctAnswers + " out of " + questionIndex + " questions correct! <br> Gut gemacht!").hide();
                    $("#result").fadeIn(1000);
                    clearInterval(intervalId);
                    clockRunning = false;
                });
            };
        };
    });
});