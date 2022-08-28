
let player = {
  name:"Adam",
  chips: 100
}
let cards = []
let hasBlackJack = false
let isAlive = false
let sum = 0
let massage = ""
let messageEl = document.getElementById("mess")
let sumel = document.getElementById("sum-el")
let cadsEl = document.getElementById("cards-El")
let playerEl = document.getElementById("player-El")




playerEl.textContent = player.name + ": "+ player.chips + " €"

function getRandomCard(){
  let randomCard = Math.floor(Math.random() *13) + 1
  if (randomCard > 10){
      return 10
  }
  else if (randomCard===1){
      return 11
  }
  else{
      return randomCard
  }
}


function startGame(){
  isAlive =  true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}


function renderGame() {
    if(sum <= 20){
    massage = "another?"
    }
    else if(sum === 21){
      massage = "BlackJack"
      hasBlackJack = true
    }
    else{
      massage = "lost"
      isAlive = false
    }
    messageEl.textContent = massage
    sumel.textContent = "Sum:" +" "+ sum
    cadsEl.textContent = "Cards: "
    
    for(let i=0; i<cards.length; i+=1){
      cadsEl.textContent += cards[i] +" "
    }
}


function newCard( ){
  if(isAlive===true && hasBlackJack===false){
  let card = getRandomCard()
  sum += card
  cards.push(card)
  renderGame()}
}



