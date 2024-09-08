async function fetchData(category, id = "") {
    try {
        const response = await fetch(`https://swapi.dev/api/${category}/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data 
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
export default fetchData