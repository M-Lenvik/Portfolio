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



/* TA BORT OM ANIMATION:HTML EJ ANVÄNDS* /
    // Funktion för att läsa in HTML från en annan fil
    fetch('animation.html')
        .then(response => response.text())
        .then(data => {
            // Infoga det lästa innehållet i elementet med id 'external-content'
            document.getElementById('external-content').innerHTML = data;
        })
        .catch(error => console.error('Fel vid inläsning av HTML:', error));
*/



        /** Gäller initialerna i namnet */
const tl = new gsap.timeline();
const letters = [
    "#letter_m",  
    "#letter_l", 
];

letters.forEach((letter) => {
  tl.to(letter, { 
    duration: 1.5, 
    fill: "#b96300",
    transformOrigin: "center center",
    rotation: 360,
  });
});




/** Gäller cirkeln */
gsap.set("#cls-2-group_initials", { fill: "#000" }); //Sätter initial färg  
gsap.to("#cls-2-group_initials", { 
  duration: 5, 
  fill: "#b96300",
  transformOrigin: "50% 50%", 
  rotation: 360, 
  repeat: -1, //Upprepa oändligt
  repeatDelay: 5
});

gsap.to('#cls-2-tagg-group', { 
  transformOrigin: "50% 50%", 
  rotation: "-=360", 
  duration: 10, 
  ease: "linear",
  repeat: -1,
  yoyo: true,
});



setupCounter(document.querySelector('#counter'));
