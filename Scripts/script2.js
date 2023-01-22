// DOM IMPLEMENTATION

const login_details = JSON.parse(localStorage.getItem('login_details'));
const allUsers = JSON.parse(localStorage.getItem("users"));

const userName = document.querySelector(".username");
const time = document.querySelector(".time");
let miniutes = 10;
let seconds = 00;

// Question & Options
const questionText = document.querySelector(".question-text");
const optionA = document.querySelector(".first-option .middle");
const optionB = document.querySelector(".second-option .middle");
const optionC = document.querySelector(".third-option .middle");
const optionD = document.querySelector(".fourth-option .middle");

const nxtBtn = document.querySelector(".next-btn");
let currentQuestion = 0;

let currentNumber = document.querySelector(".current-question");

const btn = document.querySelector(".btn");

let scores = 0;

// Visible score

let scorePlus = document.querySelector(".score-plus");
let scoreMinus = document.querySelector(".score-minus");
let middleDisplay = document.querySelector(".score-dis");



// To know which user logged in and display the user's name

for (let i = 0; i < allUsers.length; i++) {
    if (login_details.username === allUsers[i].username) {
        alert(login_details.name + ", the timer start counting immediately you click 'OK', get ready to set a record.");
        break;
    }    
}

userName.textContent = login_details.username;

setInterval(()=>{
    if (seconds < 10) {
        let second = "0" + seconds;
        seconds = second;
    }
    if (seconds < 1) {
        seconds = 59;
        miniutes--;
    }
    time.textContent = miniutes + ":" + seconds
    seconds--;
}, 1000);


// QUESTIONS, OPTIONS AND ANSWERS

const categories = [

]

const questions = [
    {
        number: 1,
        question: "When is Christmas Day",
        optionA: "Dec 23",
        optionB: "Dec 15",
        optionC: "Dec 25",
        optionD: "Dec 52",
        answer: "C"
    },
    {
        number: 2,
        question: "When is Boxing Day",
        optionA: "Dec 26",
        optionB: "Dec 16",
        optionC: "Dec 25",
        optionD: "Dec 19",
        answer: "A"
    },
    {
        number: 3,
        question: "What is full meaning of WHO",
        optionA: "World Human Organisation",
        optionB: "West Health Organisation",
        optionC: "World Health Organisation",
        optionD: "Wise Human Organisation",
        answer: "C"
    },
    {
        number: 4,
        question: "What is full meaning of WHO",
        optionA: "World Human Organisation",
        optionB: "West Health Organisation",
        optionC: "World Health Organisation",
        optionD: "Wise Human Organisation",
        answer: "C"
    },
    {
        number: 5,
        question: "What is full meaning of WHO",
        optionA: "World Human Organisation",
        optionB: "West Health Organisation",
        optionC: "World Health Organisation",
        optionD: "Wise Human Organisation",
        answer: "C"
    },
    {
        number: 6,
        question: "What is full meaning of WHO",
        optionA: "World Human Organisation",
        optionB: "West Health Organisation",
        optionC: "World Health Organisation",
        optionD: "Wise Human Organisation",
        answer: "C"
    },
    {
        number: 7,
        question: "What is full meaning of WHO",
        optionA: "World Human Organisation",
        optionB: "West Health Organisation",
        optionC: "World Health Organisation",
        optionD: "Wise Human Organisation",
        answer: "C"
    },
    {
        number: 8,
        question: "What is full meaning of WHO",
        optionA: "World Human Organisation",
        optionB: "West Health Organisation",
        optionC: "World Health Organisation",
        optionD: "Wise Human Organisation",
        answer: "C"
    },
    {
        number: 9,
        question: "What is full meaning of WHO",
        optionA: "World Human Organisation",
        optionB: "West Health Organisation",
        optionC: "World Health Organisation",
        optionD: "Wise Human Organisation",
        answer: "C"
    },
    {
        number: 10,
        question: "What is full meaning of WHO",
        optionA: "World Human Organisation",
        optionB: "West Health Organisation",
        optionC: "World Health Organisation",
        optionD: "Wise Human Organisation",
        answer: "C"
    }
]

questionText.textContent = questions[0].question;
optionA.textContent = questions[0].optionA;
optionB.textContent = questions[0].optionB;
optionC.textContent = questions[0].optionC;
optionD.textContent = questions[0].optionD;

let moved = true;

function moveToNext() {
    if (!moved) {
        clicked = true;
        for (let i = 0; i < options.length; i++) {
            options[i].querySelector(".left").classList.remove('correct');
            options[i].querySelector(".middle").classList.remove('correct');
            options[i].querySelector(".right").classList.remove('correct');

            options[i].querySelector(".left").classList.remove('wrong');
            options[i].querySelector(".middle").classList.remove('wrong');
            options[i].querySelector(".right").classList.remove('wrong');
        }

        currentQuestion++;
        questionText.textContent = questions[currentQuestion].question;
        optionA.textContent = questions[currentQuestion].optionA;
        optionB.textContent = questions[currentQuestion].optionB;
        optionC.textContent = questions[currentQuestion].optionC;
        optionD.textContent = questions[currentQuestion].optionD;

        currentNumber.textContent = currentQuestion + 1;

        scorePlus.classList.add("hidden");
        scoreMinus.classList.add("hidden");
        middleDisplay.classList.remove("to-top");
        middleDisplay.classList.add("back-to-norm");
    }
   moved = true;
}

nxtBtn.addEventListener("click", ()=>{
    moveToNext();
    if (!currentQuestion >= 9) {
        moveToNext();
    }
})



// ANSWER SELECTION AND VERIFYING

const options = document.querySelectorAll(".options");

let chosenOption;
let clicked = true;


options.forEach((option)=>{
    option.addEventListener("click", ()=>{
        if (clicked) {
            moved = false;
            clicked = false;
            if (option.classList.contains("A")) {
                chosenOption = "A";
            }else if (option.classList.contains("B")) {
                chosenOption = "B";
            }else if (option.classList.contains("C")) {
                chosenOption = "C";
            }else if (option.classList.contains("D")) {
                chosenOption = "D";
            }
    
            if (chosenOption === questions[currentQuestion].answer) {
                option.querySelector(".left").classList.add("correct");
                option.querySelector(".middle").classList.add("correct");
                option.querySelector(".right").classList.add("correct");
                document.querySelector(`.btn-${currentQuestion + 1}`).classList.add("correct");

                scores += 200;

                scorePlus.classList.remove("hidden");
                middleDisplay.classList.add("to-top");

                // setTimeout(()=>{
                //     moveToNext();
                // },1500)
            }else{
                option.querySelector(".left").classList.add("wrong");
                option.querySelector(".middle").classList.add("wrong");
                option.querySelector(".right").classList.add("wrong");
                document.querySelector(`.btn-${currentQuestion + 1}`).classList.add("wrong");
                setTimeout(()=>{
                    document.querySelector("." + questions[currentQuestion].answer).querySelector(".left").classList.add("correct");
                    document.querySelector("." + questions[currentQuestion].answer).querySelector(".middle").classList.add("correct");
                    document.querySelector("." + questions[currentQuestion].answer).querySelector(".right").classList.add("correct");
                }, 1000);

                scoreMinus.classList.remove("hidden");
                middleDisplay.classList.add("to-top");

                scores -= 100;

                // setTimeout(()=>{
                //     moveToNext();
                // },1500);

            }
        }

        if (currentQuestion >= 9) {
            nxtBtn.textContent = "Finish";
        
            nxtBtn.addEventListener('click', ()=>{
                alert("You score is " + scores + " points")
            })
        }
    })
})


 