/* Lotto App Rules

1. Generate random numbers from 1 to 39
2. There are 7 numbers.
3. Each next number has to be higher then the previous one.

*/

// Module - Data Controller

var dataController = (function(){

    // var rNumber = Math.floor((Math.random() * 39));

    return {

        // method that will give us a sorted array of 7 numbers to display.
        getNumbers: function(){

            let numbers = [];

            for (let i = 0; i < 200; i++) {

            let r = Math.floor(Math.random() * 39 + 1);

            if (numbers.indexOf(r) === -1 && numbers.length < 7) {
                                    numbers.push(r);
                                }

                            }

            function compare(a, b) {
                return a - b;
            }

            numbersSorted = numbers.sort(compare);

            return numbersSorted;


        }
    }

})();

// Module - App Controller

var controller = (function(dataCtrl){

    var nodeListForEach = function(list, callback) { // this is a piece of reusable code, each time we have a node list we can call this function to loop over it.
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i); // passed current and index to this function. power of first class functions.
        }
    };

    const DOMstrings = {
        button: ".btn",
        numbers: ".numbers__item"
    };

    var setupEventListeners = function() {

        document.querySelector(DOMstrings.button).addEventListener('click', rollTheBones);
    }

    var rollTheBones = function() {

        var numbers = dataCtrl.getNumbers();

        var fields = document.querySelectorAll(DOMstrings.numbers);

        nodeListForEach(fields, function(field, index){
            field.textContent = numbers[index];
            field.classList.add('scale');

        })

    }

    return {
        init: function() {
            setupEventListeners();
        }
    }

})(dataController);

controller.init();







