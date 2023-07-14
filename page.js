
//------------------------------------------------FACTS PAGE--------------------------------------------------

let currentIdx = 0;
//-------------------------------------FUNCTION TO DISPLAY NEXT FACT & IMG (on button click!)------------------------------------------
function ChangeNext() {
    const text = document.getElementById("text");
    const text_array = [
        " Tomatoes are the most eaten fruit in the world. ",
        " Blue, red, and yellow are primary colors",
        " Caterpillars have 12 eyes!",
        " About 75% of your brain is made of water",
        " It takes about 50 licks to finish just one scoop of ice cream.",
        " Human babies have more bones than adults.",
        " The Dead Sea is the lowest place on the planet.",
        " You cant touch your elbow with your tongue",
        " French fries are Belgian, not French",
        " You can buy a square watermelon in Japan",
        " Apples float on water!",
        " The sunset on Mars appears blue.",
        " A jar of Nutella sells every 2.5 seconds.",
        " A starfish does not have a brain.",
        " Octopi have three hearts",
        " Your nose gets warmer when you lie",
        " Horses actually sleep standing up",
        " Red is the first color a baby can see.",
        " Potatoes were the first vegetable to be grown in space.",
        " A shark doesnot contain any bones in its body."
    ];
    currentIdx++;
    text.innerHTML = text_array[currentIdx];

    const img = document.getElementById('myImg');
    const img_array = ["tomato.png", "colors.png", "catterpillar.jpeg", "brainimg.jpg", "icecreamimg.jpg",
        "bonesimg.png", "deadsea.jpg", "elbow.jpeg", "fries.jpg",
        "watermelon.jpg", "apple.jpg", "sunset.jpg_large",
        "nutella.png", "starfish.jpg", "octopus.jpg",
        "nose.jpg", "horse.jpeg", "red.jpg", "potato.jpg", "sharkimg.png"];

    img.src = img_array[currentIdx];
    if (currentIdx == 20) {
        currentIdx = -1;
        ChangeNext();
    }

}
//-------------------------------------FUNCTION TO DISPLAY PREVIOUS FACT & IMG (on button click!)------------------------------------------
function ChangePrev() {
    const text = document.getElementById('text');
    const text_array = [
        " Tomatoes are the most eaten fruit in the world. ",
        " Blue, red, and yellow are primary colors",
        " Caterpillars have 12 eyes!",
        " About 75% of your brain is made of water",
        " It takes about 50 licks to finish just one scoop of ice cream.",
        " Human babies have more bones than adults.",
        " The Dead Sea is the lowest place on the planet.",
        " You cant touch your elbow with your tongue",
        " French fries are Belgian, not French",
        " You can buy a square watermelon in Japan",
        " Apples float on water!",
        " The sunset on Mars appears blue.",
        " A jar of Nutella sells every 2.5 seconds.",
        " A starfish does not have a brain.",
        " Octopi have three hearts",
        " Your nose gets warmer when you lie",
        " Horses actually sleep standing up",
        " Red is the first color a baby can see.",
        " Potatoes were the first vegetable to be grown in space.",
        " A shark doesnot contain any bones in its body."
    ];
    currentIdx--;
    if (currentIdx == -1) { currentIdx = 0 };
    text.innerHTML = text_array[currentIdx];

    const img = document.getElementById('myImg');
    const img_array = ["tomato.png", "colors.png", "catterpillar.jpeg", "brainimg.jpg", "icecreamimg.jpg",
    "bonesimg.png", "deadsea.jpg", "elbow.jpeg", "fries.jpg",
    "watermelon.jpg", "apple.jpg", "sunset.jpg_large",
    "nutella.png", "starfish.jpg", "octopus.jpg",
    "nose.jpg", "horse.jpeg", "red.jpg", "potato.jpg", "sharkimg.png"];

    img.src = img_array[currentIdx];


    if (currentIdx == 20) {
        currentIdx = 0
        ChangePrev();
    }

}

// ----------------------------------------QUIZ PAGE------------------------------------------------------

var QUES_DIC = [
    {
        question: "_________ floats on water?",
        choices: ["APPLE", "BANANA"],
        correctAnswer: "APPLE",
    },
    {
        question: "________ doesnot have any bones in body",
        choices: ["BABY", "SHARK"],
        correctAnswer: "SHARK",
    },
    {
        question: "75% brain is made with _________",
        choices: ["WATER", "SAND"],
        correctAnswer: "WATER",
    },
    {
        question: "________ licks for one scoop of ice creams",
        choices: ["2", "50"],
        correctAnswer: "50",
    },
    {
        question: "_______ has more bones",
        choices: ["BABY", "ADULT"],
        correctAnswer: "BABY",
    },
    {
        question: "_______ is lowest place on Earth",
        choices: ["MOUNTAINS", "DEAD SEA"],
        correctAnswer: "DEAD SEA",
    },
    {
        question: "Body is made of 60% ________",
        choices: ["WATER", "SAND"],
        correctAnswer: "WATER",
    },
    {
        question: "French fries are _________",
        choices: ["FRENCH", "BELGIAN"],
        correctAnswer: "BELGIAN",
    },
    {
        question: "________ watermelon is in Japan",
        choices: ["SQUARE", "STAR"],
        correctAnswer: "SQUARE",
    },
    {
        question: "________ has 12 eyes",
        choices: ["CATTERPILLARS", "FLY"],
        correctAnswer: "CATTERPILLARS",
    },
    {
        question: "a jar of ____ sells every 2.5 seconds",
        choices: ["BUTTER", "NUTELLA"],
        correctAnswer: "NUTELLA",
    },
    {
        question: "Sunset on mars is _______",
        choices: ["BLUE", "GREEN"],
        correctAnswer: "BLUE",
    },
    {
        question: "_________ has no brain",
        choices: ["WHALE", "STARFISH"],
        correctAnswer: "STARFISH",
    },
    {
        question: "__________ has 3 hearts",
        choices: ["OCTOPUS", "CRAB"],
        correctAnswer: "OCTOPUS",
    },
    {
        question: "_________ is most eaten fruit",
        choices: ["TOMATO", "GRAPES"],
        correctAnswer: "TOMATO",
    },
    {
        question: "__________ was first grown in space",
        choices: ["RICE", "POTATO"],
        correctAnswer: "POTATO",
    },
    {
        question: "______ sleeps standing up",
        choices: ["HORSE", "HUMAN"],
        correctAnswer: "HORSE",
    },
    {
        question: "______ is 1st color baby can see",
        choices: ["GREEN", "RED"],
        correctAnswer: "RED",
    },
    {
        question: "_____ are primary colors",
        choices: ["RED YELLOW BLUE", "BLACK GREY PINK"],
        correctAnswer: "RED YELLOW BLUE",
    },
];

var score = 0; // Initialize the score to zero
var end = 5;//no. of qs


//----------------------------FUNCTION TO GENERATE A RANDOM QS FROM QUES_DIC (on button click!)--------------------------------------
function generateQuestion() {

   //qs, options, answer
    var qs_no = Math.floor(Math.random() * QUES_DIC.length);

    var qs = QUES_DIC[qs_no].question;
    var options = QUES_DIC[qs_no].choices;
    var true_option = QUES_DIC[qs_no].correctAnswer;

   //question:
    document.getElementById("question").innerHTML = qs;

    //choiceDone:
    var choiceDone = "";

    for (var i = 0; i < options.length; i++) 
    {
        choiceDone += '<label><input type="radio" name="answer" value="' + options[i] + '"> ' + options[i] + "</label>";
    }
    document.getElementById("choices").innerHTML = choiceDone;

    //correctAnswer:
    document.getElementById("correctAnswer").value = true_option;
}

//----------------------------FUNCTION TO CHECK THE OPTION SELECTED (on button click!)--------------------------------------
function CHECKING() {
  
    var answer = document.querySelector('input[name="answer"]:checked').value;


    var correctAnswer = document.getElementById("correctAnswer").value;

   //if the asnwer selected and correct answer (defined in dic) are same:
    if (answer === correctAnswer) 
    {
        document.getElementById("result").innerHTML = "Correct!";
        score++; 
    } 
    else {
        document.getElementById("result").innerHTML = "Sorry, the correct answer was: " + correctAnswer;
    }

    //decrement no. of qs left
    end--;

    //Disable SUBMIT button if 5 qs are done:
    if (end === 0) {
        document.querySelector('button[type="submit"]').disabled = true;
    }

   //SCORE:
    document.getElementById("score").innerHTML = "Score: " + score;

    //WHEN QUIZ ENDS DISPLAY THE RESULT!!!!!!
    if (end > 0) 
    {
        generateQuestion();
    }
    else 
    {
       
        document.getElementById("question").innerHTML = "QUIZ COMPLETED";
        document.getElementById("choices").innerHTML = ":) :) :)";
        document.getElementById("result").innerHTML = "";
        document.getElementById("score").innerHTML = "YOU SCORED: " + score + " / 5";
    }
}

// Initialize the quiz
generateQuestion();





