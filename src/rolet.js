const target = document.getElementById('container')
rotate = 0;
const arrowelem = document.getElementById('arrowElem');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modalMessage');
const modalPic = document.getElementById('modalPic');
let color = "";
let srcForModalPic = '';


if (arrowelem) {
    arrowelem.addEventListener('click', () => {
        let cord = arrowelem.getBoundingClientRect()
        console.log(cord);
    })
}

if (target) {
    target.addEventListener('click', makeanime);
}

function role() {
    makeanime(openModal);
}



function makeanime() {
    rotate += Math.round(Math.random() * 560);
    rotate += 720
    if (rotate + 1280 >= Number.MAX_VALUE)
        rotate = 0;

    anime({
        targets: '.conteiner1',
        rotateZ: rotate,
        duration: 2500,
        easing: 'easeOutQuart',
        complete: endAnimation,
    });
}

function choiseColor() {
    console.log(rotate % 360);
    let degri = rotate % 360;
    if (degri > 0 && degri < 110) {
        color = '1';
        srcForModalPic = "./src/run.png";
        console.log("yellow " + color)
    }
    if (degri > 110 && degri < 180) {
        color = '4';
        srcForModalPic="./src/gatking.png";
        console.log("red " + color)
    }
    if (degri > 180 && degri < 250) {
        color = '3'
       srcForModalPic ="./src/axe.png";
        console.log("blue " + color)
    }
    if (degri > 250 && degri < 359) {
        color = '2';
       srcForModalPic ="./src/skull.png";
        console.log("green " + color)
    }
}

function endAnimation() {
    choiseColor();
    openModal();
}

function closeModal() {

    modal.style.display = 'none';
}

function openModal() {
    modalMessage.textContent = color;
    modalPic.src=srcForModalPic;
    modal.style.display = 'flex';
}