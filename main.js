const button = document.querySelector(".button");
const form = document.querySelector(".form");
const successDiv = document.querySelector(".success-state");

//for displaying the errors classes
const errorNumber = document.querySelector(".number-error");
const cardNumberInput = document.querySelector(".cardnumber-input");

const errorName = document.querySelector(".name-error");
const nameInput = document.querySelector(".name-input");

const errorCvc = document.querySelector(".cvc-error");
const cvcInput = document.querySelector(".cvc-input");

const errorDate = document.querySelector(".date-error");
const month = document.querySelector(".month-input");
const year = document.querySelector(".year-input");

//for empty inputs
const requiredError = document.querySelector(".required-error");

//regular expressions check
var cardNumberReg = /^([0-9]{16})?$/;
var cvcReg = /^([0-9]{3})?$/;
var nameReg = /^([a-zA-z ])+$/;
var monthReg = /^(1[0-2]{1})|(0[1-9]{1})$/;
var yearReg = /^(202[2-9]{1})|(203[0-9]{1})$/;

const cardHolderName = document.querySelector(".cardholder-change");
cardHolderName.trim;
nameInput.addEventListener("change", (e) => {
  const name = e.target.value;
  cardHolderName.textContent = `${name}`;
});

const cardHolderNumber = document.querySelector(".cardnumber-change");
cardNumberInput.addEventListener("change", (e) => {
  let number = e.target.value;
  number =
    number.substr(0, 4) +
    " " +
    number.substr(4, 4) +
    " " +
    number.substr(8, 4) +
    " " +
    number.substr(12, 4);

  cardHolderNumber.textContent = `${number}`;
});

const cardHolderDate = document.querySelector(".carddate-change");
month.addEventListener("change", (e) => {
  const month = e.target.value;
  let yearChange;
  year.addEventListener("change", (e) => {
    yearChange = e.target.value;
    cardHolderDate.textContent = `${month}` + "/" + `${yearChange}`;
  });
});

const cardHolderCvc = document.querySelector(".cardcvc-change");
cvcInput.addEventListener("change", (e) => {
  const cvc = e.target.value;
  cardHolderCvc.textContent = `${cvc}`;
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  var cardHolderName = document.getElementById("cardholdername").value;
  var cardNumber = document.getElementById("cardnumber").value;
  var expirationDateYear = document.getElementById("year").value;
  var expirationDateMonth = document.getElementById("month").value;
  var cvc = document.getElementById("cvc").value;

  if (
    cardNumber !== "" &&
    cardHolderName !== "" &&
    cvc !== "" &&
    expirationDateMonth !== "" &&
    expirationDateYear !== "" &&
    cardNumber.match(cardNumberReg) &&
    cvc.match(cvcReg) &&
    cardHolderName.match(nameReg) &&
    expirationDateMonth.match(monthReg) &&
    expirationDateYear.match(yearReg)
  ) {
    form.style.display = "none";
    successDiv.style.display = "flex";
  }

  if (
    cardNumber === "" ||
    cardHolderName === "" ||
    cvc === "" ||
    expirationDateMonth === "" ||
    expirationDateYear === ""
  ) {
    requiredError.style.display = "block";
    setTimeout(() => {
      requiredError.style.display = "none";
    }, 3000);
  }

  if (!cardNumber.match(cardNumberReg) && cardNumber !== "") {
    errorNumber.style.display = "block";
    cardNumberInput.style.borderColor = "hsl(0, 100%, 66%)";
    setTimeout(() => {
      errorNumber.style.display = "none";
      cardNumberInput.style.borderColor = "hsl(279, 6%, 55%)";
    }, 3000);
  }
  if (!cvc.match(cvcReg) && cvc !== "") {
    errorCvc.style.display = "block";
    cvcInput.style.borderColor = "hsl(0, 100%, 66%)";
    setTimeout(() => {
      errorCvc.style.display = "none";
      cvcInput.style.borderColor = "hsl(279, 6%, 55%)";
    }, 3000);
  }

  if (!cardHolderName.match(nameReg) && cardHolderName !== "") {
    errorName.style.display = "block";
    nameInput.style.borderColor = "hsl(0, 100%, 66%)";
    setTimeout(() => {
      errorName.style.display = "none";
      nameInput.style.borderColor = "hsl(279, 6%, 55%)";
    }, 3000);
  }

  if (
    (!expirationDateMonth.match(monthReg) && expirationDateMonth !== "") ||
    (!expirationDateYear.match(yearReg) && expirationDateYear !== "")
  ) {
    errorDate.style.display = "block";
    month.style.borderColor = "hsl(0, 100%, 66%)";
    year.style.borderColor = "hsl(0, 100%, 66%)";
    setTimeout(() => {
      errorDate.style.display = "none";
      month.style.borderColor = "hsl(279, 6%, 55%)";
      year.style.borderColor = "hsl(279, 6%, 55%)";
    }, 3000);
  }
});
