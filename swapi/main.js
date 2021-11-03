const getResidentBtn = document.querySelector('button')
getResidentBtn.addEventListener('click', () => {
    console.log("button clicked")
    
    axios.get('https://swapi.dev/api/planets/2')
    .then((response) => {
        console.log(response.data.population)
    })

})