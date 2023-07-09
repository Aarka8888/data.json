
const containerSearch = document.querySelector('.Container-Search');
const input = containerSearch.querySelector('#main');
const select = containerSearch.querySelector('.select');

// Add event listener to the search button
input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    search();
  }
});


async function getWords() {
    const response = await fetch('./words.json')
    const data = await response.json();
    console.log(data)
   return data;
  }
  
   getWords();

// Function to perform the search
// function search() {
//   const searchWords = input.value;
//   const selectedFeature = select.value;
  
 
//   }
  

