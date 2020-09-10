const fetchAPI = (movieName) => {
  const url = `http://www.omdbapi.com/?s=${movieName}&apikey=adf1f2d7`;

  fetch(url)
    // String em ruby
    // string.to_hash
    .then(response => response.json())
    .then((data) => {
      // Com esses dados, eu quero atualizar o meu DOM
      const movies = data.Search;
      // 1. Selecionar o elemento
      // const ul = document.getElementById('results')
      const ul = document.querySelector('ul#results');
      
      ul.innerHTML = '';

      movies.forEach( (movie) => {
        ul.insertAdjacentHTML('beforeend', `
          <li> 
            <p>
              ${movie.Title} - ${movie.Year} 
            </p> 
            <img src="${movie.Poster}">
          </li>
        `);
  
      });
    });
  
}


// 1. selecionar elemento
const form = document.querySelector('form#search-movies');
// 2 adicionar o event listener
// form.addEventListener('tipo do evento', função callback)
form.addEventListener('submit', (event) => {
  // 3 realizar o comportamento
  event.preventDefault();
  const input = form.querySelector('#keyword');
  const movieName = input.value;
  fetchAPI(movieName);
});
