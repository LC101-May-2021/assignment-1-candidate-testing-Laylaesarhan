const input = require('readline-sync');
let question= "Who was the first American woman in space?";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space?", "True or false: 5 kilometer == 5000 meters?", "(5 + 3)/2 * 10 = ?","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?","What is the minimum crew size for the ISS?"];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];

let candidateName = input.question("What is yo name? ")



function askQuestion() {

  for (let i=0; i<questions.length; i++) {
    let answers = input.question(questions[i]);
    candidateAnswers.push(answers);
  }

  for (let i =0; i<questions.length; i++) {
    console.log(`Canidate Name: ${candidateName}`);
    console.log(`${i+1}) ${questions[i]}`)
    console.log(`Your Answer: ${candidateAnswers[i]}`)
    console.log(`Correct Answer: ${correctAnswers[i]}`)
    console.log(" ")
  }
}
 
function gradeQuiz(candidateAnswers) {
 
 let numCorrect = 0;
 let n = 5;
 for (let i = 0; i < candidateAnswers.length; i++) {
      if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
        numCorrect = numCorrect +1;
      }
  
 } 
 let grade = numCorrect/candidateAnswers.length * 100;
 if (grade < 80) {
   console.log(">>> Status: FAILED <<<")
  } else {
   console.log(">>> Status: PASS <<<")
  }
  console.log(`>>> Overall Grade:${grade}% (${numCorrect} of ${questions.length}) <<< `)
  return grade;
}

function runProgram() {
  function askForName() {
  candidateName= input.question ("Whats yo name? ");
  }
  console.log(candidateName + " whats up dude?")
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //

module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};