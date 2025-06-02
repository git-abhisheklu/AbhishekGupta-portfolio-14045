//typewriter effect using JS
const dynamicContent=document.getElementById("dynamic-text");
console.log(dynamicContent);
const phrases=["Frontend developer...", "Student...", "Tech-enthusiast..."];
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

document.getElementById('scroll-down').addEventListener('click', function () {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});