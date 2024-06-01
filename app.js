"use strict";
const container = document.querySelector(".container");
const btn0 = document.querySelector(".btn1");
const btn1 = document.querySelector(".btn2");
const btn2 = document.querySelector(".btn3");
const btn3 = document.querySelector(".btn4");
const buttons = document.querySelectorAll(".btn");
let activeIndex = 0;

const infos = [
  {
    icon: `<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="icon"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
    />
  </svg>`,
    heading: "Get your home furnishings in a flash with rapid delivery.",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, perspiciatis blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia.",
  },
  {
    icon: `<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="icon"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
    />
  </svg>`,
    heading: "Always here to help: stellar support around the clock. ",
    paragraph:
      "Dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, plorem blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia minus sint, plorem ex harum.",
  },
  {
    icon: `<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="icon"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>`,
    heading: "Stay ahead of the trends with our latest discoveries",
    paragraph:
      "Ipsum dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, pLorem blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia temporibus.",
  },
  {
    icon: `<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="icon"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>`,
    heading: "No stress or worries for your home goods.",
    paragraph:
      "Explicabo ipsum Error sit ametperspiciati consectetur voluptatibus elit. Error accusamus arc explicabo explictecto minus sint, se blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit sit amet architecto.",
  },
];

buttons.forEach(function (button, index) {
  console.log(index);
  console.log(button);
  button.addEventListener("click", function () {
    // Your click event code here
  });
});

text();
buttonColor();
function text() {
  if (activeIndex === 0) {
    container.innerHTML = `${infos[activeIndex].icon} <div class="infos"><h1 class="heading">${infos[activeIndex].heading}</h1> <p class="paragraph">${infos[activeIndex].paragraph}</div>`;
  } else if (activeIndex === 1) {
    container.innerHTML = `${infos[activeIndex].icon} <div class="infos"><h1 class="heading">${infos[activeIndex].heading}</h1> <p class="paragraph">${infos[activeIndex].paragraph}</div>`;
  } else if (activeIndex === 2) {
    container.innerHTML = `${infos[activeIndex].icon} <div class="infos"><h1 class="heading">${infos[activeIndex].heading}</h1> <p class="paragraph">${infos[activeIndex].paragraph}</div>`;
  } else if (activeIndex === 3) {
    container.innerHTML = `${infos[activeIndex].icon} <div class="infos"><h1 class="heading">${infos[activeIndex].heading}</h1> <p class="paragraph">${infos[activeIndex].paragraph}</div>`;
  }
}

buttons[0].addEventListener("click", function () {
  activeIndex = 0;
  buttonColor();
  text();
});

buttons[1].addEventListener("click", function () {
  activeIndex = 1;
  buttonColor();
  text();
});
buttons[2].addEventListener("click", function () {
  activeIndex = 2;
  buttonColor();
  text();
});
buttons[3].addEventListener("click", function () {
  activeIndex = 3;
  buttonColor();
  text();
});

function buttonColor() {
  if (activeIndex === 0) {
    buttons[0].style.backgroundColor = "#c026d3";
    buttons[0].style.color = "white";
    buttons[1].style.backgroundColor = "transparent";
    buttons[1].style.color = "black";
    buttons[2].style.backgroundColor = "transparent";
    buttons[2].style.color = "black";
    buttons[3].style.backgroundColor = "transparent";
    buttons[3].style.color = "black";
    return;
  } else if (activeIndex === 1) {
    buttons[1].style.backgroundColor = "#c026d3";
    buttons[1].style.color = "white";
    buttons[0].style.backgroundColor = "transparent";
    buttons[0].style.color = "black";
    buttons[2].style.backgroundColor = "transparent";
    buttons[2].style.color = "black";
    buttons[3].style.backgroundColor = "transparent";
    buttons[3].style.color = "black";
    return;
  } else if (activeIndex === 2) {
    buttons[2].style.backgroundColor = "#c026d3";
    buttons[2].style.color = "white";
    buttons[1].style.backgroundColor = "transparent";
    buttons[1].style.color = "black";
    buttons[0].style.backgroundColor = "transparent";
    buttons[0].style.color = "black";
    buttons[3].style.backgroundColor = "transparent";
    buttons[3].style.color = "black";
    return;
  }
  if (activeIndex === 3) {
    buttons[3].style.backgroundColor = "#c026d3";
    buttons[3].style.color = "white";
    buttons[1].style.backgroundColor = "transparent";
    buttons[1].style.color = "black";
    buttons[2].style.backgroundColor = "transparent";
    buttons[2].style.color = "black";
    buttons[0].style.backgroundColor = "transparent";
    buttons[0].style.color = "black";
    return;
  }
}
