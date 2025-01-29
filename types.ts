import Card from "./card";

export enum Suit {
  hearts = "♥",
  diamonds = "♦",
  spades = "♠",
  clubs = "♣",
}

export interface ICard {
  getName(): string;
}

export interface IDealable {
  reset(): void;
  deal(num: number): Card[];
}
