let counter = 0;
let counterEl= document.querySelector('span.counter');
let incBtn = document.querySelector('button.increment');
let decBtn = document.querySelector('button.decrement');
let randBtn = document.querySelector('.random');
let error = document.querySelector('.error');


displayCounter();

incBtn.addEventListener('click', () => {
    counter++;
    displayCounter();
    if (counter>=0){
        error.style.display = "none";
       }


} );

decBtn.addEventListener('click', () => {
    counter--;
    displayCounter();

    if (counter<0){
    error.style.display = "block";
   }
} );


randBtn.addEventListener('click', () =>{
    let randomNumber = Math.round(Math.random() *10);
    counterEl.innerText = randomNumber;
    counter = randomNumber;
    displayCounter();
    error.style.display = "none";
})

function displayCounter(){
    counterEl.innerText = counter;
}