function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + ", Time used: 15s</h2><h2 id='score'></h2><img style=' margin-left: 3%;margin-right: auto;width='100%'; height='55%'' src='chart.png'> <h2>You are better than 30% of your classmate!</h2>   ";
    
    gameOverHTML+= "<div class='firework' id='firework1'>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div></div><div class='firework' id='firework2'>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div></div><div class='firework' id='firework3'>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div>	<div class='explosion'></div></div>";
    var element = document.getElementById("quiz");

    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is answer of 69 * 69?", ["▲4761", "◆5432","●8545", "■0789"], "▲4761"),

    new Question("What is x of x − 2 = 4 ?", ["▲6", "◆5","●4", "■3"], "▲6"),
    

    new Question("Which formula can calculate the area of a Circle?", ["▲(x1+x2)*(y1+y2)", "◆PI*r^2","●y=mx+c", "■PI*r*l"], "◆PI*r^2"),
    

    new Question("Given A+B=12, B-A=6, B+C=11, what is C?", ["▲1", "◆2","●3", "■4"], "◆2"),
        

];


var quiz = new Quiz(questions);


populate();





