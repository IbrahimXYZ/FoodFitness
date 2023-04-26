const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '802783ea7dmshc95c0811543dd5cp19f785jsnd5006bd571bb',
		'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
	}
};

const button = document.getElementById('nutri-btn');
const searchInput = document.getElementById('nutri-srch');
const container = document.querySelector('.nutritionContainer__Information');






button.addEventListener('click', ()=>{
	fetch('https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=' + searchInput.value, options)
	.then(response => response.json())
	.then(data => {
		container.innerHTML = ""
		const list = data;
		list.map((item)=>{
			const name = item.name;
			const calories = item.calories;
			const servingSize = item.serving_size_g;
			const fatTotal = item.fat_total_g;
			const fatSaturated = item.fat_saturated_g;
			const protein = item.protein_g;
			const sodium = item.sodium_mg;
			const potassium = item.potassium_mg;
			const cholestrol = item.cholestrol_mg;
			const carbohydrates = item.carbohydrates_total_g;
			const fiber = item.fiber_g;
			const sugar = item.sugar_g;
			const label = `
							<ul>
							<li><h1>${name}</h1></li>
							<li>Calories : ${calories}</li>
							<li>Serving Size (g) : ${servingSize}</li>
							<li>Total Fat (g) : ${fatTotal}</li>
							<li>Saturated Fat (g) ${fatSaturated}</li>
							<li>Protein (g) : ${protein}</li>
							<li>Sodium (mg) : ${sodium}</li>
							<li>Potassium (mg) : ${potassium}</li>
							<li>Cholestrol (mg) : ${cholestrol}</li>
							<li>Carbohydrates (mg) : ${carbohydrates}</li>
							<li>Fiber (g) : ${fiber}</li>
							<li>Sugar (g) : ${sugar}</li>
							</ul> `

			container.innerHTML += label})
})})




/*

function getNutrition(food){
	
	fetch('https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=' + food, options)
	.then(response => response.json())
	.then(data => {
		
		const list = data;
		list.map((item)=>{
			const name = item.name;
			const calories = item.calories;
			const servingSize = item.serving_size_g;
			const fatTotal = item.fat_total_g;
			const fatSaturated = item.fat_saturated_g;
			const protein = item.protein_g;
			const sodium = item.sodium_mg;
			const potassium = item.potassium_mg;
			const cholestrol = item.cholestrol_mg;
			const carbohydrates = item.carbohydrates_total_g;
			const fiber = item.fiber_g;
			const sugar = item.sugar_g;
			const label = `
							<ul>
							<li>${name}</li>
							<li>Calories : ${calories}</li>
							<li>Serving Size (g) : ${servingSize}</li>
							<li>Total Fat (g) : ${fatTotal}</li>
							<li>Saturated Fat (g) ${fatSaturated}</li>
							<li>Protein (g) : ${protein}</li>
							<li>Sodium (mg) : ${sodium}</li>
							<li>Potassium (mg) : ${potassium}</li>
							<li>Cholestrol (mg) : ${cholestrol}</li>
							<li>Carbohydrates (mg) : ${carbohydrates}</li>
							<li>Fiber (g) : ${fiber}</li>
							<li>Sugar (g) : ${sugar}</li>
							</ul> `

			container.innerHTML += label
		})
		
	})

}*/