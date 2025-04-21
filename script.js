// JavaScript for smooth scrolling  
function scrollToSection(sectionId) {  
    const section = document.getElementById(sectionId);  
    if (section) {  
        section.scrollIntoView({ behavior: 'smooth' });  
    }  
}  

// Adding click event listeners to the list items  
document.getElementById('about').onclick = function() {  
    scrollToSection('about');  
};  

document.getElementById('journey').onclick = function() {  
    scrollToSection('journey');  
};  

document.getElementById('goals').onclick = function() {  
    scrollToSection('goals');  
};  