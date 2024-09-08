import watchListBtn from "./watchListBtn.js"


function addBtnClass(className) {
    const button = watchListBtn()
    const container = document.querySelector(`.${className}`)
    if(container) {
        return container.appendChild(button)
    }
    
}

export default addBtnClass