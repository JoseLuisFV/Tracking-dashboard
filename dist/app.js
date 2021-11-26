
const getData = (path) => {
    return fetch(path)
        .then(response => {
            return response.json();
        })
} 

const createApp = async() => {
    const data = await getData("./data.json")
    data.forEach(item => {
        console.log(item.title);
    });
}

createApp();