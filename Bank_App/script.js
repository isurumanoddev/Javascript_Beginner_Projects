const withdrawButton = document.getElementById("withdraw");
const input = document.getElementById("inputAmount");
const label = document.getElementById("inputLabel");
const enter = document.getElementById("EnterButton");
const header = document.getElementById("card-header");
const balance = document.getElementById("balance");


class Bank {
    constructor(currentBalance) {
        this.currentBalance = currentBalance;

    }

    balance() {
        return this.currentBalance
    }

    withdraw(amount) {
        amount = Number(amount)
        if (this.currentBalance < 0) {
            return
        }
        if (amount >= this.currentBalance) {
            alert("You cant enough balance in the account to withdraw");
        } else {
            this.currentBalance -= amount;
            console.log(`You withdraw : ${amount} , Your balance new: ${this.currentBalance}`);
        }


    }

    deposit(amount) {
        amount = Number(amount)
        this.currentBalance += amount
        console.log(`You Deposit : ${amount} , Your balance new: ${this.currentBalance}`)
    }

}

const isuru = new Bank(1000);


const buttons = document.querySelectorAll(".btn-warning");
buttons.forEach(button => {
    button.onclick = () => {
        console.log(button.value)
        let option = button.value;
        if (option === "withdraw") {
            input.style.display = "block"
            enter.style.display = "block"
            enter.onclick = () => {
                isuru.withdraw((input.value));
                header.style.display = "block";
                balance.innerText = `Your Account Balance : ${isuru.balance()}`;
            }

            label.innerText = "Enter Withdraw Amount"
        } else if (option === "balance") {

            header.style.display = "block";
            balance.innerText = `Your Account Balance : ${isuru.balance()}`;

        } else {

            input.style.display = "block";
            enter.style.display = "block"
            enter.style.margin = "auto"
            label.innerText = "Enter Deposit Amount";
            enter.onclick = () => {
                isuru.deposit(input.value)
                header.style.display = "block";
                balance.innerText = `Your Account Balance : ${isuru.balance()}`;
            }
        }


    }
})

