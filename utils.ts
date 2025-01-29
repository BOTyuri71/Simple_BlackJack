import Card from "./card";
import promptSync from "prompt-sync";
import Player from "./player";

const prompt = promptSync();

export function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function getPlayerName(player: Player): string {
  while (true) {
    const name = prompt("Choose your player name: ");
    try {
      const toStrName = String(name);
      if (toStrName !== "") {
        player.setName(toStrName);
        return toStrName;
      }
      console.log("Invalid name.");
    } catch {
      console.log("Please enter a valid name.");
    }
  }
}

export function getBet(player: Player): number {
  while (true) {
    const bet = prompt(`Your bet (Current balance: ${player.getBalance()}): `);
    try {
      const toNumBet = Number(bet);
      if (toNumBet > 0 && toNumBet <= player.getBalance()) {
        player.refreshBalance(toNumBet);
        return toNumBet;
      }
      console.log("Invalid bet.");
    } catch {
      console.log("Please enter a valid bet.");
    }
  }
}

export function getDecision(): "hit" | "stand" {
  while (true) {
    const decision = prompt("Your action: (hit/stand): ").toLowerCase();
    try {
      if (decision === "stand" || decision === "hit") {
        return decision;
      }
      console.log("Invalid decision.");
    } catch {
      console.log("Please enter a valid decision.");
    }
  }
}

export function getHandValue(cards: Card[]): number {
  let value = 0;
  let aces = 0;

  for (const card of cards) {
    if (card.getValue() === 1) {
      aces++;
      continue;
    }

    value += Math.min(card.getValue(), 10);
  }

  if (aces === 0) return value;
  if (value >= 11) return value + aces;
  return value + 11 + (aces - 1);
}

export function getStrHand(
  hand: Card[],
  hideSecondCard: boolean = false
): string {
  let str = "";

  for (const [idx, card] of hand.entries()) {
    if (idx !== 0) str += ", ";
    if (idx === 1 && hideSecondCard) {
      str += "[hidden]";
      break;
    }
    str += `${card.getName()}${card.getSuit()}`;
  }

  return str;
}
