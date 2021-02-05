// Adds delicious in front of menu name
function nameMenuItem(name) {
  return `Delicious ${name}`;
}

var burritoItem = nameMenuItem('Burrito');
var sushiItem = nameMenuItem('Pizza');
var tacoItem = nameMenuItem('Taco');

// Creates a menu object 
function createMenuItem(name, price, type) {
  var menuObj = {
    name: name,
    price: price,
    type: type,
  }
  return menuObj;
} 

// Adds only unique ingredient to array 
function addIngredients(ingredient, array) {
  if (array.includes(ingredient) === false) {
    array.push(ingredient);
  }
}

// Formats price by adding $ in front  
function formatPrice(price) {
  return `$${price}`;
}

// Decreases price by 10%
function decreasePrice(price) {
  var newPrice;

  newPrice = price - (price * .1);
  return newPrice;
}

// Creates recipe object 
function createRecipe(title, ingredients, type) {
  var recipeObj = {
    title: title,
    ingredients: ingredients,
    type: type,
  }
  return recipeObj;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


