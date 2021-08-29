document.getElementById('search-btn').addEventListener('click',()=>{
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value
    inputField.value = ''
    console.log(inputText);
    if (inputText == '') {
        alert('please Enter valid food name')
    }else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
        fetch(url) 
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
    }
})




const displayMeal = meal =>{
    console.log(meal);
  
    const mealDiv = document.getElementById('meals');
    mealDiv.textContent = '';
    if (meal == null) {        
     
    }
   else{
    meal.forEach(food=> {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="mealDetails(${food.idMeal})" class="card  h-100 border-0 p-3 shadow-lg rounded-3">
                <img class='img-fluid rounded-3' src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${food.strMeal}</h5>
                  <p class="card-text">${food.strInstructions.slice(0,100)}</p>
                </div>
            </div>
        `
        mealDiv.appendChild(div);
    });
   }
}



const mealDetails = (id)=>{
    console.log(id);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data=> details(data.meals[0]))
}



const details = (info)=>{
    console.log(info);
      const cardDetails = document.getElementById('card-details');
      cardDetails.innerHTML = `
      <div class='col'>
      <div  class="card mx-auto" style="width: 18rem;">
      <img src="${info.strMealThumb}" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
        <h5 class="card-title">${info.strMeal}</h5>
        <p class="card-text">${info.strInstructions.slice(0,150)}</p>
        <a href="${info.strYoutube}" class="btn btn-primary">see on youtube</a>
      </div>
    </div>
      </div>
      `
}