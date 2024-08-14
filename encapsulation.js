class BankAccount {
    #balance;
    constructor(accountnumber, balance = 0) {
        this.accountnumber = accountnumber;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount>0) {
            console.log('Previous Balance: ' + this.#balance);
            this.#balance = this.#balance + amount;
            console.log('Deposited: ' + amount + ' | New Balance: ' + this.#balance + '\n');
        }
    }

    widthraw(amount) {
        if (amount>0 && amount<=this.#balance) {
            console.log('Previous Balance: ' + this.#balance);
            this.#balance = this.#balance - amount;
            console.log('Widthraw: ' + amount + ' | New Balance: ' + this.#balance + '\n');
        }
        else {
            console.log("Insufficient Balance!");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount('2922', 4000);
myAccount.deposit(550);
myAccount.widthraw(200);
console.log('Final Balance: ' + myAccount.getBalance());