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
