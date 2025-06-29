const questions = [
    {
        question: "What is the square root of 144?",
        answers:["A. 10", "B. 11", "C. 12", "D. 13"],
        correctAnswer: "C. 12"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers:["A. Michelangelo", "B. Leonardo da vinci", "C. Pablo Picasso", "D. Vincent van gogh"],
        correctAnswer: "B. Leonardo da vinci"
    },
    {
        question: "How many continents are there on Earth?",
        answers: ["A. 5", "B. 6", "C. 7", "D.8"],
        correctAnswer: "C. 7"
    },
    {
        question: "What is 7 * 9?",
        answers: ["A. 56", "B. 63", "C. 72", "D. 69"],
        correctAnswer: "B. 63"
    }
];

 let currentQuestion = 0;
 let score =  0;

 const questionElement = document.getElementById("question");
 const answerListElement = document.getElementById("answer-list");
 const nextButton = document.getElementById("next-btn");
 const resultElement = document.getElementById("result");
 const retryButton = document.getElementById("retry-btn");

 function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    answerListElement.innerHTML = "",
    resultElement.textContent = "",

    question.answers.forEach(answer => {
        const li = document.createElement("li");
        li.textContent = answer;
        li.addEventListener("click", () => checkAnswer(answer, li));
        answerListElement.appendChild(li);
    });
 }

 function checkAnswer(selectedAnswer, selectedElement) {
    const correct = questions[currentQuestion].correctAnswer;
    const options = answerListElement.querySelectorAll("li");
    
     options.forEach(option => {
        option.classList.add("disabled");

        if (option.textContent == correct) {
            option.classList.add("correct");
        }

         if (option.textContent === selectedAnswer && selectedAnswer != correct) {
            option.classList.add("wrong");
         }
     });

         if (selectedAnswer === correct) {
            score++;
         }
    }

     function showResult() {
        questionElement.style.display = "none";
        answerListElement.style.display = "none";
        nextButton.style.display = "none";
        resultElement.textContent = `Your score is: ${score} out of ${questions.length}`;
        retryButton.style.display = "inline-block";
    }

    nextButton.addEventListener("click", () => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
    } else {
        showResult();
    }
    });

    retryButton.addEventListener("click", () => {
        currentQuestion = 0;
        score = 0;
        questionElement.style.display = "block";
        answerListElement.style.display = "block";
        nextButton.style.display = "inline-block";
        retryButton.style.display = "none";
        loadQuestion();

    });

    loadQuestion();
     

