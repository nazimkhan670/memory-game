const cards = document.querySelectorAll(".memory-card");


let hasFlipCard = false;
let lockBoard = false;
let cardOne, cardTwo;

function flipCard(){
    if(lockBoard) return;
    this.classList.add('flip');
//    clickedCard = this.classList.add('flip');
    if(!hasFlipCard){
        hasFlipCard = true;
        cardOne = this;

        return;
    }

    hasFlipCard = false;
    cardTwo = this;

    checkForMatch();
    }
    function checkForMatch() {
        let isMatch = cardOne.dataset.framework === cardTwo.dataset.framework;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards (){
        cardOne.removeEventListener('click', flipCard);
        cardTwo.removeEventListener('click', flipCard);
    }
    function unflipCards(){
        lockBoard = true;
        setTimeout(() => {
            cardOne.classList.add('shake');
            cardTwo.classList.add('shake');
        }, 400);

        setTimeout(() => {
            cardOne.classList.remove('flip');
            cardTwo.classList.remove('flip');
        lockBoard = false;
        }, 1000);
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    })
}) ();
cards.forEach(card => card.addEventListener('click', flipCard));