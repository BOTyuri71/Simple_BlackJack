"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const card_1 = __importDefault(require("./card"));
const utils_1 = require("./utils");
class Deck {
    constructor() {
        this.deck = [];
        this.reset;
    }
    reset() {
        const cards = this.makeDeck();
        this.deck = (0, utils_1.shuffleArray)(cards);
    }
    makeDeck() {
        const cards = [];
        const suits = [types_1.Suit.diamonds, types_1.Suit.clubs, types_1.Suit.hearts, types_1.Suit.spades];
        for (let suit = 0; suit < suits.length; suit++) {
            for (let value = 1; value < 14; value++) {
                const newCard = new card_1.default(value, suits[suit]);
                cards.push(newCard);
            }
        }
        return cards;
    }
    deal(num) {
        const dealtCards = [];
        for (let i = 0; i < num; i++) {
            const card = this.deck.pop();
            dealtCards.push(card);
        }
        return dealtCards;
    }
}
exports.default = Deck;
