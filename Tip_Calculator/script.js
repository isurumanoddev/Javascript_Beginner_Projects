const billTotal = document.getElementById("billTotalInput")
const tipAmount = document.getElementById("TipInput")
const perPersonTotal = document.getElementById("perPersonTotal")
const peoples = document.getElementById("numberOfPeople")


let peopleAmount = 1

const calculateBill = () => {
    const totalValue = Number(billTotal.value);
    const tipPercent = Number(tipAmount.value)/100;
    const totalTip =  totalValue * tipPercent
    const totalBill = totalTip + totalValue
    const  personTotal = totalBill / peopleAmount

    console.log("personTotal : ",personTotal)
    perPersonTotal.innerText = `$ ${personTotal.toFixed(2)}`

};

const increasePeople = () => {
    peopleAmount += 1
    peoples.innerText = peopleAmount
    calculateBill()

};

const decreasePeople = () => {

    if (peopleAmount > 1) {
        peopleAmount -= 1
    }
    peoples.innerText = peopleAmount;
    calculateBill()

};