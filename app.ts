import Card from "./card";
import Deck from "./deck";
import Player from "./player";
import {
  getBet,
  getDecision,
  getHandValue,
  getPlayerName,
  getStrHand,
} from "./utils";

function playerTurn(playerHand: Card[], deck: Deck): number {
  let handValue = getHandValue(playerHand);

  while (true) {
    const action = getDecision();
    if (action !== "hit") return handValue;

    playerHand.push(deck.deal(1)[0]);
    handValue = getHandValue(playerHand);
    console.log(`Your hand: ${getStrHand(playerHand)} (Total: ${handValue})`);

    if (handValue > 21) {
      return handValue;
    }
  }
}

function dealerTurn(dealerHand: Card[], deck: Deck): number {
  let handValue = getHandValue(dealerHand);

  while (true) {
    console.log(
      `Dealer's hand: ${getStrHand(dealerHand)} (Total: ${handValue})`
    );
    if (handValue >= 17) return handValue;

    dealerHand.push(deck.deal(1)[0]);
    handValue = getHandValue(dealerHand);
  }
}

const deck: Deck = new Deck();
const player: Player = new Player("", 100);
let dealerHand: Card[] = [];
let playerHand: Card[] = [];

getPlayerName(player);

while (player.getBalance() > 0) {
  console.log(`\n${player.getName()} funds $${player.getBalance()}`);
  const bet = getBet(player);

  deck.reset();
  playerHand = deck.deal(2);
  dealerHand = deck.deal(2);

  const playerValue = getHandValue(playerHand);
  const dealerValue = getHandValue(dealerHand);

  console.log(`Your hand: ${getStrHand(playerHand)} (Total: ${playerValue})`);
  console.log(`Dealer's hand: ${getStrHand(dealerHand, true)}`);

  if (playerValue === 21) {
    player.setBalance(player.getBalance() + bet * 2.5);
    console.log(`Blackjack! You won $${bet * 2.5}`);
    continue;
  } else if (dealerValue === 21) {
    console.log(`Dealer's hand: ${getStrHand(dealerHand)}, (Total: 21)`);
    console.log("Dealer has Blackjack, you lost...");
    continue;
  }

  const finalPlayerValue = playerTurn(playerHand, deck);
  if (finalPlayerValue > 21) {
    console.log("You bust and lost...");
    continue;
  }

  const finalDealerValue = dealerTurn(dealerHand, deck);
  if (finalDealerValue > 21) {
    player.setBalance(player.getBalance() + bet * 2);
    console.log(`Dealer bust and you won $${bet * 2}`);
  } else if (finalPlayerValue > finalDealerValue) {
    player.setBalance(player.getBalance() + bet * 2);
    console.log(`You won $${bet * 2}`);
  } else if (finalPlayerValue === finalDealerValue) {
    player.setBalance(player.getBalance() + bet);
    console.log("Push (tie)");
  } else {
    console.log("You lost to the dealer.");
  }
}

console.log("You ran out of money!");
