const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const listOfCards = document.querySelectorAll('.card');

var active = 0;

showCardSide();

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