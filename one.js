"use strict";

document.cookie = 'WaAwsde_03849_Rl05';
console.log(document.cookie);
console.log(localStorage);



function buttonClick() {
  let text = selectText();
  console.log(text);
  clearInput();
  if (text === 'Hello') {
    let inputName = prompt('Как тебя зовут?')
    alert(`Привет, ${inputName}!`);
  }
  else if (text === 'xxx') {
    alert(`
      ░░░▄▄▄▓▀▀░░░░░░░▒▒▒▀▀▀█▄░
      ░░▐█░▄▀░░░░░░░░░░░░░▀▄░░█▌
      ░░▐░▐░░░░░░░░░░░░░░░░░▐░░▌
      ░░▐▐░░░░░░░▀▄▒▄▀░░░░░░░▐░░▌
      ░░▐▐░░░░░░░▒▒▐▒▒░░░░░░░▐░░▌
      ░░▐▐░░░▄░░░░▒▐▒░░░▄░░░░▐░░▌
      ░░▐▐▒░░░░░▒▒▒▐▒▒▒░░░░░░▐░░▌░
      ░░▐░▀▄▒▒▒▒▒▄▀▒▀▄▒▒▒▒▒▄▀▌░▌░
      `);
  }
}


function selectText() {
  let input = document.querySelector('.textReturn');
  return input.value;
}


function clearInput() {
  let input = document.querySelector('.textReturn');
  input.value = '';
}



let dostoevsky = document.querySelector('.dostoevsky');
dostoevsky.hidden = true;


let twoButton = document.querySelector('.twoButton');
twoButton.addEventListener('click', showText);


function showText() {
  let dostoevsky = document.querySelector('.dostoevsky');
  dostoevsky.hidden = false;

  let twoButton = document.querySelector('.twoButton');
  twoButton.removeEventListener('click', showText);
  twoButton.addEventListener('click', hideText);
}


function hideText() {
  let dostoevsky = document.querySelector('.dostoevsky');
  dostoevsky.hidden = true;

  twoButton.removeEventListener('click', hideText);
  twoButton.addEventListener('click', showText);
}
