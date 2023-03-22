let myobj = [ 
{
    question: " ماهي أكثر لغة برمجية استخدام في العالم ؟",
    a: "Java",
    b: "Python",
    c: "++C",
    d: "JavaScript",
    correct: "b"

},{

    question: "ماهي أسرع لغة برمجية في التنفيذ ؟",
    a: "Java",
    b: "Python",
    c: "++C",
    d: "JavaScript",
    correct: "c"

},{

    question: "تعتبر احدى اكثر اللغات المستخدمة لتطوير تطبيقات اندرويد",
    a: "Java",
    b: "Kotlin",
    c: "dart",
    d: "JavaScript",
    correct: "a"

},{

    question: "لغة Swift تستخدم في تطوير تطبيقات",
    a: "سطح المكتب",
    b: "ابل",
    c: "اندرويد",
    d: "الويب",
    correct: "b"

},{

    question: "لغة Kotlin تستخدم في تطوير تطبيقات",
    a: "سطح المكتب",
    b: "ابل",
    c: "اندرويد",
    d: "الويب",
    correct: "c"

},{

    question: "أفضلهم لتطوير الألعاب ؟",
    a: "Java",
    b: "Python",
    c: "++C",
    d: "JavaScript",
    correct: "c"

},{

    question: "أقدمهم صناعة ؟",
    a: "Java",
    b: "Python",
    c: "++C",
    d: "JavaScript",
    correct: "c"

},{

    question: "أحدثهم صناعة ؟",
    a: "Java",
    b: "Python",
    c: "++C",
    d: "JavaScript",
    correct: "d"

},{

    question: "HTML Stand For ",
    a: "High Texting Machine learning",
    b: "Hyper Text Markup Language",
    c: "High Transforming Language",
    d: "Hyper Text Markup protocol",
    correct: "b"

},{

    question: "CSS Stand For ",
    a: "Cascading Style Sheets",
    b: "Code Style Sheets",
    c: "Cascading Style Size",
    d: "Code Style Size",
    correct: "a"

    }
];

const mainConatiner = document.querySelector(".main-container")
const quiz = document.querySelector(".quiz");
const timerElm = document.querySelector(".timer");
const scoreElm = document.querySelector(".scoreElm");
let index = 0;
let timer = 10;
let timeLeft = 11000;
let score = 0;

let timerInt = setInterval(() => {
    updateTimer();
}, 1000);
let htmInt = setInterval(() => {
    getQuiz();
}, timeLeft);

function getQuiz() {
    if (index > myobj.length - 1) {
        index = myobj.length - 1;
        clearInterval(timerInt);
        clearInterval(htmInt);
        scoreElm.style.display = "flex";
        scoreElm.innerHTML = `<p>نتيجتك ${score} من ${myobj.length}</p>
        <p>خذ لقطة شاشة وشاركنا النتيجة(:</p>
        <p>________________________________</p>
        <p>Twitter: d11_1l</p>
        <button class="restart">أعادة</button>`;
        const restart = document.querySelector(".restart")
        restart.addEventListener('click', () => {
            scoreElm.style.display = "none";
            index = 0;
            timer = 10;
            score = 0;
            updateTimer();
            getQuiz();
            timerInt = setInterval(() => {
                updateTimer();
            }, 1000);
            htmInt = setInterval(() => {
                getQuiz();
            }, timeLeft);
        })
    }
    const allQuiz = myobj[index];
    quiz.innerHTML = "";
    quiz.innerHTML = `<div class="ques-con">
                        <span class="noOfQuestion">${index+1}/${myobj.length}</span>
                        <h3>${allQuiz.question}</h3>
                        <span class="question-mark">?</span>
                    </div>
                    <div class="option">
                        <p id="a">${allQuiz.a}</p>
                        <p id="b">${allQuiz.b}</p>
                        <p id="c">${allQuiz.c}</p>
                        <p id="d">${allQuiz.d}</p>
                    </div>`;
    console.log(allQuiz);
    index++;
    const option = document.querySelectorAll(".option p");
    option.forEach(element => {
        element.addEventListener("click", () => {
            option.forEach(elem => {
                elem.classList.remove("select");
                elem.style.pointerEvents = "all";
            });
            element.classList.add("select");
            element.style.pointerEvents = "none";
        })
    });
    setTimeout(() => {
        checkAns(option, allQuiz);
    }, timeLeft - 200);
}
getQuiz();

function updateTimer() {
    if (timer < 0) {
        timer = 10;
    }
    timerElm.textContent = `الوقت المتبقي:${timer}`;
    timer--;
}
updateTimer()

function checkAns(option, allQuiz) {
    option.forEach(element => {
        if (element.id === allQuiz.correct && element.classList.contains("select")) {
            score++;
            console.log(score);
        } else {
            score = score;
        }
    });
}