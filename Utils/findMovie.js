function findMovie(storedMovies, id) {
    const currentMovie = storedMovies.results.find(movie => movie.episode_id == id)
    return currentMovie
}

export default findMovie

