function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Love me like you do"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElemnt = document.querySelector("#poem-generator");
poemFormElemnt.addEventListener("submit", generatePoem);
