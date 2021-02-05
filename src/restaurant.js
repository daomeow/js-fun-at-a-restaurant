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
                               

function removeMenuItem(restaurant, food, menu) {
  if (food === restaurant.menus.breakfast[0].name) {
    restaurant.menus.breakfast.splice(0, 1);
  } else if (food === restaurant.menus.lunch[0].name) {
    restaurant.menus.lunch.splice(0, 1);
  } else if (food === restaurant.menus.dinner[0].name) {
    restaurant.menus.dinner.splice(0, 1);
  } else {
    return `Sorry, we don't sell ${food}, try adding a new recipe!`;
  }
  return `No one is eating our ${food} - it has been removed from the ${menu} menu!`;
}



module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}