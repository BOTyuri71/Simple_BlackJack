"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(name, balance) {
        this.balance = 100;
        this.name = name;
        this.balance = balance;
    }
    getName() {
        return this.name;
    }
    getBalance() {
        return this.balance;
    }
    setName(name) {
        this.name = name;
    }
    setBalance(balance) {
        this.balance = balance;
    }
    refreshBalance(num) {
        this.balance = this.getBalance() - num;
    }
}
exports.default = Player;
