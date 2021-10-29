"use strict";
// let tipSelect = document.querySelectorAll(".tip-select").textContent;
// let bill, customTip, person;
// let person = document.getElementById("getPerson").value;
// getTipValue = Number(document.querySelector("#customTip").value);
// console.log(person);
let bill;
let getTipValue;
let person;
let total;
let total_2;
let tipValue;
let split;
let tipPerPerson = (document.querySelector("#total-tip").textContent = 0);
let totalperPerson = (document.querySelector("#total-amount").textContent = 0);

// Fetch bill input
let perform = () => {
  addEventListener("input", function () {
    bill = Number(document.querySelector("#getBill").value);
    if (bill === 0) {
      alert(`Please enter bill`);
      person = document.getElementById("getPerson").value = null;
      getTipValue = document.querySelector("#customTip").value = null;
    }
    // console.log(bill);
    return bill;
  });
};
perform();

//Tip selection from button
let press = (tipPercent) => {
  getTipValue = document.querySelector("#customTip").value = null;
  person = document.getElementById("getPerson").value = null;
  total = (bill * tipPercent) / 100;
  // console.log(total);
  return total;
};
press();
// Tip selection from user input
let custTip = () => {
  addEventListener("input", function () {
    getTipValue = Number(document.querySelector("#customTip").value);
    total_2 = (bill * getTipValue) / 100;
    // console.log(total);
    return total_2;
  });
};
custTip();

//Divide Tip for each person
let people = () => {
  addEventListener("input", function () {
    person = Number(document.getElementById("getPerson").value);

    let final = total / person || total_2 / person;
    tipValue = final.toFixed(2);
    if (person >= 1) {
      tipPerPerson = document.querySelector(
        "#total-tip"
      ).textContent = `$${tipValue}`;
      // console.log(`Tip per person is ${tipValue}`);
    }
    return tipValue;
  });
};
people();

let finalValue = () => {
  addEventListener("input", function () {
    split = Number(bill) / Number(person) + Number(tipValue);

    if (split >= 1 && person >= 1) {
      totalperPerson = document.querySelector(
        "#total-amount"
      ).textContent = `$${Math.trunc(split)}`;
    }

    return split;
  });
};
finalValue();
