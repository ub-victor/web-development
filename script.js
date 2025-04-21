unction scrollToSection(sectionId) {  
    const section = document.getElementById(sectionId);  
    if (section) {  
        section.scrollIntoView({ behavior: 'smooth' });  
    }  
}  

document.getElementById('goals').onclick = function() {  
    scrollToSection('goals');  
};