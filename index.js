
import addBtnClass from "./Utils/addBtnClass.js";
import findMovie from "./Utils/findMovie.js";
import { updateMovieImg } from "./Utils/movieImage.js";
import { appendRating } from "./Utils/rating.js";
import {storeData} from "./Utils/storeData.js"


const nameMovie = document.querySelector("#movie_name");
const release_date = document.querySelector("#release_date");
const main_movie_section = document.querySelector(".main_movie_section");
const movies_carousel = document.querySelector(".movies_carousel");


function updateMovie(movies, id) {
    const currentMovie = findMovie(movies, id);
    if (currentMovie) {
        updateMovieImg(main_movie_section, id);
        nameMovie.textContent = currentMovie.title;
        release_date.textContent = currentMovie.release_date;

        main_movie_section.addEventListener("click", () => {
            window.location.href = `movieDetails.html?id=${id}`;
        });
    } else {
        console.error('Filme não encontrado.');
    }
}

function displayMovies(movies) {
    console.log(movies)   
     const sortedMovies = movies.results.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    const fragment = document.createDocumentFragment();

    sortedMovies.forEach(item => {
        const movieElement = document.createElement("div");
        movieElement.className = "movie";
        updateMovieImg(movieElement, item.episode_id);
        movieElement.innerHTML = `
            <h4>${item.title}</h4>
            <h5>${item.release_date}</h5>`;

        movieElement.addEventListener("click", () => updateMovie(movies,item.episode_id));
        fragment.appendChild(movieElement);
    });

    movies_carousel.appendChild(fragment);
}

(async () => {
    const movies = await storeData();
    if (movies) {
        updateMovie(movies,4);
        displayMovies(movies);
    }
    appendRating();
    addBtnClass("main_movie_section");
})();
