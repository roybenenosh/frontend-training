const strengths = {
  Week: { color: 'red' },
  Medium: { color: 'orange' },
  Strong: { color: 'green' }
};

const symbols = ['!', '#', '$', '@', '*'];

function onTextChange() {
  let password = document.querySelector('#password-input').value;
  let smallExists = false;
  let capitalExists = false;
  let numberExists = false;
  let symbolExists = false;

  if (password.length < 5) {
    updateLabel('Week');
    return;
  }

  const chars = Object.assign([], password);

  for (let index = 0; index < chars.length; index++) {
    if (chars[index] === chars[index].toUpperCase()) capitalExists = true;
    if (chars[index] === chars[index].toLowerCase()) smallExists = true;
    if (parseInt(chars[index]) !== NaN) numberExists = true;
    if (symbols.includes(chars[index])) symbolExists = true;
  }

  if (smallExists && capitalExists && numberExists && symbolExists) {
    updateLabel('Strong');
    return;
  }

  if (smallExists && capitalExists && numberExists) {
    updateLabel('Medium');
    return;
  }
}

function updateLabel(strength) {
  let color = strengths[strength].color;
  let label = document.querySelector('#strength');
  label.style.color = color;
  label.innerText = strength;
}
