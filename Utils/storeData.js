export async function storeData() {
    try {
        let storedMovies = localStorage.getItem('allMovies');
        if (!storedMovies) {
            const data = await fetchData("films");
            localStorage.setItem('allMovies', JSON.stringify(data));
            return data;
        }
        return JSON.parse(storedMovies);
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
    }
}