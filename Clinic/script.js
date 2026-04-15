// Reveal animation on scroll
window.addEventListener("scroll", function(){

let reveals = document.querySelectorAll(".reveal");

for(let i = 0; i < reveals.length; i++){

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 120;

if(elementTop < windowHeight - elementVisible){
reveals[i].classList.add("active");
}

}

});


// Hide loader when page loads
window.addEventListener("load", function(){
const loader = document.getElementById("loader");

if(loader){
loader.style.opacity = "0";

setTimeout(()=>{
loader.style.display = "none";
},500);
}

});


// Mobile menu toggle
function toggleMenu(){
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}

// Close menu when clicking a link
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-links").classList.remove("show");
  });
});


// Navigation highlight on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;
const sectionHeight = section.offsetHeight;

if(window.scrollY >= sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});


// Navbar shadow on scroll
window.addEventListener("scroll", function(){

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}

});

function openForm(){
document.getElementById("appointmentForm").style.display = "flex";
}

function closeForm(){
document.getElementById("appointmentForm").style.display = "none";
}

// function sendToWhatsApp(){

// let name = document.getElementById("name").value;
// let phone = document.getElementById("phone").value;

// let message = `Hello, I want to book an appointment.%0AName: ${name}%0APhone: ${phone}`;

// let whatsappURL = "https://wa.me/919948755458?text=" + message;

// window.open(whatsappURL, "_blank");

// }

function sendToWhatsApp() {
  var name = document.getElementById("name").value.trim();
  var phone = document.getElementById("phone").value.trim();

  // Name validation
  if (name.length < 3) {
    alert("Please enter valid name (minimum 3 letters)");
    return;
  }

  // Phone validation (10 digits only)
  var phonePattern = /^[0-9]{10}$/;

  if (!phonePattern.test(phone)) {
    alert("Please enter valid 10-digit phone number");
    return;
  }

  // WhatsApp message
  var message = "Hello, I want to book an appointment.\nName: " + name + "\nPhone: " + phone;

  var whatsappURL = "https://wa.me/918187888979?text=" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
}



window.onload = function () {
  const baseExperience = 6; // doctor actual experience NOW
  const baseYear = 2026;

  const currentYear = new Date().getFullYear();
  const experience = baseExperience + (currentYear - baseYear);

  // 👇 Doctor section (exact years)
  document.getElementById("exp-years").innerText = experience + " Years";

  // 👇 Top stats (one less + "+")
  document.getElementById("experience").innerText = (experience - 1) + "+";
};

// ! iMAGE SCROLL FOR GALLERY IMAGEGES
// document.addEventListener("DOMContentLoaded", function () {
//     const slider = document.querySelector(".slide-track");

//     let isPaused = false;

//     slider.addEventListener("click", function () {
//         if (isPaused) {
//             slider.style.animationPlayState = "running";
//         } else {
//             slider.style.animationPlayState = "paused";
//         }
//         isPaused = !isPaused;
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slide-track");

    if (window.matchMedia("(hover: none)").matches) {
        let isPaused = false;

        slider.addEventListener("click", function () {
            if (isPaused) {
                slider.style.animationPlayState = "running";
            } else {
                slider.style.animationPlayState = "paused";
            }
            isPaused = !isPaused;
        });
    }
});