document.querySelector('.search-btn').addEventListener('click', async() => {
  let word = document.querySelector('#main');
  let option = document.querySelector('.select').value;
  let resultsDiv = document.querySelector('#results');

  let response = await fetch('./words.json');
  let words = await response.json();

  const wordData = words.find(w => w.word === word.value);
  
  if (!wordData) {
    resultsDiv.innerHTML = '<P>This word does not exist</p>';
    word.value ="";
    return;
  }
  
  let html = `<h2>${wordData.word}</h2>`;

  if (option === 'definition' || option === 'all'){
    html += `<p><strong>Definition:</strong> ${wordData.definition}</p>`
  }

  if(option === 'examples' ||option === 'all'){
    html += `<p><strong>Examples:</strong> ${wordData.examples.join('<br')}</p>`
  }

  if(option === 'synonyms' ||option === 'all'){
    html += `<p><strong>Synonyms:</strong> ${wordData.synonyms.join('<br')}</p>`
  }

  if(option === 'antonyms' ||option === 'all'){
    html += `<p><strong>Antonyms:</strong> ${wordData.antonyms.join('<br')}</p>`
  }
  
  

  html +=`<input type="checkbox" id="memorize-${wordData.word}"> Keep This Word`;

  resultsDiv.innerHTML = html;

  let memorizedWord = JSON.parse(localStorage.getItem('memorizedWords')) || [];
  const memorizedIndex = memorizedWord.map(e => e.word).indexOf(wordData.word);
  
  

  document.querySelector(`#memorize-${wordData.word}`).checked = memorizedIndex > -1;
  document.querySelector(`#memorize-${wordData.word}`).addEventListener('change', (e) => {

    let memorizedWords = JSON.parse(localStorage.getItem('memorizedWords')) || [];

    if(e.target.checked){
      const index = memorizedWords.map(e => e.word).indexOf(wordData.word);

      if(index === -1){
        memorizedWords.push(wordData);
      }

    }else{

      // console.log(wordData);

      const index = memorizedWords.map(e => e.word).indexOf(wordData.word);

      if(index > -1){
        memorizedWords.splice(index, 1);
      }  
    }
    localStorage.setItem('memorizedWords', JSON.stringify(memorizedWords));
    
  });

});
  
  





