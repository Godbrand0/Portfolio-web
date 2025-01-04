var body = document.querySelector("body");
var btn = document.querySelector(".bttn");
var img = document.querySelector(".home-img");
var about = document.querySelector(".about-info");
var nav = document.querySelector(".navbar");
var links = document.querySelectorAll(".link");
var texts = document.querySelectorAll(".text");
var icons = document.querySelectorAll(".icon");
var projects = document.querySelectorAll(".project-card");
var icon_8 = document.querySelector(".icons-8");

var inputs = document.querySelectorAll("input");
var textarea = document.querySelector("textarea");

var texts_1 = document.querySelectorAll(".text-8");

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
  texts_1.forEach((text) => {
    text.style.color = "whitesmoke";
  });
  icons.forEach((icon) => {
    icon.style.color = "white";
  });
  projects.forEach((project) => {
    project.style.outlineColor = "#fff";
  });

  icon_8.style.fill = "white"; // Make sure to set this correctly
}

function lightmode() {
  body.style.background = "white";
  body.style.color = "black";
  btn.style.color = "black";

  projects.forEach((project) => {
    project.style.outlineColor = "#000";
  });

  nav.style.background = "#fff";
  links.forEach((link) => {
    link.style.color = "black";
  });
  texts.forEach((text) => {
    text.style.color = "black";
  });
  texts_1.forEach((text) => {
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

// json server

const renderProjects = async () => {
  const url = "http://localhost:3000/projects"; // API URL for projects

  try {
    // Fetch projects data
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch projects: ${res.status}`);
    const projectCards = await res.json();

    console.log("Fetched Projects:", projectCards);

    // Check if container exists
    const projectContainer = document.querySelector(".project-container");

    projectContainer.innerHTML = "";
    projectCards.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.className = "project-card";
      projectCard.innerHTML = `
   <a href="${project.link}" class="btn" target="_blank" rel="noopener noreferrer">
          <img src="${project.img}" alt="${project.title}" class="project-img" />
          <p class="text-8">${project.text}</p>
        </a>
  `;
      projectContainer.appendChild(projectCard);
    });
  } catch (error) {
    console.error(error.message);
  }
};
window.addEventListener("DOMContentLoaded", () => renderProjects());
