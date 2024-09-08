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

export default rating
