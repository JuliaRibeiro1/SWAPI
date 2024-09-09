import fetchData from "./fetch.js";
import moviesImages from "./movieImagesData.js";
import addBtnClass from "./Utils/addBtnClass.js";
import rating from "./Utils/rating.js";

let nameMovie = document.querySelector("#movie_name");
let release_date = document.querySelector("#release_date");
let main_movie_section = document.querySelector(".main_movie_section");
let rating_container = document.querySelector(".rating_container");
let movies_carousel = document.querySelector(".movies_carousel");

function findMovieImg(episodeId) {
    let movie = moviesImages.find(movie => movie.id === episodeId);
    
    return movie.img ; // Garantir que `movie` não seja `undefined`
}

async function updateMovie(category, episode_id) {
    let nameMovie = document.querySelector("#movie_name");

    try {
        // Await the result of fetchData
        let data = await fetchData("films", "1");
        main_movie_section.style.backgroundImage = `url(${findMovieImg(episode_id)})`;

        if (data) {
     
            nameMovie.textContent = data.title;
            release_date.textContent = data.release_date;
        } else {
            console.error('No title found in data');
        }
    } catch (error) {
        console.error('Error updating movie:', error);
    }
}

function sortMoviesByReleaseDate(movies) {
    return movies.results.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
}

async function displayMovies() {
    try {
        const data = await fetchData("films");
        const sortedMovies = sortMoviesByReleaseDate(data);
        const fragment = document.createDocumentFragment();

        // Exemplo de exibição de filmes no console
        sortedMovies.map(item => {
            console.log(item);
            let movie = document.createElement("div");
            movie.className = "movie";
            movie.style.backgroundImage = `url(${findMovieImg(4)})`;
    
            movie.innerHTML = `
                <h4>${item.title}</h4>
                <h5>${item.release_date}</h5>`;
            
            // Adiciona cada filme ao fragmento
            fragment.appendChild(movie);
        });

        // Adiciona o fragmento ao DOM
        movies_carousel.appendChild(fragment);

    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
    }
}

// Chame displayMovies para exibir os filmes
displayMovies();

// Certifique-se de fornecer os parâmetros necessários para updateMovie
updateMovie("films", "1"); // Exemplo, substitua "1" pelo ID do filme desejado

// Adiciona as estrelas ao container
const stars = rating();
stars.forEach(star => {
    rating_container.appendChild(star);
});

// Adiciona classe aos botões
addBtnClass("main_movie_section");
