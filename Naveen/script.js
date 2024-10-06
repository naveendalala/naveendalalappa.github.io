// Typing effect
const typingText = ["Software Developer", "Java Expert", "Python Developer", "Cloud Engineer , Data Analyst"];
let index = 0;
let charIndex = 0;
let currentText = '';
const typingSpeed = 100;
const erasingSpeed = 50;
const delay = 2000;

function type() {
  if (charIndex < typingText[index].length) {
    currentText += typingText[index].charAt(charIndex);
    document.getElementById('typing-text').textContent = currentText;
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delay);
  }
}

function erase() {
  if (charIndex > 0) {
    currentText = typingText[index].substring(0, charIndex - 1);
    document.getElementById('typing-text').textContent = currentText;
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    index = (index + 1) % typingText.length;
    setTimeout(type, typingSpeed);
  }
}

// Project filtering
const projectCards = document.querySelectorAll('.project');
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    projectCards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    
    // Update active filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Animated skill progress bars
const skills = document.querySelectorAll('.progress-bar .progress');

function animateSkills() {
  skills.forEach(skill => {
    const value = skill.getAttribute('style').split(':')[1].trim().split('%')[0];
    skill.style.width = '0%';
    setTimeout(() => {
      skill.style.width = value + '%';
    }, 300);
  });
}

// Dark mode toggle
const toggleSwitch = document.getElementById('dark-mode-toggle');
toggleSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// Initialize AOS
AOS.init();

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, delay);
  animateSkills();
});

window.addEventListener('scroll', function() {
  const skillsSection = document.getElementById('skills');
  const sectionPosition = skillsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (sectionPosition < screenPosition) {
    animateSkills();
  }
});

// Form submission (you can add your own logic here)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // Add your form submission logic here
  console.log('Form submitted');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});