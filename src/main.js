import './normalize.scss';
import "./style.scss";
//import javascriptLogo from "./javascript.svg";
//import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";



// Välj alla länkar i navigationsmenyn och kryssrutan
const menuLinks = document.querySelectorAll('.meny nav a');
const menuToggle = document.querySelector('header input[type="checkbox"]');


// Lägg till en klickhändelse på varje länk
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(() => {
        menuToggle.checked = false; // Stänger menyn efter fördröjning
      }, 300); // 300 ms fördröjning
  });
});



/*************Ta bort när sidan är klar*****************/
// Hämta element
const modal = document.getElementById("popupModal");
const closeButton = document.querySelector(".close-button");

// Visa popup när sidan laddas
window.onload = function() {
  modal.style.display = "block";
};

// Stäng popup när man klickar på "X"
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Stäng popup när man klickar utanför fönstret
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

/*************Ta bort när sidan är klar*****************/



setupCounter(document.querySelector('#counter'));
