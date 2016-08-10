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
var removeBtn = document.createElement('button');
removeBtn.classList.add('remove-button');
removeBtn.textContent = '[X]';

let allPaneBlocks = document.querySelectorAll('.pane');
for (let i = 0; i < allPaneBlocks.length; i++) {
    let removeBtnClone = removeBtn.cloneNode(true);
    allPaneBlocks[i].appendChild(removeBtnClone);
}

let allRemoveButton = document.querySelectorAll('.remove-button');
for (let i = 0; i < allRemoveButton.length; i++) {
    allRemoveButton[i].addEventListener('click', function () {
        this.parentNode.classList.add('disabled');
    });
}