// The sounds for each drum class element.
const wSound = "./sounds/tom-1.mp3";
const aSound = "./sounds/tom-2.mp3";
const sSound = "./sounds/tom-3.mp3";
const dSound = "./sounds/tom-4.mp3";
const jSound = "./sounds/snare.mp3";
const kSound = "./sounds/crash.mp3";
const lSound = "./sounds/kick-bass.mp3";

// Play the sound associated with each drum class element.
function playAssociatedSound(drumButton) {
    const theLetter = drumButton.innerHTML;
    if (theLetter === "w") { (new Audio(wSound)).play(); }
    if (theLetter === "a") { (new Audio(aSound)).play(); }
    if (theLetter === "s") { (new Audio(sSound)).play(); }
    if (theLetter === "d") { (new Audio(dSound)).play(); }
    if (theLetter === "j") { (new Audio(jSound)).play(); }
    if (theLetter === "k") { (new Audio(kSound)).play(); }
    if (theLetter === "l") { (new Audio(lSound)).play(); }
}

// For each drum class element, wait for button click or key press.
const numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", 
        function () { playAssociatedSound(this); } );
}