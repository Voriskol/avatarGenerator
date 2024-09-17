const backgrounds = 3;
const tops = 8;
const bodies = 6;
const eyebrows = 6;
const eyes = 5;
const glasses = 3;
const mouthes = 6;
const pets = 4;

const startPath = "assets";

const generateButton = document.getElementById("generate-button");
const downloadButton = document.getElementById("download-button");
const avatar = document.getElementById("avatar");
const avatarTop = document.getElementById("top");
const avatarMouth = document.getElementById("mouth");
const avatarEyes = document.getElementById("eyes");
const avatarGlasses = document.getElementById("glasses");
const avatarEyebrows = document.getElementById("eyebrows");
const avatarBody = document.getElementById("body");
const avatarPet = document.getElementById("pet");

const randomizer = (countElements) => {
  return Math.trunc(Math.random() * countElements) + 1;
};

const setElementSrc = (nameFolder, count) => {
  return `./${startPath}/${nameFolder}/${randomizer(count)}.svg`;
};

const generateAvatar = () => {
  avatar.style.backgroundImage = `url(/${startPath}/bg/${randomizer(
    backgrounds
  )}.jpg)`;
  avatarTop.src = setElementSrc("top", tops);
  avatarMouth.src = setElementSrc("mouthes", mouthes);
  avatarEyes.src = setElementSrc("eyes", eyes);
  avatarGlasses.src = setElementSrc("glasses", glasses);
  avatarEyebrows.src = setElementSrc("eyebrows", eyebrows);
  avatarBody.src = setElementSrc("body", bodies);
  avatarPet.src = setElementSrc("pets", pets);
};

addEventListener("load", generateAvatar);

generateButton.addEventListener("click", generateAvatar);
downloadButton.addEventListener("click", () => {
  html2canvas(document.querySelector("#avatar")).then((canvas) => {
    document.body.appendChild(canvas);
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.download = "avatar.png";
    link.href = image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    document.body.removeChild(canvas);
  });
});
