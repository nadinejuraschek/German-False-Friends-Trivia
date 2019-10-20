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

/******************************
GAME CODE
******************************/