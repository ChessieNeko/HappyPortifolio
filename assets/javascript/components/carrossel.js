const btnRight = document.querySelector('.btn-arrow.-right');
const btnLeft = document.querySelector('.btn-arrow.-left');
const elementsCarrossel = document.querySelector('.aux-carrossel-anima');

let pixels = 100;

btnRight.addEventListener('click', function(){
    pixels += 100;
    elementsCarrossel.style = `transform: translateX(${pixels}px);`
    
    console.log("Ta mexendo???");
});

btnLeft.addEventListener('click', function(){
    pixels -= 100;
    elementsCarrossel.style = `transform: translateX(${pixels}px);`
});