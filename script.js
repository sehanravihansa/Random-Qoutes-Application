const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const buttonElement = document.getElementById('new-quote');

// Function to fetch a new quote
async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        quoteElement.innerText = `"${data.content}"`;
        authorElement.innerText = `- ${data.author}`;
    } catch (error) {
        console.error('Fetch error:', error);
        quoteElement.innerText = "Failed to fetch a quote.";
        authorElement.innerText = "";
    }
}

// Event listener for the button
buttonElement.addEventListener('click', fetchQuote);

// Fetch an initial quote when the page loads
fetchQuote();