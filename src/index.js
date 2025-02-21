function displayPoem(response) {
  let poemElement = document.querySelector("#poem");
  let emojiElement = document.querySelector("#loading-emoji");
  if (emojiElement) {
    emojiElement.classList.remove("rotating-emoji");
  }
  new Typewriter("#poem", {
    strings: response.data.answer,
    loop: false,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "tf315a00255a026o44c386706557b731";
  let inputText = instructionsInput.value.trim();
  let language = capitalizeFirstLetter(inputText.split(" ")[0]);
  let topic = inputText.split(" ").slice(1).join(" ");
  let prompt = `Generate a poem in ${language} about ${topic}`;
  let context =
    "You are a romantic poet who is inspired by the beauty of nature. Your mission is to generate a 4-line poem about anything inspiring in basic HTML avoid displaying html. Make sure to follow the instructions given by the user. Sign the poem with <div> <strong> 🩷RUKY </strong></div> in pink and keep it below the poem on a new line. If a language is typed wrongly, auto correct it and also please try to listen to the user's command";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  let emojiElement = document.createElement("span");
  emojiElement.id = "loading-emoji";
  emojiElement.classList.add("rotating-emoji");
  emojiElement.textContent = "⏳";
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating poem...about ${topic}`;
  poemElement.prepend(emojiElement);
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
