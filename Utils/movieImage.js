import moviesImages from "../movieImagesData.js";

function findMovieImg(id) {
    let movie = moviesImages.find(movie => movie.id === id);
    
    return movie.img ; 
}

export function updateMovieImg(element,id) {
    let imgUrl = findMovieImg(id);
    if (imgUrl) {
        return element.style.backgroundImage = `url(${imgUrl})`;
    } else {
        console.error('Image not found for ID:', id);
    }

}
