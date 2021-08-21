function buttonClick(){
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
