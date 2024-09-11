import addBtnClass from "./Utils/addBtnClass.js";
import findMovie from "./Utils/findMovie.js";
import { storeData } from "./Utils/storeData.js";
import { updateMovieImg } from "./Utils/movieImage.js";
import movieSection from "./Utils/movieSection.js";
import { appendRating } from "./Utils/rating.js";


const producerContainer = document.querySelector(".producer_container");
const directorContainer = document.querySelector(".director_container");
const episodeContainer = document.querySelector(".episode_container");

function getMovieIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function renderMovieDetails(movie) {
    if (movie) {
        movieSection(movie.title, movie.release_date);
        document.querySelector(".movie_summary_section").innerHTML = `<p>${movie.opening_crawl}</p>`;
        episodeContainer.innerHTML = `<h3>Episode - ${movie.episode_id}</h3>`;
        
        const mainMovieSection = document.querySelector(".main_movie_section");
        updateMovieImg(mainMovieSection, movie.episode_id);
        appendRating();
        addBtnClass("main_movie_section");
    }
}

function fillCategory(category, element, movie) {
    const fragment = document.createDocumentFragment();
    movie[category].split(",").map(name => name.trim()).forEach(name => {
        const itemElement = document.createElement("div");
        itemElement.innerText = name;
        itemElement.className = "purpleBorder";
        fragment.appendChild(itemElement);
    });
    element.appendChild(fragment);
}

(async () =>  {
    const movieId = getMovieIdFromURL();
    const storedMovies = await storeData();
    const currentMovie = findMovie(storedMovies, movieId);

    if (currentMovie) {
        renderMovieDetails(currentMovie);
        fillCategory("director", directorContainer, currentMovie);
        fillCategory("producer", producerContainer, currentMovie);
    } else {
        console.error("Filme não encontrado.");
    }
})()

