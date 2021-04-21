var i = 0; //Start point
var images = [];
var time = 3000;

// Billede liste
images[0] = "img/gul_missu.jpg";
images[1] = "img/lysestager.jpg";
images[2] = "img/vaser.jpg";
images[3] = "img/process.jpg";
images[4] = "img/maling.jpg";

// Billede skift
function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
