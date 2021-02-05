class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
    // this.isMorning = false;
  }
  greetCustomer(name, isMorning) {
    if (isMorning) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }
  checkForFood(foodItem) {
    var type = foodItem.type;
    var itemName = foodItem.name;
    var confirm = false;

    for (var i = 0; i < this.restaurant.menus[type].length; i++) {
      if (itemName === this.restaurant.menus[type][i].name) {
        confirm = true;
      } else {
        return false;
      }
    }
    
    if (confirm) {
      return `Yes, we're serving ${itemName} today!`
    } else {
      return `Sorry, we aren't serving ${itemName} today.`
    }
  }
}

module.exports = Chef;