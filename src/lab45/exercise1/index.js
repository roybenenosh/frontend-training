let selectedImageIndex = 0;

function init() {
  updateImages();
  setEventListerers();
  setInterval(changeImage, 2500);
}

function changeImage() {
  selectedImageIndex = (selectedImageIndex + 1) % 3;
  updateImages();
}

function selectImage(selected) {
  selectedImageIndex = selected;
  for (let index = 0; index < images.length; index++) {
    circles[index].style.backgroundColor =
      index === selected ? 'black' : 'white';
  }
}

function updateImages() {
  let images = document.body.getElementsByTagName('img');
  let circles = document.body.getElementsByClassName('circle');

  for (let index = 0; index < images.length; index++) {
    images[index].style.display =
      index === selectedImageIndex ? 'unset' : 'none';

    circles[index].style.backgroundColor =
      index === selectedImageIndex ? 'black' : 'white';
  }
}

function setEventListerers() {
  let circles = document.body.getElementsByClassName('circle');
  for (let index = 0; index < circles.length; index++) {
    circles[index].addEventListener('click', e => changeImage(index));
  }
}

init();
