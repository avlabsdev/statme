// Navigation functionality
let menuBarsIcon = document.querySelector("#menu-icon");
let xMarkIcon = document.querySelector("#x-nav-icon");
let nav = document.querySelector("#nav");

menuBarsIcon.addEventListener("click", (e) => {
  menuBarsIcon.style.display = "none";
  xMarkIcon.style.display = "flex";
  nav.style.display = "flex";
  e.preventDefault();
});

xMarkIcon.addEventListener("click", (e) => {
  menuBarsIcon.style.display = "flex";
  xMarkIcon.style.display = "none";
  nav.style.display = "none";
  e.preventDefault();
});

// Step card functionality

// Step Card #1
let stepLinkOne = document.querySelector(".step-card:nth-of-type(1) .step-link");
let plusIconOne = document.querySelector(".step-card:nth-of-type(1) .step-link .plus-icon");
let minusIconOne = document.querySelector(".step-card:nth-of-type(1) .step-link .minus-icon");
let stepExpandOne = document.querySelector(".step-card:nth-of-type(1) .step-card-expanded-container");
let stepCardContainerOne = document.querySelector(".step-card:nth-of-type(1) .step-card-container");

function stepOneLinkIconSwap() {
  if (plusIconOne.style.display == "none") {
    plusIconOne.style.display = "inline-block";
    minusIconOne.style.display = "none";
    stepExpandOne.style.display = "none";
    stepCardContainerOne.style.borderRadius = ".25rem";
  } else {
    plusIconOne.style.display = "none";
    minusIconOne.style.display = "inline-block";
    stepExpandOne.style.display = "flex";
    stepCardContainerOne.style.borderRadius = ".25rem .25rem 0 0";
  }
}

// Step Card #2
let stepLinkTwo = document.querySelector(".step-card:nth-of-type(2) .step-copy-wrapper .step-link");
let plusIconTwo = document.querySelector(".step-card:nth-of-type(2) .step-link .plus-icon");
let minusIconTwo = document.querySelector(".step-card:nth-of-type(2) .step-link .minus-icon");
let stepExpandTwo = document.querySelector(".step-card:nth-of-type(2) .step-card-expanded-container");
let stepCardContainerTwo = document.querySelector(".step-card:nth-of-type(2) .step-card-container");

function stepTwoLinkIconSwap() {
  if (plusIconTwo.style.display == "none") {
    plusIconTwo.style.display = "inline-block";
    minusIconTwo.style.display = "none";
    stepExpandTwo.style.display = "none";
    stepCardContainerTwo.style.borderRadius = ".25rem";
  } else {
    plusIconTwo.style.display = "none";
    minusIconTwo.style.display = "inline-block";
    stepExpandTwo.style.display = "flex";
    stepCardContainerTwo.style.borderRadius = ".25rem .25rem 0 0";
  }
}

// Step Card #3
let stepLinkThree = document.querySelector(".step-card:nth-of-type(3) .step-copy-wrapper .step-link");
let plusIconThree = document.querySelector(".step-card:nth-of-type(3) .step-link .plus-icon");
let minusIconThree = document.querySelector(".step-card:nth-of-type(3) .step-link .minus-icon");
let stepExpandThree = document.querySelector(".step-card:nth-of-type(3) .step-card-expanded-container");
let stepCardContainerThree = document.querySelector(".step-card:nth-of-type(3) .step-card-container");

function stepThreeLinkIconSwap() {
  if (plusIconThree.style.display == "none") {
    plusIconThree.style.display = "inline-block";
    minusIconThree.style.display = "none";
    stepExpandThree.style.display = "none";
    stepCardContainerThree.style.borderRadius = ".25rem";
  } else {
    plusIconThree.style.display = "none";
    minusIconThree.style.display = "inline-block";
    stepExpandThree.style.display = "flex";
    stepCardContainerThree.style.borderRadius = ".25rem .25rem 0 0";
  }
}