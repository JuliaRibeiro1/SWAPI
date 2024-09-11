let rating_container;

function rating() {
    let ratingArr = []
    for(let i = 0; i < 5; i++) {
        let star = document.createElement("button")
        star.className = "star"
        star.id = i+1
        ratingArr.push(star)
       
    }

    return ratingArr
    
}

export function appendRating() {
    rating_container = document.querySelector(".rating_container");
    const stars = rating();
    stars.forEach(star => {
        return rating_container.appendChild(star);
});
}



