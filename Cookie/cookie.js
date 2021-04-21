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
