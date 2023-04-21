const billTotal = document.getElementById("billTotalInput")
const tipAmount = document.getElementById("TipInput")
const PersonTotal = document.getElementById("perPersonTotal")
const peoples = document.getElementById("numberOfPeople")


let peopleAmount = 1

const calculateBill = () => {
    let inputValue = Number(billTotal.value);
    let tipValue = Number(tipAmount.value);
    let total = inputValue * (tipValue/100)


    console.log("total :",total)
};

const increasePeople = () => {
    peopleAmount += 1
    peoples.innerText = peopleAmount

};

const decreasePeople = () => {

    if (peopleAmount > 1) {
        peopleAmount -= 1
    }
    peoples.innerText = peopleAmount;

};