import Deck from './deck.js'

const deck = new Deck()
deck.shuffle()
console.log(deck.cards)

function generate(){
    document.getElementById ('generateCard').innerHTML += 
        `<img src="assets/10C.jpg" class="img-fluid">`
}