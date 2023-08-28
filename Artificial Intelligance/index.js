function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}
toggleMenu()
function robot(){

  var artifi = document.querySelector(".artifi");
  var image = document.querySelector(".artifi>img");

 artifi.addEventListener("mousemove",function(hover){
  image.style.top = hover.y * 0.05 + "px"
  image.style.left = hover.x *0.05 + "px"

 })
}
robot()

let scrollBtn = document.getElementById("scroll")
scrollBtn.addEventListener("click",()=>{
    
    window.scrollTo({
     top:0,
     behavior:"smooth"
    })
})        // Selecting form and input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date");
    const genderInput = document.getElementById("gender");

    // Getting trimmed values from input fields
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const date = dateInput.value;
    const gender = genderInput.value;

    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
    if (fullname === "") {
        showError(fullnameInput, "Enter your full name");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (password === "") {
        showError(passwordInput, "Enter your password");
    }
    if (date === "") {
        showError(dateInput, "Select your date of birth");
    }
    if (gender === "") {
        showError(genderInput, "Select your gender");
    }

    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Submitting the form
    form.submit();
}

// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// Handling form submission event
form.addEventListener("submit", handleFormData);

//function loco(){
//   gsap.registerPlugin(ScrollTrigger);

//   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("artifi"),
//     smooth: true
//   });
//   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//   locoScroll.on("scroll", ScrollTrigger.update);
  
//   // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
//   ScrollTrigger.scrollerProxy("artifi", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector("artifi").style.transform ? "transform" : "fixed"
//   });
  
  
//   // --- RED PANEL ---
//   gsap.from(".line-1", {
//     scrollTrigger: {
//       trigger: ".line-1",
//       scroller: ".smooth-scroll",
//       scrub: true,
//       start: "top bottom",
//       end: "top top",
//       onUpdate: self => console.log(self.direction)
//     },
//     scaleX: 0,
//     transformOrigin: "left center", 
//     ease: "none"
//   });
  
  
//   // --- ORANGE PANEL ---
//   gsap.from(".line-2", {
//     scrollTrigger: {
//       trigger: ".orange",
//       scroller: ".smooth-scroll",
//       scrub: true,
//       pin: true,
//       start: "top top",
//       end: "+=100%"
//     },
//     scaleX: 0, 
//     transformOrigin: "left center", 
//     ease: "none"
//   });
  
  
//   // --- PURPLE/GREEN PANEL ---
//   var tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".purple",
//         scroller: ".smooth-scroll",
//         scrub: true,
//         pin: true,
//         start: "top top",
//         end: "+=100%"
//       }
//     });
  
//   tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
//     .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
//     .to(".purple", {backgroundColor: "#28a92b"}, 0);
  
  
  
//   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
//   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//   ScrollTrigger.refresh();
// }