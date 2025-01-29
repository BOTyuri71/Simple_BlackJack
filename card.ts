import { Suit, ICard } from "./types";

class Card implements ICard {
  private value: number;
  private suit: Suit;

  constructor(value: number, suit: Suit) {
    this.value = value;
    this.suit = suit;
  }
  static readonly CARD_VALUE: Record<number, string> = {
    1: "A",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "J",
    12: "Q",
    13: "K",
  };

  getValue() {
    return this.value;
  }

  getSuit() {
    return this.suit;
  }

  setValue(value: number) {
    this.value = value;
  }

  setSuit(suit: Suit) {
    this.suit = suit;
  }

  getName() {
    return Card.CARD_VALUE[this.value];
  }
}

export default Card;
