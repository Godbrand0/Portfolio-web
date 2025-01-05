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

const projectcards = [
  {
    id: 1,
    text: "Grocify web app using HTML, TailwindCSS and FIREBASE",
    link: "https://godbrand0.github.io/grocery/dist/grocery.htm",
    img: "images/Screenshot 2024-06-03 215153.jpg",
  },
  {
    id: 2,
    text: "E-commerce page using HTML, TailwindCSS and JAVASCRIPT",
    link: "https://godbrand0.github.io/ecommerce-product-page-main/page.htm",
    img: "images/Screenshot 2024-06-14 111046.png",
  },
  {
    id: 4,
    text: "Grandcoast hotels interactive web page using HTML, CSS & JAVASCRIPT",
    link: "https://grandcoast.netlify.app/",
    img: "images/Screenshot 2024-09-02 215514.png",
  },

  {
    id: 6,
    text: "Mobile responsive landing page using React.js and CSS",
    link: "https://getajobproject.netlify.app/",
    img: "images/Screenshot 2025-01-04 090408.png",
  },
  {
    id: 7,
    text: "Mobile responsive E-commerce website using HTML,CSS and JAVASCRIPT",
    link: "https://guileless-nougat-b180d9.netlify.app/",
    img: "images/Screenshot 2025-01-04 091715.png",
  },
];

const renderProjects = async () => {
  const loadingIndicator = document.querySelector(".loading-indicator");
  const projectContainer = document.querySelector(".project-container");

  // Simulate loading delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Hide loading indicator and show project container
  loadingIndicator.style.display = "none";

  // Map through projects and render them
  projectcards.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `
      <a href="${project.link}" class="btn" target="_blank" rel="noopener noreferrer">
        <img src="${project.img}" alt="${project.text}" class="project-img" />
        <p class = "text-8">${project.text}</p>
      </a>
    `;
    projectContainer.appendChild(projectCard);
  });
};

// Trigger renderProjects on DOMContentLoaded
window.addEventListener("DOMContentLoaded", renderProjects);
