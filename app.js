// Create the Module for the Data Structuring.
// module keeps piece of code which is related together. Our code will be safe. 
// Data Encapsulation allows us to hide the implementation details from a specific module  from outside the scope.
// BUDGET CONTROLLER
let budgetController = (function() {
    // Store the inc and Exp in the BudgetController through a constructor function 
    let Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    let Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    let data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        }
    };
})();



// UI CONTROLLER.
let UIController = (function() {
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',

    }
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();





//GLOBAL APP CONTROLLER.
let controller = (function(budgetCtrl, UICtrl) {

    let setupEventListeners = function() {
        let DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    }
    let ctrlAddItem = function() {
        // 1. Get the input data.
        let input = UICtrl.getInput();
        console.log(input);
        // 2. Add the item to the budget controller.

        // 3. Add the item to the UI 

        // 4. Calculate the budget

        // 5. Display the budget on the UI.

    };
    return {
        init: function() {
            console.log('APPLICATION has started.');
            setupEventListeners();
        }
    }
})(budgetController, UIController);

controller.init();