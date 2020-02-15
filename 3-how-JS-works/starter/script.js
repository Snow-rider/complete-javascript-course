///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1965)

// functions
function calculateAge(year){
    console.log(2020 - year)
}

var retirement = function(year) {
    console.log(65 - (2020 - year))
}

// variables
console.log(age)
var age = 23
console.log(age)

function foo() {
    var age = 65
    console.log(age)
}

foo()
console.log(age)
*/










///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(b);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

//console.log(this)

function calculateAge(year) {
    console.log(2020 - year)
    console.log("regular function call this")
    console.log(this)
}

calculateAge(1988)

let John = {
    name: 'John',
    yearOfBirth: '1990',
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth)
        console.log("method function call this")
        console.log(this)
        /*
        function innerFunction() {
            console.log("inner function call = regular function (although inside of an object, but not assigned to it)")
            console.log(this)
        }
        innerFunction()
        */
    }
}

John.calculateAge(1988)


let Mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

// method borrowing - John's method and use it on Mike
// NOTE: no parenthesis - we are not calling function, but we are assigning a variable
Mike.calculateAge = John.calculateAge

Mike.calculateAge()

