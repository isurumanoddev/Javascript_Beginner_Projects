class Bank {
    constructor(currentBalance) {
        this.currentBalance = currentBalance;

    }

    balance() {
        console.log(`Your balance : ${this.currentBalance}`);
    }

    withdraw(amount) {

        if (this.currentBalance < 0) {
            return
        }
        if (amount >= this.currentBalance) {
            console.log("You cant enough balance in the account to withdraw");
        } else {
            this.currentBalance -= amount;
            console.log(`You withdraw : ${amount} , Your balance new: ${this.currentBalance}`);
        }


    }

    deposit(amount) {
        this.currentBalance += amount
        console.log(`You Deposit : ${amount} , Your balance new: ${this.currentBalance}`)
    }

}

