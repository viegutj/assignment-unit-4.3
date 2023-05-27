console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []

function addItem(item) {
    basket.push(item)
    return true
}
//testing addItem()
console.log("Test - item has been added:", addItem("potato"), "Basket now has:", basket);

function listItems() {
    console.log("This is a list of the items in the basket:");
    for (let i = 0; i < basket.length; i++) {
        console.log(`${basket[i]}`);
    }
    
}

//Testing listItems()
listItems()
// NOTE: I cannot find a way to console.log listItems()
// without printing an "undefined" at the end of my list.
// I can add a return value of "" to eliminate the "undefined",
// but then I get a blank line. Any advice?

function empty () {
    return basket = [];
}

console.log("This is an empty array:", empty());

//STETCH GOALS

// 2. Add a global const named maxItems and set it to 5.

// The code seems to think maxItems already exists?
// I cannot declare it using const, or I will get an error
// message "Variable declaration expected.ts(1134)".
maxItems = 5


// 3. Create a function called isFull(). It should:
// return false if the basket contains less than max number of items
// return true otherwise (equal or more than maxItems)
function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
}
console.log("Is the basket full?", isFull());

// 3. Update the required addItem function to:
// Use the isFull function to prevent more than maxItems from being added to the basket.
// If an item was added to the array, return true
// If there was no room and the item could not be added return false

function addItem(item) {
    if (basket.length < 5) {
        basket.push(item);
        return true;
    } else {
        console.log('no room for new items');
        return false;
    }
}
console.log("here we add a new item", addItem("veggie"));

4. // Create a function called removeItem. It should:
// Take an input parameter for a string item
// Use Array.indexOf to find the index of the first matching item in the basket.
// Use Array.splice to remove the first matching item from the basket.
// Return the item removed or null if the item was not found

// Not sure what I'm doing wrong on this one. Would love to talk it over! :)

function removeItem(item) {
    console.log(basket.indexOf(item));
    for (let i = 0; i < basket.length; i++) 
    if (basket.length > -1) {
        console.log(basket.splice(item));
        return "item removed"
    } else {
        return "null"
    }
}


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
