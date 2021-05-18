let foodToSearch = null;

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
  //--- write your code below ---
  
  const YOUR_APP_ID = "85d046ab"
  const YOUR_APP_KEY = "428e0aff805c6b3a13b3ddb85bede71f"
  //const searchForm = document.querySelector('form');
  //const searchResultSection = document.getElementById('search-result');
  //const recipeSection = document.getElementById('recipe-section');
     //use fetch to do GET request for recipe 
     const requestUrl = await fetch(`https://api.edamam.com/search?q=${foodToSearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&to=3`);
     //console.log(requestUrl);
     const dataResponse = await requestUrl.json();
     // only grabs the hits array from the response
     //generateRecipeResults(dataResponse.hits);
     console.log(dataResponse);
     console.log()
   }


//id=${e1ab90c6}&app_key=${56debef21ba9e1490ecdf992ad519e1f