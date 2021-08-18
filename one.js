function buttonClick(){
  let text = selectText();
  console.log(text);
  alert('Hello');
  alert('Hello');
}

function selectText() {
  let input = document.querySelector('.textReturn');
  return input.value;
}
