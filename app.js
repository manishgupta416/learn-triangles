const submitBtn = document.querySelector("#submit-btn");
const quizForm = document.querySelector(".quiz-form");
const output = document.querySelector(".output");
console.log(submitBtn);
console.log(quizForm);

const rightAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

function calculateScore() {
    let score = 0;
    let index=0;
    const formResults = new FormData(quizForm)

    for(let value of formResults.values()){
        console.log(value)
       if(value === rightAnswers[index]) {
        score = score+1
       }
       index= index+1
    }
    console.log(score)
    output.innerText = "Your score is " + score
    
}


submitBtn.addEventListener("click" ,calculateScore)