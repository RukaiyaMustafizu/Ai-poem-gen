function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    loop: false,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "tf315a00255a026o44c386706557b731";
  let prompt = `User instructions are: Generate a Dutch poem about love ${instructionsInput.value}`;
  let context =
    "You are a romantic poet who is inspired by the beauty of nature. Your mission is to generate a 4-line poem about love in basic HTML avoid displaying  html. Make sure to follow the instructions given by the user. Sign he poem wih RUKY";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating poem");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
