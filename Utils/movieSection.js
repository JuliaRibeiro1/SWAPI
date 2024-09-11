

export default function movieSection(name,date) {
    // Verifica se o elemento já existe no DOM
    let section;
    let main = document.querySelector("main")
    console.log(main)
    // Se não existir, cria o elemento e o adiciona ao DOM

        section = document.createElement("section");
        section.className = "main_movie_section";
        


    // Atualiza o conteúdo do elemento
    section.innerHTML = `
        <h1 id="movie_name">${name}</h1>
        <h2 id="release_date">${date}</h2>
        <div class="rating_container"></div>
    `;
console.log(section.innerHTML)
    main.prepend(section);
}
