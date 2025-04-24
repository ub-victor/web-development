// Get the current year
const currentYear = new Date().getFullYear();
// Display it in the footer
document.getElementById("current-year").textContent = currentYear;


// Change Background Color in Coding journey section 
function changeBackgroundColor(color) {
    let sections = document.getElementsByClassName("Coding-journey-section");
    // Apply style to all sections (though there's likely just one)

    /**
 * Changes the background color of all elements with the class "Coding-journey-section".
 * Applies a smooth transition effect to the background color change.
 *
 * @param {string} color - The new background color to apply (e.g., "red", "#ff0000", "rgb(255, 0, 0)").
 *
 * This function is useful for dynamically updating the appearance of specific sections on a webpage,
 * enhancing user experience by providing visual feedback or emphasizing certain areas.
 */

    for (let section of sections) {
        section.style.backgroundColor = color; 
        section.style.transition = "background-color 0.5s ease";
    }
}

// Get first element of each collection and add event listeners
document.querySelector(".intro").addEventListener('click', () => changeBackgroundColor("#2CA02C"));
document.querySelector(".react").addEventListener('click', () => changeBackgroundColor("#FF7F0E"));
document.querySelector(".backend").addEventListener('click', () => changeBackgroundColor("#9467BD"));   