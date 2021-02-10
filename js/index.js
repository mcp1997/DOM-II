// Your code goes here

const mainLogo = document.querySelector('.logo-heading');
const busLogo = document.querySelector('.funBus');
const dropzone1 = document.querySelector('.dropzone');
const dropzone2 = document.querySelector('.dropzone2');
const header2a = document.querySelector('#a');
const header2b = document.querySelector('#b');
const header2c = document.querySelector('#c');
const header2d = document.querySelector('#d');
const busImg = document.querySelector('#busImg');

document.querySelector('a').addEventListener('click', event => {
    event.preventDefault();
});

function busPopup(event){
    busLogo.classList.remove('off');
    dropzone1.classList.remove('off');
    dropzone2.classList.remove('off');
}
mainLogo.addEventListener('click', busPopup);

let dragged;

document.addEventListener('drag', (event) => {

});

document.addEventListener('dragstart', (event) => {
    dragged = event.target;
    event.target.style.opacity = .5;
});

document.addEventListener('dragend', (event) => {
    event.target.style.opacity = '';
});

document.addEventListener('dragover', (event) => {
    event.preventDefault();
});

document.addEventListener('dragenter', (event) => {
    if(event.target.className == 'dropzone' || event.target.className == 'dropzone2'){
        event.target.style.opacity = 1;
    }
});

document.addEventListener('dragleave', (event) => {
    if(event.target.className == 'dropzone' || event.target.className == 'dropzone2'){
        event.target.style.opacity = '';
    }
});

document.addEventListener('drop', (event) => {
    event.preventDefault();
    if(event.target.className == 'dropzone' || event.target.className == 'dropzone2'){
        event.target.style.opacity = '';
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
        busLogo.classList.add('off');
        dropzone1.classList.add('off');
        dropzone2.classList.add('off');
        event.stopPropagation();
    }
});

function playHonk(event){
    const honk = document.querySelector('#honk');
    honk.play();
    honk.loop = false;
}

busImg.addEventListener('dblclick', playHonk);

function colorChange(event){
    event.target.style.color = 'red';
}
function revertColor(event){
    event.target.style.color = '';
}

header2a.addEventListener('mouseover', colorChange);
header2a.addEventListener('mouseout', revertColor);
header2b.addEventListener('mouseover', colorChange);
header2b.addEventListener('mouseout', revertColor);
header2c.addEventListener('mouseover', colorChange);
header2c.addEventListener('mouseout', revertColor);
header2d.addEventListener('mouseover', colorChange);
header2d.addEventListener('mouseout', revertColor);