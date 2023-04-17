// Get the header element
const header = document.querySelector('header');
console.log(header);

// Get all the section elements
const sections = document.querySelectorAll('section');
console.log(sections);

// Get the section element with class="current"
const currentSection = document.querySelector('section.current');
console.log(currentSection);

// Get the section that comes after the current section
const nextSection = currentSection.nextElementSibling;
console.log(nextSection);

// Get the h2 node from the section before the 'current' section
const previousSectionH2 = currentSection.previousElementSibling.querySelector('h2');
console.log(previousSectionH2);

// Get the div that contains the section that has an h2 with a class of 'highlight'
const highlightDiv = document.querySelector('h2.highlight').parentElement.parentElement;
console.log(highlightDiv);

// Get all the sections that contain an H2 (using a single statement);
const sectionsWithH2 = document.querySelectorAll('section:has(h2)');
console.log(sectionsWithH2);
