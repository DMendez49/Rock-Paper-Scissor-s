
var choices = document.getElementsByClassName("choices");
var scissor = document.getElementById("scissor");
var verdict = document.getElementById("verdict");
var compChoices = ["rock", "paper", "scissor"];
var rock = document.getElementById("rock"); 
var paper = document.getElementById("paper"); 
var display = document.createElement("H1")
var compChoice = Math.random();
var userChoice = "";
var computer;
//TODO
//create a display for the user and comp choices
//do the logic to see who one 
//display the winner 

// if (compChoice < 0.34){
//   compChoice = "rock";
//   var display = document.createElement("H1")
//   display.innerHTML = compChoice
//   document.body.appendChild(display)
// }
// else if(compChoice <= 0.67) {
//    compChoice = "paper";
//    var display = document.createElement("H1")
//    display.innerHTML = compChoice
//   document.body.appendChild(display)
// }
// else{
//   compChoice = "scissor";
//   var display = document.createElement("H1")
//   display.innerHTML = compChoice
//   document.body.appendChild(display)
// }

//   for(var i = 0; i < choices.length; i++){
  //       choices[i].addEventListener("click", function(){
    //           userChoice = this.id;
    //           console.log(userChoice);
    //           console.log(compChoice);
    //       });
    //   };

function compare() {
  // user chooses rock
  if (userChoice ===  randomNum) { 
    show();
  } else if (userChoice === 0 && randomNum === 1) { 
    resultsLoser();
  } else if (userChoice === 0 && randomNum === 2) { 
    resultsWinner();
  }

  // user chooses paper  
  if (userChoice === 1 && randomNum === 0) { 
    resultsWinner();
  }
  else if (userChoice === 1 && randomNum === 2) { 
    resultsLoser();
  }

  // user chooses scissors
  if (userChoice === 2 && randomNum === 0) { 
    resultsLoser();
  } else if (userChoice === 2 && randomNum === 1) { 
    resultsWinner();
  }

  cpuChoice.innerHTML = "Computer chose: " + computer;
}
    
function show(){
  verdict.innerHTML = "TIE!";
}
function resultsWinner(){
  verdict.innerHTML = "WIN!";
}
function resultsLoser(){
  verdict.innerHTML = "LOSER!";
}

rock.addEventListener("click", function(){
  userChoice = 0;
  myChoice.innerHTML = "You chose: Rock";
  checkComputer();
  compare();
});
paper.addEventListener("click", function(){
  userChoice = 1;
  myChoice.innerHTML = "You chose: Paper";
  checkComputer();
  compare();
});
scissor.addEventListener("click", function(){
  userChoice = 2;
  myChoice.innerHTML = "You chose: Scissors";
  checkComputer();
  compare();
});

function checkComputer() {
  randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) { 
    computer = "rock";
  } else if (randomNum === 1) { 
    computer = "paper";
  } else { 
    computer = "Scissors";
  }
  console.log('computer chose: ' + computer);  
}
