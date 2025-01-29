import { IDealable, Suit } from "./types";
import Card from "./card";
import { shuffleArray } from "./utils";

class Deck implements IDealable {
  private deck: Card[] = [];

  constructor() {
    this.reset;
  }

  reset() {
    const cards = this.makeDeck();
    this.deck = shuffleArray(cards);
  }

  private makeDeck() {
    const cards: Card[] = [];
    const suits: Suit[] = [Suit.diamonds, Suit.clubs, Suit.hearts, Suit.spades];

    for (let suit = 0; suit < suits.length; suit++) {
      for (let value = 1; value < 14; value++) {
        const newCard = new Card(value, suits[suit]);
        cards.push(newCard);
      }
    }

    return cards;
  }

  deal(num: number): Card[] {
    const dealtCards: Card[] = [];

    for (let i = 0; i < num; i++) {
      const card = this.deck.pop();
      dealtCards.push(card!);
    }

    return dealtCards;
  }
}

export default Deck;
