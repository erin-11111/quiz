//Focuses on the functionality of the webpage


// Declarations
//DOM OBJECTS
//HTML containers
let timer = document.getElementsByClassName('timer')[0];
let instructions = document.getElementById('instructions-container');
let choice_container = document.getElementById('choice-container');
let tf_container = document.getElementById('tf-container');
let identification_container = document.getElementById('identification-container');
let results_container = document.getElementById('results-container');
let questionNumber = document.getElementById('questionNumber');
let question = document.getElementById('question');
let choices = document.getElementById('choices');
let c1button = document.getElementById('c1');
let c2button = document.getElementById('c2');
let c3button = document.getElementById('c3');
let c4button = document.getElementById('c4');
let inputID = document.getElementById("input").value; // Get the current value of the input field and convert it to lowercase
let title = document.getElementById('quiz-title');
let input = document.getElementById("input");
let instruction = document.getElementById('instructions');
console.log(questionNumber);
//Next and Start buttons
let start_button = document.getElementById('start');
let choice_next= document.getElementById('choice-next');
let next_counter;
// Variable to keep track of the user's score
let score = 0; 
//Questions
let questions = [ 
//Multiple Choice   
'What does "miracle water" contain?”', 
'What is written on Senku Ishigami\'s shirt?',
//True or False
'Gen Asagiri is a famous scientist',
'Hyoga is "The Strongest High School Primate"',
//Identifiction
'What is the first object Senku refers to when he calls it, “Dr. STONE?”',
];
//Choices
let c1 = [ 
          'Magic minerals',
          '"Science Rules"',
      
        ];
let c2 = [
          'Bacteria and enzymes',
          '"Stone World Savior"',   
        ];
let c3 = [
          'Algae and seaweed',
          '"King of Inventions"',
        ];
let c4 = [
          'Nitric acid',
          '"E=mc^2"',
      
        ];
//Answers 
let answers= [
            //Answers in Multiple Choice
             'Nitric acid',
            '"E=mc^2"',
            "Charcoal, sulfur, and potassium nitrate",
            //Answers in True or False
            'False', 'False',
            //Answers in Identification
            'soap'
          ];
          

// var timerId = setInterval(countdown, 1000);
//Choices Button
let choiceOne = document.getElementById('c1');
let choiceTwo = document.getElementById('c2');
let choiceThree = document.getElementById('c3');
let choiceFour = document.getElementById('c4');
let time = document.getElementById('timer');
let timeLeft;
let timerId;

let item = 1;
//Timer Function
function countdown() {
  //Countdown Variable

  if (timeLeft == 0) {
    clearTimeout(timerId);
    identificationAnswer();
    instructions.style.display = 'block';
    choice_container.style.display = 'none';
    title.innerHTML = "Results";
    instruction.innerHTML = score+'/5';
    start_button.innerHTML = 'Retake Quiz';
    tf_container.style.display= 'none';

    console.log('score:' + score);
    time.style.display = 'none';
  } else {
    time.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}

start_button.addEventListener('click', function(){
  startClick();
});

// Function to check the selected answer and update the score
function checkAnswer() {
  const selectedChoice = document.querySelector('input[name="tf"]:checked');
  if (selectedChoice) {
      const selectedAnswer = selectedChoice.value;
      console.log('Selected Answer:', selectedAnswer);
    console.log('Correct Answer:', answers[next_counter - 1]);
      if (selectedAnswer === answers[next_counter - 1]) {
          // Correct answer
          
          score++;
      } else {
          // Incorrect answer
      }
  }
}

function identificationAnswer() {
  inputID = document.getElementById("input").value.toLowerCase(); // Get the current value of the input field and convert it to lowercase
  if (inputID == answers[next_counter].toLowerCase()) {
    score++;
  }
  console.log('Input: ' + inputID);
}




// Function to check the selected answer for multiple-choice questions using buttons
function c1Check(){
  if (item<=2){
    c1button.style.backgroundColor = 'red';
    question.innerHTML = questions[next_counter-1];
    choiceOne.innerHTML = c1[next_counter-1];
    choiceTwo.innerHTML = c2[next_counter-1];
    choiceThree.innerHTML = c3[next_counter-1];
    choiceFour.innerHTML = c4[next_counter-1];
    choice_next.style.display = 'block';
    console.log('next: ' + next_counter);
  }

  else{
    choices.style.display = 'none';
    tf_container.style.display = 'block';
    choice_next.style.display = 'block';

        
  }
  c1button.disabled = true;
  c2button.disabled = true;
  c3button.disabled = true;
  c4button.disabled = true;
  item++;
  console.log(item);
}
function c2Check(){
  if (item<=2){
    c2button.style.backgroundColor = 'red';
    question.innerHTML = questions[next_counter-1];
    choiceOne.innerHTML = c1[next_counter-1];
    choiceTwo.innerHTML = c2[next_counter-1];
    choiceThree.innerHTML = c3[next_counter-1];
    choiceFour.innerHTML = c4[next_counter-1];
    choice_next.style.display = 'block';
    console.log('next: ' + next_counter);
  }
  else{
    choices.style.display = 'none';
    tf_container.style.display = 'block';
    choice_next.style.display = 'block';
  }
  c1button.disabled = true;
  c2button.disabled = true;
  c3button.disabled = true;
  c4button.disabled = true;
  item++;
  console.log(item);
}
function c3Check(){
  if (item<=2){
    c3button.style.backgroundColor = 'red';
    question.innerHTML = questions[next_counter-1];
    choiceOne.innerHTML = c1[next_counter-1];
    choiceTwo.innerHTML = c2[next_counter-1];
    choiceThree.innerHTML = c3[next_counter-1];
    choiceFour.innerHTML = c4[next_counter-1];
    choice_next.style.display = 'block';
    console.log('next: ' + next_counter);
  }
  else{
    choices.style.display = 'none';
    tf_container.style.display = 'block';
    choice_next.style.display = 'block';
  }
  c1button.disabled = true;
  c2button.disabled = true;
  c3button.disabled = true;
  c4button.disabled = true;
  item++;
  console.log(item);
}
function c4Check(){
  if (item<=2){
    c4button.style.backgroundColor = 'green';
    question.innerHTML = questions[next_counter-1];
    choiceOne.innerHTML = c1[next_counter-1];
    choiceTwo.innerHTML = c2[next_counter-1];
    choiceThree.innerHTML = c3[next_counter-1];
    choiceFour.innerHTML = c4[next_counter-1];
    choice_next.style.display = 'block';
    console.log('next: ' + next_counter);
    score++;
  }
  else{
    choices.style.display = 'none';
    tf_container.style.display = 'block';
    choice_next.style.display = 'block';
  }
  c1button.disabled = true;
  c2button.disabled = true;
  c3button.disabled = true;
  c4button.disabled = true;
  item++;
  console.log(item);
}






// Events


function startClick(){
//Clicking Start
  score = 0;
  next_counter=1;
  item=1;
  timer.style.display = 'block';
  choice_container.style.display = 'flex';
  instructions.style.display = 'none';
  //Initial Questions and Answers
  questionNumber.innerHTML = "Multiple Choice";
  choices.style.display = 'block';
  question.innerHTML = questions[next_counter-1];
  choiceOne.innerHTML = c1[next_counter-1];
  choiceTwo.innerHTML = c2[next_counter-1];
  choiceThree.innerHTML = c3[next_counter-1];
  choiceFour.innerHTML = c4[next_counter-1];
  choice_next.innerHTML = 'Next';
  console.log('score:' + score);
  console.log('next:' + next_counter);
  choice_next.style.display = 'none';
  start_button.innerHTML = 'Start';
  c1button.style.backgroundColor = 'white';
  c2button.style.backgroundColor = 'white';
  c3button.style.backgroundColor = 'white';
  c4button.style.backgroundColor = 'white';
  c1button.disabled = false;
    c2button.disabled = false;
    c3button.disabled = false;
    c4button.disabled = false;
    time.style.display = 'block';
    input.style.display= 'none';
     // Clear the existing timer if it exists
  if (timerId) {
    clearInterval(timerId);
  }
  next_counter= 1;
  timeLeft = 60;
  timerId = setInterval(countdown, 1000);
}




//Clicking Next

function nextClick() {
  if (next_counter <=1) {
    input.style.display= 'none';
    questionNumber.innerHTML = "Multiple Choice";
    choices.style.display = 'block';
    question.innerHTML = questions[next_counter];
    choiceOne.innerHTML = c1[next_counter];
    choiceTwo.innerHTML = c2[next_counter];
    choiceThree.innerHTML = c3[next_counter];
    choiceFour.innerHTML = c4[next_counter];
    c1button.style.backgroundColor = 'white';
    c2button.style.backgroundColor = 'white';
    c3button.style.backgroundColor = 'white';
    c4button.style.backgroundColor = 'white';
    next_counter++ ;
    choice_next.style.display = 'none';
    c1button.disabled = false;
    c2button.disabled = false;
    c3button.disabled = false;
    c4button.disabled = false;
    console.log('score:' + score);



   

  } else if (next_counter < 4) {
    questionNumber.innerHTML = "True Or False";
    question.innerHTML = questions[next_counter];
    choices.style.display = 'none';
    tf_container.style.display = 'block';
    choice_next.style.display = 'block';
    next_counter++ ;
    checkAnswer();
    console.log('score:' + score);
    const radioButtons = document.querySelectorAll('input[name="tf"]');
    radioButtons.forEach((radioButton) => {
    radioButton.checked = false;
});
}

else if (next_counter <5) {
    if (next_counter==4){
      checkAnswer();
      const radioButtons = document.querySelectorAll('input[name="tf"]');
      radioButtons.forEach((radioButton) => {
      radioButton.checked = false;
    })
  }

    questionNumber.innerHTML = "Identification";
    question.innerHTML = questions[next_counter];
    tf_container.style.display = 'none';
    identification_container.style.display = 'block';
    input.style.display = 'block';
    next_counter++ ;
    console.log('score:' + score);
    


  }

  else if (next_counter ==5) {
    identificationAnswer();
    instructions.style.display = 'block';
    choice_container.style.display = 'none';
    title.innerHTML = "Results";
    instruction.innerHTML = score+'/5';
    start_button.innerHTML = 'Retake Quiz';
    console.log('score:' + score);
    time.style.display = 'none';
    next_counter=1;
   
   
  
  


  }

  else{
    choice_container.style.display = 'none';
    instructions.style.display = 'block';
    next_counter=1;
    

  }
    
    
  console.log('Next Counter: ' + next_counter);
};




