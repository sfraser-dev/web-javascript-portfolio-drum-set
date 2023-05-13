// Variables for the sounds.
const wSound = "./sounds/tom-1.mp3";
const aSound = "./sounds/tom-2.mp3";
const sSound = "./sounds/tom-3.mp3";
const dSound = "./sounds/tom-4.mp3";
const jSound = "./sounds/snare.mp3";
const kSound = "./sounds/crash.mp3";
const lSound = "./sounds/kick-bass.mp3";

// Play the sound associated with each drum class element.
function playAssociatedSound(letter) {
    switch (letter) {
        case "w": (new Audio(wSound)).play(); break;
        case "a": (new Audio(aSound)).play(); break;
        case "s": (new Audio(sSound)).play(); break;
        case "d": (new Audio(dSound)).play(); break;
        case "j": (new Audio(jSound)).play(); break;
        case "k": (new Audio(kSound)).play(); break;
        case "l": (new Audio(lSound)).play(); break;
        default: console.log("unknown button click or key press");
    }
}

// For each drum class element, add a button click event listener.
const numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrumButtons; i++) {
    const drumButton = document.querySelectorAll(".drum")[i];
    drumButton.addEventListener("click",
        function () {
            const letter = this.innerHTML; 
            playAssociatedSound(letter);
            buttonAnimation(letter);
        });
}

// Listen in the entire page for key presses associated with particular drums. 
document.addEventListener("keydown", function (event) {
    if (event.code === "KeyW" && event.key === "w") { playAssociatedSound("w"); buttonAnimation("w"); }
    if (event.code === "KeyA" && event.key === "a") { playAssociatedSound("a"); buttonAnimation("a"); }
    if (event.code === "KeyS" && event.key === "s") { playAssociatedSound("s"); buttonAnimation("s"); }
    if (event.code === "KeyD" && event.key === "d") { playAssociatedSound("d"); buttonAnimation("d"); }
    if (event.code === "KeyJ" && event.key === "j") { playAssociatedSound("j"); buttonAnimation("j"); }
    if (event.code === "KeyK" && event.key === "k") { playAssociatedSound("k"); buttonAnimation("k"); }
    if (event.code === "KeyL" && event.key === "l") { playAssociatedSound("l"); buttonAnimation("l"); }
});

// Animate the buttons on activation. Add a new styling class to the button then remove it after 100ms.
function buttonAnimation(letter) {
    const activeButton = document.querySelector(`.${letter}`);
    activeButton.classList.add("pressed");
    setTimeout(() => { activeButton.classList.remove("pressed"); }, 100);
}