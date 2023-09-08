const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const validateDate = document.querySelector(".validate-date .date");

const listOfCards = document.querySelectorAll('.card');
const cardNumber = document.querySelectorAll('.card-number span');

var active = 0;

showCardSide();
setValues();



function setValues(){
    cardNumber.forEach((element)=>{
        element.textContent = "0000";
    })
    validateDate.textContent = "01/2023";
}

function showCardSide(){
    listOfCards.forEach((element)=>{
        element.classList.remove('active')
    });
    listOfCards[active].classList.add('active');
}

prev.addEventListener('click', e=>{
   active = parseInt(prev.getAttribute('data-index'))
    showCardSide();
})

next.addEventListener('click', e=>{
    active = parseInt(next.getAttribute('data-index'))
    showCardSide();
})