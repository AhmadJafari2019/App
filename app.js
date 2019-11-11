// Create the Module for the Data Structuring.
// module keeps piece of code which is related together. Our code will be safe. 
// Data Encapsulation allows us to hide the implementation details from a specific module  from outside the scope.

let budgetController = (function() {
    let x = 23;
    let add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return (add(b));
        }
    }
})();

//Creating another Module for the User Interface Data.

let UIController = (function() {

})();

//Create the Third module to connect the first and second module together.

let controller = (function(budgetCtl, UICtl) {

    let z = budgetCtl.publicTest(5);
    return {
        anotherPublic: function() {
            console.log(z);
        }
    }
})(budgetController, UIController);