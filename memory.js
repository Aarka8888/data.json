let words = JSON.parse(localStorage.getItem('memorizedWords')) || [];

let startIndex = 0;
let count = 5;

function displayWords() {
 
    let wordsApp = document.querySelector('#words-app')

    const batch = words.slice(startIndex, startIndex + count);
    startIndex += count;

    batch.forEach( word => {

        const wordData = `
        
        <h2>${word.word}</h2>
        <p><strong>Definition:</strong> ${word.definition}</p>
        <p><strong>Examples:</strong> ${word.examples.join('<br')}</p>
        <p><strong>Synonyms:</strong> ${word.synonyms.join('<br')}</p>
        <p><strong>Antonyms:</strong> ${word.antonyms.join('<br')}</p>
        `;

        wordsApp.innerHTML += wordData;
    })
}

displayWords();

window.addEventListener('scroll', () => {

    if (window.innerHTML + window.scrollY >= document.body.offsetHeight) {
        displayWords();
    }
});
