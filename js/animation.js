const button = document.getElementById('flip-btn');
const flip = document.getElementById('flip');
const front = document.getElementById('calculator');
const back = document.getElementById('converter');
let count = 0;

button.addEventListener('click', () => {
    if(count === 0) {
        flip.style.transform = 'rotateY(180deg)';
        setTimeout(() => {
            back.style.display = 'grid';
            front.style.display = 'none';
        }, 250);
        count = 1;
    }
    else {
        flip.style.transform = 'rotateY(0deg)';
        setTimeout(() => {
            front.style.display = 'grid';
            back.style.display = 'none';
        }, 250);
        count = 0;
    }
});