
let player1RoundScore = 0;
let player2RoundScore = 0;
let player1GlobalScore = 0;
let player2GlobalScore = 0;
let currentPlayer = 1;
let images = ["", "images/dice-1-red-no-border.svg",
"images/dice-2-red-no-border.svg",
"images/dice-3-red-no-border.svg",
"images/dice-4-red-no-border.svg",
"images/dice-5-red-no-border.svg",
"images/dice-6-red-no-border.svg"];

//to store

const dieBox = document.getElementById("dieBox")
const player1Display = document.getElementById("player1Display")
const player2Display = document.getElementById("player2Display")
const player1RoundScoreboard = document.getElementById("player1RoundScoreboard")
const player2RoundScoreboard = document.getElementById("player2RoundScoreboard")
const player1GlobalScoreboard = document.getElementById("player1GlobaScoreboard")
const player2GlobalScoreboard = document.getElementById("player2GlobaScoreboard")
const rollButton = document.getElementById("rollbutton") 
const holdButton = document.getElementById("holdbutton") 
const newGameButton = document.getElementById("newgamebutton") 
const dot1 = document.getElementById("dot-1")
const dot2 = document.getElementById("dot-2")





function showDisplayPlayer(){
  if(currentPlayer == 1){
    player2Display.classList.add("active");
    dot2.classList.add("dot");
    player1Display.classList.remove("active");
    dot1.classList.remove("dot");
  }else{
    player2Display.classList.remove("active");
    dot2.classList.remove("dot");
    player1Display.classList.add("active");
    dot1.classList.add("dot");

}
}



function endTurn () {
  if(currentPlayer == 1){
    player1GlobalScore += player1RoundScore;
    player1GlobalScoreboard.textContent = player1GlobalScore;
    player1RoundScore = 0;
    currentPlayer = 2;
  }else {
    player2GlobalScore += player2RoundScore;
    player2GlobalScoreboard.textContent = player2GlobalScore;
    player2RoundScore = 0;
    currentPlayer = 1;
}
}


function newGame(){
  let player1RoundScore = 0;
  let player2RoundScore = 0;
  let player1GlobalScore = 0;
  let player2GlobalScore = 0;
  let currentPlayer = true;
  player1GlobalScoreboard.textContent = 0;
  player2GlobalScoreboard.textContent = 0;
  player1RoundScoreboard.textContent = 0;
  player2RoundScoreboard.textContent = 0;
  rollButton.disabled = false;
  holdButton.disabled = false;
  currentPlayer = 1;
  console.clear()
}


rollButton.addEventListener("click", function(){
  let randomNumber = Math.floor(Math.random()*6) + 1
  const dieShake = dieBox.classList.add("shake");
  setTimeout(function(){
        dieBox.classList.remove("shake");      
  },
  800);
  document.querySelector("#die").setAttribute("src", images[randomNumber]);
  console.log(randomNumber);
  
  if(currentPlayer == 1){
    if(randomNumber == 1){
      player1RoundScore = 0;
      player1RoundScoreboard.textContent = player1RoundScore;
      endTurn();
      showDisplayPlayer();
    }else{
    player1RoundScore += randomNumber;
    player1RoundScoreboard.textContent = player1RoundScore;
  };
  }else{
    if(randomNumber == 1){
      player2RoundScore = 0;
      player2RoundScoreboard.textContent = player2RoundScore;
      endTurn();
      showDisplayPlayer();
    }else{
    player2RoundScore += randomNumber;
    player2RoundScoreboard.textContent = player2RoundScore;
    }
  };
console.log("currentPlayer" + currentPlayer);
});

holdButton.addEventListener("click",function(){
  if(currentPlayer == 1){
    player1GlobalScore = player1GlobalScore +player1RoundScore;
    player1RoundScore = 0;
    player1RoundScoreboard.textContent = player1RoundScore;
    console.log(player1GlobalScore);
    player1GlobalScoreboard.textContent = player1GlobalScore;
    if(player1GlobalScore > 100){
      winner.textContent = "Player 1 Win !"
      rollButton.disabled = true;
      holdButton.disabled = true;
    };
  }else{
    player2GlobalScore = player2GlobalScore +player2RoundScore;
    player2RoundScore = 0;
    player2RoundScoreboard.textContent = player2RoundScore;
    console.log(player2GlobalScore);
    player2GlobalScoreboard.textContent = player2GlobalScore;
    currentPlayer = 2;
    if(player2GlobalScore > 100){
      winner.textContent = "Player 2 Win !";
      rollButton.disabled = true;
      holdButton.disabled = true;
    };
  };
  if(currentPlayer == 1){
    currentPlayer = 2;
  }else{
    currentPlayer =1;
  };
  showDisplayPlayer();
});

newGameButton.addEventListener("click",function(){
  newGame();
});
