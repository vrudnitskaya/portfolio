AOS.init();

// canvas birds

VANTA.BIRDS({
  el: "#birds",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color1: 0xede5ec,
  color2: 0xf56aab,
  // color2: 0xf20ac3,
  colorMode: "lerpGradient",
  birdSize: 0.8,
  wingSpan: 19.00,
  speedLimit: 4.00,
  separation: 28.00,
  alignment: 86.00,
  cohesion: 66.00,
  quantity: 4.00
});

VANTA.BIRDS({
  el: "#contact",
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color1: 0xede5ec,
  color2: 0xf56aab,
  colorMode: "lerpGradient",
  birdSize: 0.6,
  wingSpan: 19.00,
  speedLimit: 4.00,
  separation: 28.00,
  alignment: 86.00,
  cohesion: 66.00,
  quantity: 4.00
});

// typing text about

let typed = new Typed('#typed', {
    stringsElement: '#text-for-typing',
    typeSpeed: 100,
    startDelay: 500,
    backDelay: 5000,
    backSpeed: 100,
    loop: true
});


// navbar

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll("li");

burger.addEventListener("click", showNav);

function showNav() {
  nav.classList.toggle('nav-active');
  
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    }
    else {
      link.style.animation = `showMenu 1s ease forwards ${index / 4 + 1}s`;
    }
  });

  burger.classList.toggle('toggle');
};

//random facts
const btnShowFacts = document.querySelector(".btn-show-facts");
const textFacts = document.querySelector(".text-facts");
const btnCloseFacts = document.querySelector(".btn-close-facts");

const facts = [
  "I have a degree in Book Studies.",
  "I'm a nail polish addict. I've even had a blog about nail polishes.",
  "Choosing between buying book or something else, I'll choose a book.",
  "I was born in one of the coldest place on Earth.",
  "I like to play board games.",
  "I love diving."
];

btnShowFacts.addEventListener("click", getFact);
function getFact() {
  let randomFact = facts[Math.floor(Math.random() * facts.length)];
  textFacts.style.display = "block";
  btnCloseFacts.style.display = "block";
  textFacts.textContent = randomFact;
};

btnCloseFacts.addEventListener("click", closeFacts);
function closeFacts() {
  textFacts.style.display = "none";
  btnCloseFacts.style.display = "none";
}

// Array of skills
const skills = [
  // Frontend
  { name: "HTML", icon: "fa-brands fa-html5" },
  { name: "CSS", icon: "fa-brands fa-css3-alt" },
  { name: "JAVASCRIPT", icon: "fa-brands fa-js" },
  { name: "REACT", icon: "fa-brands fa-react" },
  { name: "NEXT.JS", imageUrl: "assets/nextdotjs.svg" },

  // Styling
  { name: "BOOTSTRAP", icon: "fa-brands fa-bootstrap" },
  { name: "TAILWIND", imageUrl: "/assets/tailwindcss.svg" },
  { name: "MUI", imageUrl: "assets/mui.svg" },

  // Animation & Design
  { name: "GSAP", imageUrl: "assets/greensock.svg" },
  { name: "FIGMA", icon: "fa-brands fa-figma" },

  // Backend
  { name: "NODE.JS", icon: "fa-brands fa-node-js" },
  { name: "EXPRESS", imageUrl: "assets/express.svg" },
  { name: "RUBY ON RAILS", imageUrl: "assets/rubyonrails.svg" },
  
  // Database
  { name: "MONGODB", imageUrl: "assets/mongodb.svg" },
];

// Generate skills
const skillsContainer = document.querySelector(".container-skills");
skills.forEach(skill => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");
    
    skillDiv.innerHTML = `
        <h5>${skill.name}</h5>
        <span>
            ${skill.icon ? `<i class="${skill.icon}"></i>` : `<img src="${skill.imageUrl}" alt="${skill.name} icon" height="50px">`}
        </span>`;
    
    skillsContainer.appendChild(skillDiv);
});

// portfolio

const projects = [
    {
        title: "My Beloved Library",
        link: "https://my-beloved-library.onrender.com/",
        description: "The app for storing books from your personal library",
        tags: ["#react", "#tailwind", "#express", "#node", "mongodb"],
        style: "library"
    },
    {
        title: "Book worms society",
        link: "https://github.com/vrudnitskaya/book-worms-society",
        description: "The blogging platform for book lovers",
        tags: ["#rubyonrails", "#bootstrap", "#sql" ],
        style: "bws"
    },
    {
        title: "TalentStudio",
        link: "https://gg-pac-team4-front-1.onrender.com/",
        description: "The platform for connecting teachers and students in the field of art.",
        tags: ["#tailwind", "#react", "#express", "#node.js", "#mongodb"],
        style: "talent"
    },
    {
        title: "Weather forecast",
        link: "https://weather-day-night.glitch.me",
        description: "Enter a city name in the input field and get the forecast.",
        tags: ["#html", "#css", "#javascript", "#api"],
        style: "weather"
    },
    {
        title: "Ballet studio",
        link: "https://vrudnitskaya.github.io/BalleKids/",
        description: "The landing page for kids ballet studio.",
        tags: ["#html", "#css", "#bootstrap", "#gsap"],
        style: "ballet"
    },
    {
        title: "To-Do List",
        link: "https://vrudnitskaya.github.io/to-do-list/",
        description: `Your to-do list is always with you. <br> The list will be saved even if you reload the page.`,
        tags: ["#html", "#css", "#javascript"],
        style: "todoJS"
    },
];

// Generate projects
const projectsContainer = document.querySelector(".container-projects"); // Fixed typo here
projects.forEach(project => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.setAttribute("data-aos", "fade-up");
    cardDiv.setAttribute("data-aos-duration", "1000");
  
    cardDiv.innerHTML = `
    <div class="top-side ${project.style}">
        <h3>${project.title}</h3>
        <a class="link-projects" href="${project.link}" target="_blank"><button class="btn-projects"><i class="fa-solid fa-link"></i></button></a>
    </div>
    <div class="back-side">
        <p>${project.description}</p>
        <br>
        <p class="tags-position">${project.tags.map(tag => `<span class="hashtag">${tag}</span>`).join(' ')}</p>
    </div>`;
    
    projectsContainer.appendChild(cardDiv);
});

const items = document.querySelectorAll('.card');

items.forEach(item =>{
    item.addEventListener('mouseover', ()=>{
    removeFocus();
    item.classList.add('selected');
});

removeFocus = ()=>{
    items.forEach(item =>{
    item.classList.remove('selected');
    })
}
});


// go up button
const btnUp = document.querySelector("#btn-up");

window.addEventListener ('scroll', showBtnUp);

function showBtnUp() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
};

btnUp.addEventListener ('click', goToTop);
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};