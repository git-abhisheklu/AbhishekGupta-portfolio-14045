//typewriter effect using JS
const dynamicContent=document.getElementById("dynamic-text");
console.log(dynamicContent);
const phrases=["Software developer...", "Problem Solver...", "Lifelong Learner", "Tech-enthusiast..."];
let writeTiming=400;
let deleteTiming=100;
let phraseIndex=0;
let letterIndex = 0;
function printletters(phrase){
    if(letterIndex == phrase.length){
       clearletters(); 
    }
    else if( letterIndex < phrase.length) {
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex+= 1;
        setTimeout( function() {
            printletters(phrase)
        },writeTiming )
    }
} 
function clearletters(){
    if(letterIndex== -1){
        phraseIndex = (phraseIndex+1) % phrases.length;
        letterIndex=0;
        printletters(phrases[phraseIndex]);

    }
    else if (letterIndex > -1){
        updatedPhrase= "";
        for(let index=0; index<letterIndex; index++){
            updatedPhrase+=phrases[phraseIndex].charAt(index);
        }
        dynamicContent.textContent=updatedPhrase;
        letterIndex-=1;
        setTimeout(clearletters,deleteTiming);
    }

}
printletters(phrases[phraseIndex]);

// new feature 

// Navbar shadow on scroll
const navbar = document.querySelector('.glass-nav');
window.addEventListener('scroll', () => {
    if(window.scrollY > 10) {
        navbar.classList.add('sticky-shadow');
    } else {
        navbar.classList.remove('sticky-shadow');
    }
});

// Section fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.15 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => { appearOnScroll.observe(fader); });

// Contact form success message
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-success').style.display = 'block';
    this.reset();
});
 
document.getElementById('scroll-up').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ...existing code...

document.getElementById('scroll-down').addEventListener('click', function () {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});

// Theme toggle logic
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light");
});

// Persist theme on reload
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
    }
});

// ...existing code...

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;

  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  // Clear previous error messages
  document.getElementById('email-error').textContent = '';
  document.getElementById('subject-error').textContent = '';
  document.getElementById('message-error').textContent = '';

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.value.trim()) {
    document.getElementById('email-error').textContent = 'Email is required.';
    valid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    document.getElementById('email-error').textContent = 'Invalid email format.';
    valid = false;
  }

  if (!subject.value.trim()) {
    document.getElementById('subject-error').textContent = 'Subject is required.';
    valid = false;
  }

  if (!message.value.trim()) {
    document.getElementById('message-error').textContent = 'Message is required.';
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully!');
    document.getElementById('contact-form').reset();
  }
});

// ...existing code...
