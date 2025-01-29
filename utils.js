"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleArray = shuffleArray;
exports.getPlayerName = getPlayerName;
exports.getBet = getBet;
exports.getDecision = getDecision;
exports.getHandValue = getHandValue;
exports.getStrHand = getStrHand;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function getPlayerName(player) {
    while (true) {
        const name = prompt("Choose your player name: ");
        try {
            const toStrName = String(name);
            if (toStrName !== "") {
                player.setName(toStrName);
                return toStrName;
            }
            console.log("Invalid name.");
        }
        catch (_a) {
            console.log("Please enter a valid name.");
        }
    }
}
function getBet(player) {
    while (true) {
        const bet = prompt(`Your bet (Current balance: ${player.getBalance()}): `);
        try {
            const toNumBet = Number(bet);
            if (toNumBet > 0 && toNumBet <= player.getBalance()) {
                player.refreshBalance(toNumBet);
                return toNumBet;
            }
            console.log("Invalid bet.");
        }
        catch (_a) {
            console.log("Please enter a valid bet.");
        }
    }
}
function getDecision() {
    while (true) {
        const decision = prompt("Your action: (hit/stand): ").toLowerCase();
        try {
            if (decision === "stand" || decision === "hit") {
                return decision;
            }
            console.log("Invalid decision.");
        }
        catch (_a) {
            console.log("Please enter a valid decision.");
        }
    }
}
function getHandValue(cards) {
    let value = 0;
    let aces = 0;
    for (const card of cards) {
        if (card.getValue() === 1) {
            aces++;
            continue;
        }
        value += Math.min(card.getValue(), 10);
    }
    if (aces === 0)
        return value;
    if (value >= 11)
        return value + aces;
    return value + 11 + (aces - 1);
}
function getStrHand(hand, hideSecondCard = false) {
    let str = "";
    for (const [idx, card] of hand.entries()) {
        if (idx !== 0)
            str += ", ";
        if (idx === 1 && hideSecondCard) {
            str += "[hidden]";
            break;
        }
        str += `${card.getName()}${card.getSuit()}`;
    }
    return str;
}
