function buttonClick(){
  let text = selectText();
  console.log(text);
  if (text === 'Hello') {
    alert('Hello');
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
