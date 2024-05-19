const flip_btn = document.getElementById('flip-btn');
const flip = document.getElementById('flip');
const front = document.getElementById('calculator');
const back = document.getElementById('bulbulator');
let cnt = 0;

flip_btn.addEventListener('click', () => {
    if(cnt === 0){
        flip.style.transform = "rotateY(180deg)";
        setTimeout(() =>{
            back.style.display = "grid";
            front.style.display = "none";
        },250);
        cnt = 1;
    }
    else{
        flip.style.transform = "rotateY(0deg)";
        setTimeout(() =>{
            front.style.display = "grid";
            back.style.display = "none";
        },250);
        cnt = 0;
    }
});
