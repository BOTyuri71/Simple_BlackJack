class Player {
  private name: string;
  private balance: number = 100;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }

  getName() {
    return this.name;
  }

  getBalance() {
    return this.balance;
  }

  setName(name: string) {
    this.name = name;
  }

  setBalance(balance: number) {
    this.balance = balance;
  }

  refreshBalance(num: number) {
    this.balance = this.getBalance() - num;
  }
}

export default Player;
