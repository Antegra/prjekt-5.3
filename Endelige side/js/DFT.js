//Dropdown JS

var dropdownImg = document.getElementById('dropdown_menu');

var dropdownLinks = document.getElementById('dropdown_links');

dropdownImg.addEventListener('click', function() {
if (dropdownLinks.style.display == 'none') {
	dropdownLinks.style.display = 'block';
	console.log("synlig");
	}
	else{
		dropdownLinks.style.display = 'none';
		console.log("usynlig");
	}


})

//Cookie JS

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
});

setTimeout(() => {
   {
    cookieContainer.classList.add("active");
  }
}, 2000);


//Slideshow JS


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


// Kontaktformular

const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Navn er nødvendigt')
  }

  if (email.value.length <= 3) {
    messages.push('Email skal være længere end 3 tegn')
  }

  if (email.value.length >= 30) {
    messages.push('Email skal være kortere end 30 tegn')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})