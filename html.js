// script.js
const facts = [
    "Albania has tens of thousands of concrete bunkers built across the country during the Cold War.",
    "Mother Teresa, the famous Catholic nun and missionary, was of Albanian descent.",
    "The Albanian language (Shqip) is a completely unique branch of the Indo-European language family with no close living relatives.",
    "There are more ethnic Albanians living outside of Albania than within the country's borders.",
    "Lake Ohrid, shared with North Macedonia, is one of Europe's deepest and oldest lakes.",
    "Albania is highly mountainous, with about 70% of its territory covered by mountains and hills."
];

const factBtn = document.getElementById('fact-btn');
const factDisplay = document.getElementById('fact-display');

factBtn.addEventListener('click', () => {
    // Pick a random number based on the length of the facts array
    const randomIndex = Math.floor(Math.random() * facts.length);
    
    // Update the text on the page
    factDisplay.textContent = facts[randomIndex];
});




