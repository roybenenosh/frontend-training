function getLeftValueForImage(images, widths, index) {
  let left = 0;

  for (let i = 0; i < index; i++) {
    left -= widths[i];
  }
  return left;
}
let images = ['1.jpg', '2.jpg', '3.jpg'];
let widths = [200, 200, 200];
console.log(getLeftValueForImage(images, widths, 1));

images = ['1.jpg', '2.jpg', '3.jpg'];
widths = [200, 300, 200];
console.log(getLeftValueForImage(images, widths, 2));

images = ['1.jpg', '2.jpg', '3.jpg'];
widths = [200, 300, 200];
console.log(getLeftValueForImage(images, widths, 0));
