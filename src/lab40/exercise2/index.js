const sentences = [
  'I learn js',
  'I learn html',
  'i learn css',
  'i learn react',
  'i learn es6'
];

function addTextToAllInputs(text) {
  let elements = document.body.getElementsByTagName('input');
  for (let element of elements) {
    element.value = text;
  }
}

function addDiffTextToAllInputs(text) {
  let elements = document.body.getElementsByTagName('input');
  for (let index = 0; index < elements.length; index++) {
    elements[index].value = sentences[index];
  }
}

addTextToAllInputs(sentences[0]);
addDiffTextToAllInputs();
