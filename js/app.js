// Preload Audio objects and map to corresponding keys.
const audioMap = {
    a: new Audio("./sounds/tom-2.mp3"),
    s: new Audio("./sounds/tom-3.mp3"),
    d: new Audio("./sounds/tom-4.mp3"),
    f: new Audio("./sounds/tom-1.mp3"),
    j: new Audio("./sounds/snare.mp3"),
    k: new Audio("./sounds/crash.mp3"),
    l: new Audio("./sounds/kick-bass.mp3"),
};

// Force load all audio to minimise first-time-play delay
Object.values(audioMap).forEach((audio) => audio.load());

// Play the sound associated with each drum key.
function playAssociatedSound(letter) {
    const sound = audioMap[letter];
    if (sound) {
        sound.currentTime = 0; // Rewind to start if still playing
        sound.play();
    } else {
        console.log("Unknown button click or key press:", letter);
    }
}

// Add click event listeners to drum buttons
const numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrumButtons; i++) {
    const drumButton = document.querySelectorAll(".drum")[i];
    drumButton.addEventListener("click", function () {
        const letter = this.innerHTML.toLowerCase();
        playAssociatedSound(letter);
        buttonAnimation(letter);
    });
}

// Listen in the entire page for key presses associated with particular drums.
document.addEventListener("keydown", function (event) {
    const letter = event.key.toLowerCase();
    if (audioMap.hasOwnProperty(letter)) {
        playAssociatedSound(letter);
        buttonAnimation(letter);
    }
});

// Animate the buttons on activation. Add a new styling class to the button then remove it after 100ms.
function buttonAnimation(letter) {
    const activeButton = document.querySelector(`.${letter}`);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(() => {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
