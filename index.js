'use strict';

/** Спрятать при клике */
let task1Btn = document.querySelector('#task1Btn');
task1Btn.addEventListener('click', function () {
    document.querySelector('#task1text').classList.add('disabled');
});

/** Спрятаться */
let task2Btn = document.querySelector('#task2Btn');
task2Btn.addEventListener('click', function () {
    this.classList.add('disabled');
});

/** Раскрывающееся меню */
let task4ToggleBtn = document.querySelectorAll('.task4togglebtn');
for (let i = 0; i < task4ToggleBtn.length; i++) {
    task4ToggleBtn[i].addEventListener('click', function () {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('active');
    });
}

/** Спрятать сообщение */
let allPaneBlocks = document.querySelectorAll('.pane');
for (let i = 0; i < allPaneBlocks.length; i++) {
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-button');
    removeBtn.textContent = '[X]';
    allPaneBlocks[i].appendChild(removeBtn);
}

let allRemoveButton = document.querySelectorAll('.remove-button');
for (let i = 0; i < allRemoveButton.length; i++) {
    allRemoveButton[i].addEventListener('click', function () {
        this.parentNode.classList.add('disabled');
    });
}

/** Карусель */
let carouseBlock = document.querySelector('.carousel'),
    carouselUl = document.querySelector('.carousel-ul'),
    carouselLi = carouselUl.querySelectorAll('.carousel-ul li'),
    carouselLiWidth = carouselLi[0].offsetWidth;
carouselUl.style.width = carouselLiWidth * carouselLi.length + 'px';
carouseBlock.style.width = carouselLiWidth * 3 + 'px';
let margin = 0;
document.querySelector('.next').addEventListener('click', function () {
    if (margin == -(carouselLiWidth * carouselLi.length - carouselLiWidth * 3)) {
        return false;
    }
    margin = margin - ((margin == -(carouselLiWidth * carouselLi.length - carouselLiWidth * 3 - carouselLiWidth)) ? carouselLiWidth : carouselLiWidth * 3);
    carouselUl.style.marginLeft = margin + 'px';
});
document.querySelector('.prev').addEventListener('click', function () {
    if (margin == 0) {
        return false;
    }
    margin = margin + ((margin == -carouselLiWidth) ? carouselLiWidth : carouselLiWidth * 3);
    carouselUl.style.marginLeft = margin + 'px';
    console.log(margin);
});
