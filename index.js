const body = document.querySelector("body");
const btn = document.querySelector(".bttn");
const img = document.querySelector(".home-img");
const about = document.querySelector(".about-info");
const nav = document.querySelector(".navbar");
const links = document.querySelectorAll(".link");
const texts = document.querySelectorAll(".text");
const icons = document.querySelectorAll(".icon");
const projects = document.querySelectorAll(".project-card");
const icon_8 = document.querySelector(".icons-8");

const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");

const texts_8 = document.querySelectorAll(".text-8");

function darkmode() {
  body.style.background = "black";
  body.style.color = "white";
  btn.style.color = "white";

  nav.style.background = "#000";
  links.forEach((link) => {
    link.style.color = "white";
  });
  texts.forEach((text) => {
    text.style.color = "whitesmoke";
  });
  texts_8.forEach((text) => {
    text.style.color = "whitesmoke";
  });
  icons.forEach((icon) => {
    icon.style.color = "white";
  });
  projects.forEach((project) => {
    project.style.outlineColor = "#fff";
    project.style.color = "fff";
  });

  icon_8.style.fill = "white"; // Make sure to set this correctly
}

function lightmode() {
  body.style.background = "white";
  body.style.color = "black";
  btn.style.color = "black";

  projects.forEach((project) => {
    project.style.outlineColor = "#000";
    project.style.color = "#000";
  });

  nav.style.background = "#fff";
  links.forEach((link) => {
    link.style.color = "black";
  });
  texts.forEach((text) => {
    text.style.color = "black";
  });
  texts_8.forEach((text) => {
    text.style.color = "black";
  });
  icons.forEach((icon) => {
    icon.style.color = "black";
  });
  icon_8.style.fill = "black";
}
// function for dark and light mode
function changeMode() {
  if (body.style.background === "white") {
    darkmode();
  } else {
    lightmode();
  }
}
