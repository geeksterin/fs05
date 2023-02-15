/*------------Points
1. Creating a card ---> image,title,imdb,overview.
2. Every card represents 1 movie which we are fetching from IMDB Api
3. Transition effect on the overview only visible on hover.
4. Searching the movie based on keyword.(Already implemented in searchbar).
5. Color of imdb rating should be red if rating <6 yellow if 6<rating<8 green >8
*/

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const container = document.querySelector('.container');

async function fetchMovies(){

  try {
    const res = await (await fetch(API_URL)).json();
    console.log('res is',res);
    createMovies(res.results);
  } catch (error) {
    container.innerHTML = `<h2>We are experiencing!!</h2>`
  }

}

fetchMovies();

function createMovies(movies){
    container.innerHTML =``;
    movies.forEach((movie)=>{

      const {title,poster_path,overview,vote_average} = movie;
      const movieDiv = document.createElement('div');
      movieDiv.classList.add('movie');
      movieDiv.innerHTML = `
        <img src=${IMG_PATH+poster_path}></img>
          <div class='movie-info'>
            <h3 class='title'>${title}</h3>
            <h3 class='${colorRating(vote_average)}'>${vote_average}</h3>
          </div>
          <div class='overview'>
            <h3>Overview</h3>
            ${overview}
          </div>
        `
      container.append(movieDiv);
    });
}

function colorRating(imdb){

  if(imdb>=8)
    return 'green';
  else if(imdb>6&&imdb<8){
    return 'yellow';
  }
  else
    return 'red';
}

