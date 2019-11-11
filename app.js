// Create the Module for the Data Structuring.
// module keeps piece of code which is related together. Our code will be safe. 
// Data Encapsulation allows us to hide the implementation details from a specific module  from outside the scope.
// BUDGET CONTROLLER
let budgetController = (function() {
    //  some code 
})();



// UI CONTROLLER.
let UIController = (function() {

    return {
        getInput: function() {
            return {
                type: document.querySelector('.add__type').value, // Will be either inc or exp
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value,
            };


        }
    }
})();





//GLOBAL APP CONTROLLER.
let controller = (function(budgetCtl, UICtl) {
    let ctrlAddItem = function() {
        // 1. Get the input data.
        let input = UICtl.getInput();
        console.log(input);
        // 2. Add the item to the budget controller.

        // 3. Add the item to the UI 

        // 4. Calculate the budget

        // 5. Display the budget on the UI.

    }
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);