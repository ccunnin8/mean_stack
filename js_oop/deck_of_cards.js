class Card {
  constructor(name,suite){
    this.name = name;
    this.suite = suite;
  }

  get value(){
    if (typeof(this.name) == "number") {
      return this.name;
    }
    else {
      if (this.name === "A"){
        return [1,11]
      }
      else {
        return 10;
      }
    }
  }
}
class Deck {
  constructor(){
    this.cards = {
      "hearts": this.gen_suite("hearts"),
      "diamonds": this.gen_suite("diamonds"),
      "clubs": this.gen_suite("clubs"),
      "spades": this.gen_suite("spades")
    }
    this.deck = this.shuffle();
  }

  gen_suite(suite){
    let cards = []
    for (let i = 2; i <= 10; i++){
      cards.push(new Card(i,suite));
    }
    cards.push(new Card("A",suite));
    cards.push(new Card("J",suite));
    cards.push(new Card("K",suite));
    cards.push(new Card("Q",suite));
    return cards;
  }

  shuffle(){
    let cards = [];
    let hearts = this.cards.hearts;
    let diamonds = this.cards.diamonds.reverse();
    let clubs = this.cards.clubs;
    let spades = this.cards.spades.reverse();
    for (let i = 0; i < 13; i++){
      cards.push(hearts[i]);
      cards.push(diamonds[i]);
      cards.push(clubs[i]);
      cards.push(spades[i]);
    };
    return cards;
  }

  reset(){
    this.deck = this.shuffle();
  }

  deal(){
    var card = this.deck.shift();
    return card;
  }
}

class Player {
  constructor(name,hand_size) {
    this.name = name;
    this.hand_size = hand_size;
    this.hand = [];
  }

  drawCard(deck){
    this.hand.push(deck.deal());
  }
}
const deck = new Deck()
console.log(deck.deal());
console.log(deck.deck.length);
const p1 = new Player("Corey",5);
p1.drawCard(deck);
console.log(p1.hand)
