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

/** Передвигать мяч по полю */
let field = document.querySelector('#field'),
    ball = document.querySelector('#ball');

field.addEventListener('click', function (event) {
    let y, x;
    if (event.offsetX + ball.offsetWidth / 2 > field.clientWidth) {
        x = field.clientWidth - ball.offsetWidth;
    } else if (event.offsetX - ball.offsetWidth / 2 < 0) {
        x = 0;
    } else {
        x = event.offsetX - ball.offsetWidth / 2;
    }
    if (event.offsetY + ball.offsetHeight / 2 > field.clientHeight) {
        y = field.clientHeight - ball.offsetHeight;
    } else if (event.offsetY - ball.offsetHeight / 2 < 0) {
        y = 0;
    } else {
        y = event.offsetY - ball.offsetHeight / 2;
    }
    ball.style.top = y + 'px';
    ball.style.left = x + 'px';
});

/** Скрытие сообщения с помощью делегирования */
let allPane1Blocks = document.querySelectorAll('.pane1');
for (let i = 0; i < allPane1Blocks.length; i++) {
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-button');
    removeBtn.textContent = '[X]';
    allPane1Blocks[i].appendChild(removeBtn);
}

let mainBlock = document.querySelector('#target-click');
mainBlock.addEventListener('click', function (event) {
    let target = event.target;
    if (target.classList.contains('remove-button')) {
        target.parentNode.classList.add('disabled');
    }
});

/** Раскрывающееся дерево */
let treeBlock = document.querySelector('.tree');
treeBlock.addEventListener('click', function (event) {
    let target = event.target;
    if (target.tagName == 'SPAN' && target.nextElementSibling) {
        target.nextElementSibling.classList.toggle('disabled');
    }
});

/** Поведение "подсказка" */
document.addEventListener('mouseover', function (event) {
    let target = event.target;
    if (target.classList.contains('show-tooltip')) {
        let tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.innerHTML = target.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);
        let coords = target.getBoundingClientRect();
        console.log(coords);
        let top = coords.top + target.offsetHeight;
        tooltip.style.top = top + 'px';
    }
});
// document.addEventListener('mouseout', function (event) {
//     let target = event.target;
//     if (target.classList.contains('show-tooltip')) {
//         document.querySelector('.tooltip').remove();
//     }
// });