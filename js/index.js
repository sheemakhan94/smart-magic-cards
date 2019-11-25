
let suits = ['hearts', 'spades', 'diamonds', 'clubs']
let values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']

function createCards() {
  const cards = [];
  // Create an array with objects containing the value and the suit of each card
  for (let x = 0; x < suits.length; x++)
    for (let i = 0; i < values.length; i++) {
      const cardObject = {
        value: values[i],
        suit: suits[x],
      };
      cards.push(cardObject);
    }


  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 32;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });

  shuffleBtn.addEventListener('click', (z) => {
// switching the positions of the cards at two random indexes in the array 500 times
  for (let z = 0; z < 500; z++) {

    const spaceOne = Math.floor(Math.random() * cards.length)
    const spaceTwo = Math.floor(Math.random() * cards.length)
    const shuffle = cards[spaceOne]

    cards[spaceOne] = cards[spaceTwo]
    cards[spaceTwo] = shuffle
    }

    cards.forEach((card, i) => {
      const positionFromLeft = i * 32;
      const cardElement = document.createElement('div');
      cardElement.setAttribute('data-value', card.value);
      cardElement.classList.add('card', `${card.suit}-${card.value}`);
      cardElement.style.left = `${positionFromLeft}px`;
      cardsWrapper.append(cardElement);
    })

  })

  magicBtn.addEventListener('click', () => {
    cards.sort((a, b) => (a.suit < b.suit) ? 1 : (a.suit === b.suit) ? ((a.value < b.value) ? 1 : -1) : -1 )

    cards.forEach((card, i) => {
      const positionFromLeft = i * 32;
      const cardElement = document.createElement('div');
      cardElement.setAttribute('data-value', card.value);
      cardElement.classList.add('card', `${card.suit}-${card.value}`);
      cardElement.style.left = `${positionFromLeft}px`;
      cardsWrapper.append(cardElement);
    })
    console.log(cards)
  })
}


// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  // Your Code
const startBtn = document.querySelector('#start-game')

  startBtn.parentNode.removeChild(startBtn)
  shuffleBtn.style.display = 'inherit'
  flipBtn.style.display = 'inherit'
  magicBtn.style.display = 'inherit'

}


// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();

}



document.getElementById('start-game').addEventListener('click', startGame)

const cardsWrapper = document.querySelector('.cards-wrapper');
const shuffleBtn = document.querySelector('#shuffle-button')
const flipBtn = document.querySelector('#flip-button')
const magicBtn = document.querySelector('#magic-button')
const cardDeck = document.querySelector('.cards-wrapper')


flipBtn.addEventListener('click', () => {
  cardDeck.classList.toggle('hidden')
})
