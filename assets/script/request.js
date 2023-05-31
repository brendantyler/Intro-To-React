'use strict';

import {select, print} from './utils.js';

const list = select('.moviePosters');
const url = './assets/script/movies.json';

function moviesPosters(array){
  list.innerHTML = '';
  let movies = '';

  if(array.length > 0){
    array.forEach(movie => {
      movies += `<img class="poster" src="./assets/img/${movie.img}" alt="${movie.name}">`;
    });
  } else {
    movies += `<li>Movies not Found</li>`;
  }

  list.innerHTML = `${movies}`;
}

async function getMovies(){
  try {
    const response = await fetch(url);
  
    if (!response.ok){
      throw new Error(`${response.statusText} (${response.status})`);
    }
  
    const { movies } = await response.json();
    print(movies);
    moviesPosters(movies);
    } catch (error){
      print(error.message);
    }
  }
  
  getMovies();  