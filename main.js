"use strict";

//Declare variables
let bill, getTipValue, person, total, total_2, tipValue, split;
let peopleContainer = document.querySelector(".total-people");
let tipPerPerson = (document.querySelector("#total-tip").textContent = 0);
let totalperPerson = (document.querySelector("#total-amount").textContent = 0);

//Select tip/taken input from button press - Part-1
let press = (tipPercent) => {
  getTipValue = document.querySelector("#customTip").value = null;
  person = document.getElementById("getPerson").value = null;
  total = (bill * tipPercent) / 100;
  return total;
};
press();

// Intiate
let perform = () => {
  addEventListener("input", function () {
    bill = Number(document.querySelector("#getBill").value);

    // Calculate bill only if amount is entered
    if (bill >= 0) {
      document.querySelector(".invalid-entry_2").textContent = null;
      document.querySelector(".Reset-btn").classList.remove("disable-btn");
    }
    if (bill === 0) {
      document.querySelector(".invalid-entry_2").textContent = `Enter bill`;
      person = document.getElementById("getPerson").value = null;
      getTipValue = document.querySelector("#customTip").value = null;
    }

    // Computing tip based on user input Part-2
    getTipValue = Number(document.querySelector("#customTip").value);

    total_2 = (bill * getTipValue) / 100;
    person = Number(document.getElementById("getPerson").value);

    // Validate
    if (person >= 0) {
      document.querySelector(".invalid-entry").textContent = null;
      peopleContainer.classList.remove("invalid-Person");
    }
    if (person <= 0) {
      peopleContainer.classList.add("invalid-Person");
      document.querySelector(".invalid-entry").textContent = `Can't be zero`;
    }

    // Computing tip amount per person
    let final = total / person || total_2 / person;
    tipValue = final.toFixed(2);

    if (person >= 1) {
      tipPerPerson = document.querySelector(
        "#total-tip"
      ).textContent = `₹${tipValue}`;

      //  Computing total amount payable per person including tip
      split = Number(bill) / Number(person) + Number(tipValue);
      if (split >= 1 && person >= 1) {
        totalperPerson = document.querySelector(
          "#total-amount"
        ).textContent = `₹${Math.trunc(split)}`;
      }

      return split;
    }
  });

  //   Reset
  document.querySelector(".Reset-btn").addEventListener("click", function () {
    bill = document.querySelector("#getBill").value = null;
    person = document.getElementById("getPerson").value = null;
    tipPerPerson = document.querySelector("#total-tip").textContent = 0;
    getTipValue = document.querySelector("#customTip").value = null;
    document.querySelector("#total-amount").textContent = 0;
    document.querySelector(".invalid-entry").textContent = null;
    peopleContainer.classList.remove("invalid-Person");
    document.querySelector(".Reset-btn").classList.add("disable-btn");
  });
};
perform();
