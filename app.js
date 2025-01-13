// Elements
const startBtn = document.querySelector("#start");
const endBtn = document.querySelector("#stop");
let speakBtn = document.querySelector("#speak");


const speechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new speechRecognition();
// recognition.lang = 'hi-IN';

recognition.onstart = function () {
    readOut("Heyyy ,jimmy ,tell me what can i do for you");
    console.log("Recognition Activated");
}

// speaking out users input 
recognition.onresult = (event) => {
    // console.log(event);
    // let current=event.resultIndex;
    let transcript = event.results[0][0].transcript;
    // readOut(transcript);
    var userInput = transcript.toLowerCase();
    console.log(transcript);
    var stringsToCheckGreetings = ["hii", "hello", "hey", "friday", "good", "hi"];
    // var stringsToOpenWebs = ["open", "youtube"];
    if (stringsToCheckGreetings.some(substring => userInput.includes(substring))) {
        readOut("Hellow Sir, tell me what can i do for you ");
    }

    // Open Youtube 
    if (userInput.includes("open youtube") || userInput.includes("start youtube")) {
        readOut("Opening youtube, sir");
        window.open("https://www.youtube.com/");
    }
    // play song in youtube
    if (userInput.includes("play music") || userInput.includes("start music ") || userInput.includes("play song ") || userInput.includes("start song ")) {
        readOut("Playing music on youtube, sir ");
        window.open("https://www.youtube.com/watch?v=1cjh7Gpwgzc");
        console.log("opened");
        recognition.stop();
    }

    // Open Google
    if (userInput.includes("open google")) {
        readOut("Opening Google, sir");
        window.open("https://www.google.com/");
    }
    // Google Search 
    if (userInput.includes("search")) {
        let userSearch = findQuery(userInput);
        readOut(`Searching ${userSearch} on google`);
        // setTimeout(() => {
        window.open(`https://www.google.com/search?q=${userSearch}`);
        // }, 1000);
    }


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
    speech.rate = 0.9;
    // speech.voice=
    speech.voice = allVoices[7];
    // speech.volume = 1;
    speech.pitch = 1.2;
    window.speechSynthesis.speak(speech);
    console.log("Speaking out");
}

// speakBtn.addEventListener("click", () => {
//     readOut("Heyyy ,jimmy ,tell me what can i do for you");
// });

window.onload = function () {
    readOut(" ");
}



// UserDefined Functions 
var findQuery = (input) => {
    let result = input.replace(/search|google|in|on/gi, "");
    console.log(result);
    return result;
}