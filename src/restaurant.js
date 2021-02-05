function createRestaurant(name) {
  var obj = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return obj;
}

// Adds item to correct menu type with no repeats 
function addMenuItem(restaurant, foodInfo) {
  var type = foodInfo.type;
  
  if (restaurant.menus[type] && !restaurant.menus[type].includes(foodInfo)) {
    restaurant.menus[type].push(foodInfo)
  }
}

//Confirms menu item's existence and removes item by index
function removeMenuItem(restaurant, food, type) {
  var foodIndex;

  for (var i = 0; i < restaurant.menus[type].length; i++) {
    if (restaurant.menus[type][i].name === food) {
      foodIndex = i;
    }
  }

  if (foodIndex >= 0 && restaurant.menus[type]) {
    restaurant.menus[type].splice(foodIndex, 1);
    return `No one is eating our ${food} - it has been removed from the ${type} menu!`;
  } else {
    return `Sorry, we don't sell ${food}, try adding a new recipe!`
  }
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}