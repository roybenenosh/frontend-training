function onTextChanged(e) {
  updateDom();
}

function updateDom() {
  let textbox = document.querySelector('#my-text');
  let textLengthValue = document.querySelector('#text-value');
  textLengthValue.innerText = textbox.value.length;
}

function clearText() {
  let textbox = document.querySelector('#my-text');
  let textLengthValue = document.querySelector('#text-value');
  textLengthValue.innerText = 0;
  textbox.innerText = '';
}

updateDom();
