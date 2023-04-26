const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8dbe6a0b37msh195c4d3a1a2456dp149ee1jsn3e9ce1b2c5f5',
		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
	}
};

const grid = document.querySelector('.recipes__cards');

const search = document.getElementById('rcp-btn');
const searchInput = document.getElementById('rcp-srch');


    

search.addEventListener('click',()=>{
    fetch(('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=' + searchInput.value), options)
	.then(response => response.json())
	.then(data => {
        grid.innerHTML = ''
        for(let i = 0;i< data.length;i++){
            
            const title = data[i].title;
            const ingredients = data[i].ingredients;
            const servings = data[i].servings;
            console.log(servings)
            const card = `<div class="card">
            <div class="title"><h1>${title}</h1></div>
            <div class="ingredients"><p>${ingredients}</p></div>
            <div class="servings"><p>${servings}</p></div>
        </div>`
            grid.innerHTML += card
        }
        });
})