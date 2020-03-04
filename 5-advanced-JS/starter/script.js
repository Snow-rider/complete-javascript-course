/*********************************************************************************************************************
 * 60. OBJECTS, INHERITANCE & PROTOTYPE, INITIALIZATION
 */

// this keyword
// this in function -> global context
// this in method -> method's object

// useful methods
// <instance of object variable name>.hasOwnProperty(<property>)
// <variable name> instanceof <object variable name>
// console.info(<variable name>) - for noninspectable by default, also for primitives

/*
 let johnLiteral = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}
console.log(johnLiteral)

// lets use blueprint

/**********************************************************************************************************
 * 61. FUNCTION CONSTRUCTOR
 * 
 * question: how to convert to class?
 */

 /*
let Person = function(
    name, 
    yearOfBirth, 
    job) {
        this.name = name
        this.yearOfBirth = yearOfBirth
        this.job = job
}

// adding methods to Object's prototypes - to be abble to use inheritance
Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth)
}
Person.prototype.lastName = 'Smith'  // also property can be added via prototype

let john = new Person('John', 1990, 'teacher')  // = instantiation, because john is instance of Person
console.log(john)
john.calculateAge()
console.log(john.lastName)

// all of these now have calculateAge() method duplicated -> not so efficient, especially when code has many thousands lines and there is 20 methods like this -> that's why we have inheritance
//let jane = new Person('Jane', 1969, 'designer')
//jane.calculateAge()  // works due to inheritance and we are not duplicating
//console.log(jane.lastName)
let mark = new Person('Mark', 1948, 'retired')
mark.calculateAge()
console.log(mark.lastName)
*/

/*
// my own
let Mug = function(height, diameter, material, color) {
    this.height = height
    this.diameter = diameter
    this.material = material.toString().toLowerCase()
    this.color = color
}

Mug.prototype.getVolume = function() {
    return (2 * Math.PI * (this.diameter/2)**2 * this.height)/1000
}
Mug.prototype.materialsMap = {
    // material: [micro, dishwasher]
    wood: [false, false],
    iron: [false, false],
    stainlesssteel: [false, true],
    porcelain: [true, true],
    glass: [true, true],
    pewter: [false, false],
    earthenware: [true, true]
}

Mug.prototype.canGoToMicrovawe = function() {
    return Object.keys(this.materialsMap).includes(this.material) ? 
            this.materialsMap[this.material][0] :
            false
}

Mug.prototype.canGoToDishwasher = function() {
    return Object.keys(this.materialsMap).includes(this.material) ?
            this.materialsMap[this.material][1] :
            false
}

// mugs
let mug1 = new Mug(12, 6, 'stainlessSteel', 'steel')
let mug2 = new Mug(6, 4, 'porcelain', 'white with blue flowers')
let mug3 = new Mug(2, 5, 'earthenware', 'natural')

console.log(mug1.getVolume())
console.log(mug1.material)
console.log("mug1 micro", mug1.canGoToMicrovawe())
console.log("mug1 dishwasher", mug1.canGoToDishwasher())
console.log(mug2.getVolume())
console.log(mug2.material)
console.log("mug2 micro", mug2.canGoToMicrovawe())
console.log("mug2 dishwasher", mug2.canGoToDishwasher())
console.log(mug3.getVolume())
console.log(mug3.material)
console.log("mug3 micro", mug3.canGoToMicrovawe())
console.log("mug3 dishwasher", mug3.canGoToDishwasher())
*/

/********************************************************************************************************
 * 63. OBJECT.CREATE
 */
/*
let personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth)
    }
}

let johnas = Object.create(personProto)
johnas.name = 'John'
johnas.yearOfBirth = 1990
johnas.job = 'teacher'

let jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
})

/***********************************************************************************************************************
 * Testing Object.create vs Function constructor differences
 */

 /*
 let TestFunction = function() {
    
 }

 TestFunction.prototype = null

 let test1 = new TestFunction() // -> this one still inherits from Object prototype
 let test2 = Object.create(null) // -> this one won't inherit from anything, totally empty object
 */

 /**********************************************************************************************************************
  * 64. PRIMITIVES VS OBJECTS
  */

  // primitives hold the data in the variable itself
  // variables associated with object do not contain the object, but reference to the place in memory where the object is stored -> it only points to the object


/*
// Primitives
let a = 23
let b = a // primitive -> the value of a is copied to be (but not as ref but new variable holds their own copy of data)

a = 46
console.log(a, b)

// -> two primitives are two different variables


// Objects
let obj1 = {
    name: 'John',
    age: 26
}

let obj2 = obj1 // here it means that it points to the same reference, no new variable
obj1.age = 30
console.log(obj1.age, obj2.age)


// Functions
let age = 27
let obj = {
    name: 'Jonas',
    city: 'Lisbon'
}

function change(a, b) {
    a = 30  // primitive to function, copy is created, the change does not affect variable on the outside, unless returned and re-assigned on the outside
    b.city = 'San Francisco'  //we pass only reference
    return a
}

change(age, obj)
// age = change(age, obj) here the age is re-assigned on the outside scope of the function so the change on the primitive would be reflected

console.log(age, obj.city)
*/

/**********************************************************************************************************************
 * 65. & 66. FIRST CLASS FUNCTIONS
 */

// Pasing functions as arguments
let years = [1990, 1965, 1937, 2005, 1998]

// generic calculation function
function arrayCalc(arr, fn) {
    let returnArray = []
    for (let i = 0; i < arr.length; i++) {
        returnArray.push(fn(arr[i]))  // fn is callback function -> we want it to be called later by the array.push function, callback = called later
    }
    return returnArray
}

function calculateAge(el) {
    return 2020 - el
}

/*
let ages = arrayCalc(years, calculateAge)
console.log(ages)
let fullAges = arrayCalc(ages, isFullAge)
console.log(fullAges)
let maxHeartBeat = arrayCalc(ages, maxHeartRate)
console.log(maxHeartBeat)
*/

function isFullAge(el) {
    return el >= 18
}

function maxHeartRate(el) {
    // formula only applies to people between 18 to 81 years old
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el))
    } else {
        return -1
    }
}

// Functions returning functions
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?')
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + ' ?')
        }
    } else {
        return function(name) {
            console.log('Hello, ' + name + ', what do you do for a job?')
        }
    }
}

/*
let teacherQuestion = interviewQuestion('teacher')
let designerQuestion = interviewQuestion('designer')
let cabDriverQuestion = interviewQuestion('cab driver')
*/

/*
teacherQuestion('John')
designerQuestion('Jane')
cabDriverQuestion('Paolo')
*/

// another way
//interviewQuestion('teacher')('Mark') // this works because it's evaluated from left to right 

function whereDoWeGoToday(day) {
    if (day.includes('Mon')) {
        return function(item) {

            console.log('Today is Monday and we go to the beach. We won\'t forget', item, 'with us.')
        }
    } else if (day.includes('Tue')) {
        return function(item) {
            console.log('On Tuesday, we go swimming and we take', item, 'with us.')
        }
    } else if (day.includes('Wed')) {
        return function(item) {
            console.log('Today is Wednesday and we go to the cinema. Let\'s take', item, 'with us.')
        }
    } else if (day.includes('Thu')) {
        return function(item) {
            console.log('Today is Thursday and we go running, using', item, '.')
        }
    } else if (day.includes('Fri')) {
        return function(item) {
            console.log('Today is Friday and we go to sauna, don\'t forget your', item, '!')
        }
    } else if (day.includes('Sat')) {
        return function(item) {
            console.log('Today is Saturday and we stay at home, just enjoying', item, '.')
        }
    } else if (day.includes('Sun')) {
        return function(item) {
            console.log('Today is Sunday and we go for a walk, uh-oh, we forgot', item, '.')
        }
    } else {
        return function(item) {
            console.log('Hard to say which day of a week it is, anyway, let\'s take', item, 'with us.' )
        }
    }
}

/*
whereDoWeGoToday('Mon')('umbrella')
whereDoWeGoToday('xuy')('flippers')
whereDoWeGoToday('Tue')('hat')
whereDoWeGoToday('Wed')('binoculars')
whereDoWeGoToday('Thu')('book')
whereDoWeGoToday('Fri')('beer')
whereDoWeGoToday('Sat')('icecream')
whereDoWeGoToday('Sun')('ball')
*/
/*
whereDoWeGoToday('Tue')('fins')
whereDoWeGoToday('Thu')('mashed potatoes')
whereDoWeGoToday('dfg')('truth')
whereDoWeGoToday('Mon')('watches')
whereDoWeGoToday('Wed')('bishop')
whereDoWeGoToday('Fri')('road')
whereDoWeGoToday('Sat')('double-decker')
whereDoWeGoToday('Sun')('Christmas tree')
*/

/********************************************************************************************************************
 * 67. IIFE (Immediately Invoked Function Expressions)
 * for data privacy or not interfering with the outer scope
 */

function game() {
    // score variable cannot be accessible from outside because of the scope chain
    var score = Math.random() * 10
    // console.log(score >= 5)
}

game();

// IIFE in js
// what is inside of parenthesis cannot be a statement -> parser will treat it as an expression not declaration
(function (goodLuck) {
    var score = Math.random() * 10
    // console.log(score >= 5 - goodLuck)
})(1); // arguments to IIFE function inside the calling braces


/**********************************************************************************************************************
 * 68. CLOSURES
 */
function retirement(retirementAge) {
    let a = ' years left until retirement.'
    return function(yearOfBirth) {
        let age = 2020 - yearOfBirth
        console.log((retirementAge - age) + a)
    }
}

/*
retirement(65)(1990) // Germany
retirement(67)(1990) // Iceland
retirement(66)(1990) // US
*/
// Closure challenge - rewrite interview question
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?')
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + ' ?')
        }
    } else {
        return function(name) {
            console.log('Hello, ' + name + ', what do you do for a job?')
        }
    }
}

function interviewQuestionClosure(job) {
    const dialog = {
        designer: 'What is UX design?',
        teacher: 'What subject do you teach?'
    }
   return function(name) {
        console.log('Hello,', name + ',', dialog[job])
    }
}

/*
interviewQuestionClosure('designer')('Jane')
interviewQuestionClosure('teacher')('Paolo')
*/

/*********************************************************************************************************************
 * 69. BIND, CALL, APPLY
 */

let john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good', timeOfDay, 'ladies and gentlemen. I\'m', this.name + ', I\'m a', this.job, 'and I\'m', this.age, 'years old.')
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m', this.name + ', I\'m a', this.job, 'and I\'m', this.age, 'years old. Have a nice', timeOfDay)
        }
    }
}

//john.presentation('formal', 'morning')

let emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

// method assignment
//emily.presentation = john.presentation
//emily.presentation('friendly', 'morning')

// call
// calls a function with this variable selected by us = method borrowing
//john.presentation.call(emily, 'friendly', 'afternoon')

// apply
// same as call, but passes arguments as an array (also the receiving method has to accept arrays)
//john.presentation.apply(emily, ['friendly', 'afternoon'])

// bind
// set this variable explicitly, does not immediately call function, but generates a copy so we can store it somewhere
// also we can store it with pre-set arguments
// = carrying
let johnFriendly = john.presentation.bind(john, 'friendly')  // return function
/*
johnFriendly('afternoon')
johnFriendly('night')
*/
let emilyFormal = john.presentation.bind(emily, 'formal')
/*
emilyFormal('morning')
emilyFormal('evening')
*/
// real world example of this lecture

// Pasing functions as arguments
years = [1990, 1965, 1937, 2001, 1998]

// generic calculation function
function arrayCalc(arr, fn) {
    let returnArray = []
    for (let i = 0; i < arr.length; i++) {
        returnArray.push(fn(arr[i]))  // fn is callback function -> we want it to be called later by the array.push function, callback = called later
    }
    return returnArray
}

function calculateAge(el) {
    return 2020 - el
}

function isFullAge(ageLimit, el) {
    return el >= ageLimit
}

function maxHeartRate(el) {
    // formula only applies to people between 18 to 81 years old
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el))
    } else {
        return -1
    }
}

ages = arrayCalc(years, calculateAge)

// for the next step if we want to calculate isFullAge, we have a problem because isFullAge takes two arguments while 
// our array calc counts only with one argument - item from the array

// -> we can use .bind method for pre-setting
let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));  //isfullAge function with 20 as limit will be passed to the arrayCalc
/*
console.log(ages)
console.log(fullJapan)
*/

/****************************************************************************************************************************************************************
 * 70.CODING CHALLENGE
 */

 (function() {
    function Question(question, answers, correctAnswer) {
        this.question = question
        this.answers = answers
        this.correctAnswer = correctAnswer
    }

    Question.prototype.logToConsole = function() {
        console.log('\n' + this.question)
        console.log('\nAnswers:')
        Object.keys(this.answers).forEach(index => console.log(index + ':', this.answers[index]))
    }

    Question.prototype.checkAnswer = function(answer, callback) {
        let sc
        if (answer === this.correctAnswer) {
            console.log('Great, correct answer!')
            sc = callback(true)
        } else {
            console.log('Sorry, not a correct answer!')
            sc = callback(false)
        }

        this.displayScore(sc)
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score)
        console.log('-----------------------------------')
    }

    let potatoes = new Question('Do potatoes contain starch?', {0: 'Yes', 1: 'No'}, 0)
    let cheese = new Question('Does cheese always contain lactose?', {0: 'Yes', 1: 'No'}, 1)
    let lactose = new Question('What is lactose?', {0: 'lipide', 1: 'protein', 2: 'sacharide'}, 2)

    let questions = [potatoes, cheese, lactose]

    function score() {
        let sc = 0
        return function(correct) {
            if (correct) {
                sc++
            }
            return sc
        }
    }

    let keepScore = score()

    function askRandomQuestion() {
        let n = Math.floor(Math.random() * questions.length)
        let q = questions[n]
        q.logToConsole()
        let a = prompt('Please select the correct answer.')
        
        if (a !== 'exit') {
            q.checkAnswer(parseInt(a), keepScore)
            askRandomQuestion()
        }
    }
    
    askRandomQuestion()
})();
