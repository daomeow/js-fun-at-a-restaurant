// Adds only up to three orders to the array
function takeOrder(order, array) {
  if (array.length < 3) {
    array.push(order);  
  }
}

// Removes order from array by order number 
function refundOrder(num, array) {
  for (var i = 0; i < array.length; i++) {
    if (num === array[i].orderNumber) {
      array.splice(i, 1)
    }
  }
}

// Lists menu items by its name 
function listItems(order) {
  var itemList = "";

  for (var i = 0; i < order.length; i++) {
    if (i < 0) {
      itemList += `, ${order[i].item}` 
    } else {
      itemList += order[i].list
    }
  }
  return itemList;
}

// Confirm if item is in the order array 
function searchOrder(order, checkItem) {
  var confirm = false;
  
  for (var i = 0; i < order.length; i++) {
    if (order[i].item === checkItem) {
      confirm = true;
    } 
  }
  return confirm;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
