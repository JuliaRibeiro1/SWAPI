import fetchData from "./fetch.js"
import moviesImages from "./movieImagesData.js"
import addBtnClass from "./Utils/addBtnClass.js"
import rating from "./Utils/rating.js"

let nameMovie = document.querySelector("#movie_name")
let release_date = document.querySelector("#release_date")
let main_movie_section = document.querySelector(".main_movie_section")
let rating_container = document.querySelector(".rating_container")
let all_movies_section = document.querySelector(".all_movies_section")


function findMovieImg(episodeId) {
    let movie = moviesImages.find(movie => movie.id == episodeId)
    return movie.img
}
async function updateMovie() {
    let nameMovie = document.querySelector("#movie_name");

    try {
        // Await the result of fetchData
        let data = await fetchData("films", "1");
        main_movie_section.style.backgroundImage = `url(${findMovieImg(data.episode_id)})`

        if (data) {
            console.log(data)
            nameMovie.textContent = data.title
            release_date.textContent = data.release_date
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
        console.log(data)
        const sortedMovies = sortMoviesByReleaseDate(data);
        
        // Exemplo de exibição de filmes no console
        sortedMovies.map(item=> {
            let movie = document.createElement("div")
            movie.style.backgroundImage = `url(${findMovieImg(item.episode_id)})`
            movie.innerHTML = `
                <h4>${item.title}</h4>
                <h5>${item.release_date}</h5>`
            
            all_movies_section.appendChild(movie)
        });

        // Você pode adicionar os filmes ao DOM ou fazer outras manipulações conforme necessário
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
    }
}

displayMovies()
// Call the async function to fetch and display the movie title
updateMovie();
const stars = rating()
stars.map(item => {
    rating_container.append(item)
})

addBtnClass("main_movie_section")
