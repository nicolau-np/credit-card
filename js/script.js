const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const validateDate = document.querySelector(".validate-date .date");

const listOfCards = document.querySelectorAll(".card");
const cardNumber = document.querySelector(".card-number span");

const cardNumberInput = document.querySelector("input[name='card_number']");
const validThruInput = document.querySelector("input[name='valid_thru']");

var active = 0;

showCardSide();
setValues();

validThruInput.addEventListener("keyup", e => {
  if (validThruInput.value.length === 0) {
    valueDefaultValidateDate();
  } else {
    if (validThruInput.value.length <= 7) {
      validateDate.textContent = validThruInput.value;
    }
  }
});

cardNumberInput.addEventListener("keyup", e => {
  if (cardNumberInput.value.length === 0) {
    valueDefaultCardNumber();
  } else {
    if (cardNumberInput.value.length <= 16) {
      formatNumber();
    }
  }
});

function formatNumber() {
  numero = cardNumberInput.value;

  let numeroFormatado = "";
  for (let i = 0; i < numero.length; i++) {
    if (i > 0 && i % 4 === 0) {
      numeroFormatado += "  ";
    }
    numeroFormatado += numero.charAt(i);
  }
  cardNumber.textContent = numeroFormatado;
}

function setValues() {
  valueDefaultCardNumber();
  valueDefaultValidateDate();
}

function valueDefaultValidateDate() {
  validateDate.textContent = "01/2023";
}

function valueDefaultCardNumber() {
  cardNumber.textContent = "0000  0000  0000  0000";
}

function showCardSide() {
  listOfCards.forEach(element => {
    element.classList.remove("active");
  });
  listOfCards[active].classList.add("active");
}

prev.addEventListener("click", e => {
  active = parseInt(prev.getAttribute("data-index"));
  showCardSide();
});

next.addEventListener("click", e => {
  active = parseInt(next.getAttribute("data-index"));
  showCardSide();
});
