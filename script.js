const backContainer = document.getElementById("backbtn");
const navigateContainer = document.getElementById("navigatebtn");
const dynamicText = document.getElementById("dynamicText");

// backContainer.style.display = "none";

let isShow = false;

function hideShow() {
  if (!isShow) {
    backContainer.style.display = "flex";
    navigateContainer.style.display = "none";
    isShow = true;
  }
}

function showBack() {
  if (isShow) {
    backContainer.style.display = "none";
    navigateContainer.style.display = "flex";
    isShow = false;
  }
}

const words = ["Healthy", "Wealthy", "Marijuana"];

setInterval(() => {
  let word = words[Math.floor(Math.random() * words.length)];
  dynamicText.innerHTML = word;
}, 1000);
