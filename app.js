// Elements
const startBtn = document.querySelector("#start");
const endBtn = document.querySelector("#stop");
let speakBtn = document.querySelector("#speak");


const speechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new speechRecognition();
// recognition.lang = 'hi-IN';

recognition.onstart = function () {
    console.log("Recognition Activated");
}

// speaking out users input 
recognition.onresult = (event) => {
    // console.log(event);
    // let current=event.resultIndex;
    let transcript = event.results[0][0].transcript;
    console.log(transcript);
    readOut(transcript);
}


recognition.onend = () => {
    console.log("Recognition Deactivated");
}

recognition.continuous = true;

startBtn.addEventListener("click", () => {
    recognition.start();
})
endBtn.addEventListener("click", () => {
    recognition.stop();
});


// Assistant Speech
var readOut = (message) => {
    const speech = new SpeechSynthesisUtterance();
    // different sound
    const allVoices = speechSynthesis.getVoices();
    speech.text = message;
    // speech.rate = 1.7;
    speech.voice = allVoices[7];
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log("Speaking out");
}

speakBtn.addEventListener("click", () => {
    readOut("Heyyy ,jimmy ,tell me what can i do for you");
});

window.onload = function () {
    readOut(" ");
}
