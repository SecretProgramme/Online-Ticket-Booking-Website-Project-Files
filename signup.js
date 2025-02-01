alert("You are directed to SignUp Page");
// Array of header texts
const headerTexts = [
    "GET DISCOUNT ON YOUR FIRST BOOKING",
    "HURRY UP, BOOK FAST"
];

// Function to change the header text with a smooth fade-in/fade-out transition
function changeHeaderText() {
    const headerElement = document.getElementById("dynamic-header");
    let index = 0;

    setInterval(() => {
        // Fade out the current text
        headerElement.classList.add('hidden');

        // Wait for the fade-out to complete before changing the text
        setTimeout(() => {
            // Change the text content
            headerElement.textContent = headerTexts[index];

            // Fade in the new text
            headerElement.classList.remove('hidden');

            // Move to the next index, cycling through the array
            index = (index + 1) % headerTexts.length;
        }, 1000); // 1 second delay to match the fade-out duration
    }, 3000); // Change every 3 seconds
}

// Start changing the header text when the page loads
window.onload = changeHeaderText;
