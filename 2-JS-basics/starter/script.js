/**************************************************** 
* 8 Variables and Data Types
*/

/*
let firstName = 'John'
console.log(firstName)

let lastName = 'Smith'
let age = 28

let fullAge = true
console.log(fullAge)

let job
console.log(job)

job = 'Teacher'
console.log(job)

// Variable naming rules
var _3years = 3
var johnMark = 'John and Mark'
// var if = 23
*/

/*****************************************************
 * 9 Variable mutation and type coercion
 */

/*
let firstName = 'John'
let age = 28

// Type coercion
console.log(firstName + ' ' + age)

let job, isMarried
job = 'Teacher'
isMarried = false

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried)

// Variable mutation = changing variable value
age = 'twenty eight'
job = 'driver'

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried)

let lastName = prompt('What is his last name?')
console.log(firstName + ' ' + lastName)
*/

/*****************************************************
 * 10 Basic Operators
 */


/*
let year, ageJohn, ageMark, yearJohn, yearMark
yearNow = 2018
ageJohn = 28
ageMark = 33

// Math operators
yearJohn = yearNow - ageJohn
yearMark = yearNow - ageMark
console.log(yearJohn)
console.log(yearMark)

console.log(yearNow + 2)
console.log(yearNow * 2)
console.log(yearNow / 10)

// Logical operators
let johnOlder = ageJohn > ageMark
let johnYounger = ageJohn < ageMark
console.log(johnOlder)
console.log(johnYounger)

// typeof operator
console.log(typeof johnOlder)
console.log(typeof ageMark)
console.log(typeof 'Mark is older than John.')
let xUndefined
console.log(typeof xUndefined)
*/

/*****************************************************
 * 11 Operator Precedence
 */


/*
let now = 2018
let yearJohn = 1989
let fullAge = 18

// Multiple operators
let isFullAge = now - yearJohn >= fullAge // true
console.log('John is full age? ' + isFullAge)

// Grouping
let ageJohn = now - yearJohn
let ageMark = 35
let average = (ageJohn + ageMark) / 2
console.log('average age: ' + average)

// Multiple assignments
let x, y
// following works thanks to operator associativity
x = y = (3 + 5) * 4 - 6 // 26
console.log('x', x, 'y', y)

// More operators
x *= 2
console.log('x', x)
x += 10
console.log('x', x)
x -= 5
console.log('x', x)
x /= 2
console.log('x', x)

// increment or decrement - by one only
x++
console.log('x', x)
x--
console.log('x', x)
*/

/****************************************************
 * Coding challenge 1
 */

/*
 function bmi(weight, height) {
    // exponential precedence is higher than division -> no need for parentheses
    return weight / height ** 2
}

let massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark

// masses and weights
massJohn = 92 // kg
massMark = 78 // kg
heightJohn = 1.95 // m
heightMark = 1.69 // m

// bmis
bmiJohn = bmi(massJohn, heightJohn)
bmiMark = bmi(massMark, heightMark)
console.log(bmiJohn, bmiMark)

// does Mark has higher bmi than John?
let higherMark = bmiMark > bmiJohn
console.log('Is Mark\'s BMI higher than John\'s? ', higherMark)
*/

/****************************************************
 * 14 IF / ELSE statements
 */

/*
let firstName = 'John'
let civilStatus = 'single'

if (civilStatus === 'married') {
    console.log(firstName + ' is married!')
} else {
    console.log(firstName + ' will hopefully marry soon :)')
}

let isMarried = false
if (isMarried) {
    console.log(firstName + ' is married!')
} else {
    console.log(firstName + ' will hopefully marry soon :)')
}

function bmi(weight, height) {
    // exponential precedence is higher than division -> no need for parentheses
    return weight / height ** 2
}

let massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark

// masses and weights
massJohn = 92 // kg
massMark = 78 // kg
heightJohn = 1.95 // m
heightMark = 1.69 // m

// bmis
bmiJohn = bmi(massJohn, heightJohn)
bmiMark = bmi(massMark, heightMark)

// does Mark has higher bmi than John?
if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s')
} else {
    console.log('John\'s BMI is higher than Mark\'s')
}
*/

/****************************************************
 * 15 Boolean logic
 */

/*
let firstName = 'John'
let age = 28

if (age < 13) {
    console.log(firstName + ' is a boy.')
} else if (age >= 13 && age < 20) { // between 13 and 20
    console.log(firstName + ' is a teenager.')
} else if (age >= 20 && age < 30) { // between 20 and 30
    console.log(firstName + ' is a young man.')
} else {
    console.log(firstName + ' is a man.')
}
*/

/****************************************************
 * 16 Ternary operator 
 * ... ? ... : ...
 */

/*
let firstName = 'John'
let age = 16

// ternary operator
age >= 18 ? 
console.log(firstName, 'drinks beer.') : 
console.log(firstName, 'drinks juice.')

let drink = age >= 18 ? 'beer' : 'juice'
console.log(drink)

// same as ternary operator
let drink
if (age >= 18) {
    drink = 'beer'
} else {
    drink = 'juice'
}

// switch statement
let job = 'instructor'

switch (job) {
    case 'teacher':
    case 'instructor': // multiple cases possible
        console.log(firstName + ' teaches kids how to code.')
        break // otherwise switch keeps evaluating other cases
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.')
        break
    case 'designer':
        console.log(firstName + ' designs beautiful websites.')
        break
    default:
        console.log(firstName + ' does something else.')
}
age = 36
switch (true) { // switch with range - use true
    case age < 13:
        console.log(firstName + ' is a boy.')
        break
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.')
        break
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.')
        break
    default:
        console.log(firstName + ' is a man.')  
}
*/

/****************************************************
 * 17 Truthy and falsy values and equality operators
 */

/*
 // falsy values undefined, null, 0, '', NaN
console.log(Boolean(undefined), Boolean(null), Boolean(0), Boolean(''), Boolean(NaN))

// truthy values - all the other than falsy
console.log(Boolean('a'), Boolean(13))

let height
height = 23
if (height || height === 0) {
    console.log('Variable is defined.')
} else {
    console.log('Variable has NOT been defined.')
}

// Equality operators
// === strict equality operator, does not coerce types
// == does type coercion -> data types do not have to match
// e.g.
// 23 === '23' -> false
// 23 == '23' -> true

if (height == '23') {
    console.log('The == does type coercion.')
}
*/

/*******************************************************
 * Coding challenge 2
 */

/*
averageJohnTeam = (113 + 120 + 103) / 3
averageMikeTeam = (119 + 94 + 123) / 3
averageMaryTeam = (97 + 134 + 105) / 3
console.log(averageJohnTeam, averageMikeTeam, averageMaryTeam)

switch(true) { 
    case averageJohnTeam > averageMikeTeam && averageJohnTeam > averageMaryTeam:
        // John winner
        console.log('Winner is John\'s team:', averageJohnTeam)
        break
    case averageMikeTeam > averageJohnTeam && averageMikeTeam > averageMaryTeam:
        // Mike winner
        console.log('Winner is Mike\'s team:',
        averageMikeTeam)
        break
    case averageMaryTeam > averageJohnTeam && averageMaryTeam > averageMikeTeam:
        // Mary winner
        console.log('Winner is Mary\'s team:',
        averageMaryTeam)
        break
    case (averageJohnTeam === averageMikeTeam) && averageJohnTeam > averageMaryTeam:
        // John and Mike winner
        console.log('Winner is John\'s and Mike\'s team:', averageJohnTeam, averageMikeTeam)
        break
    case averageJohnTeam === averageMaryTeam && averageJohnTeam > averageMikeTeam:
        // John and Mary winner
        console.log('Winner is John\'s and Mary\'s team:', averageJohnTeam, averageMaryTeam)
        break
    case (averageMaryTeam === averageMikeTeam) && averageMaryTeam > averageJohnTeam:
        // Mike and Mary winner
        console.log('Winner is Mike\'s and Mary\'s team:', averageMikeTeam, averageMaryTeam)
        break
    default:
        // draw
        console.log('It\'s a draw:', averageMikeTeam, averageJohnTeam, averageMaryTeam)
}
*/

/*******************************************************
 * 20 Functions
 */

/*
 function calculateAge(birthYear, currentYear) {
    return currentYear - birthYear
}

let ageJohn = calculateAge(1990, 2020)
let ageMike = calculateAge(1948, 2020)
let ageJane = calculateAge(1969, 2020)
console.log(ageJohn, ageMike, ageJane)

function yearsUntilRetirement(year, firstName, now) {
    let age = calculateAge(year, now)
    let retirement = 65 - age
    if (retirement > 0) {
        console.log(firstName, 'retires in', retirement, 'years')
    } else {
        console.log(firstName, 'has already retired.')
    }
}

yearsUntilRetirement(1990, 'John', 2020)
yearsUntilRetirement(1948, 'Mike', 2020)
yearsUntilRetirement(1969, 'Jane', 2020)
*/

/******************************************************
 * 21 Functions statements, expressions and decorations
 */

/*
 //function declaration
// function <name>(<args>) {}

// function expression
let whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            // upon return we do not need to add break
            // because with return, the function immediately finishes
            return firstName + ' teaches kids how to code.'
        case 'driver':
            return firstName + ' drivers a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites.'
        default:
            return firstName + ' does something else.'
    }
}

console.log(whatDoYouDo('teacher', 'John'))
console.log(whatDoYouDo('designer', 'Jane'))
console.log(whatDoYouDo('retired', 'Mark'))
*/

/*******************************************************
 * 22 Arrays
 */


/*
// array literal
let names = ['John', 'Mark', 'Jane']
// array
let years = new Array(1990, 1969, 1948)

console.log(names)
console.log(names.length)
console.log(names[0], names[1], names[2])

// mutate array data
names[1] = 'Ben'
console.log(names)
console.log(names[1])

// add to last index
names[names.length] = 'Mary'
console.log(names)

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false]

// add elements to arrays
john.push('blue') // at last index
john.unshift('Mr.') // at first index
console.log(john)

// remove elements from arrays
john.pop() // last element
john.shift() // first element
console.log(john)

// index of - returns position at which the given element is in the array
// index of returns -1 if the given element is not in the array
console.log(john.indexOf('non-existent'))

console.log(john.indexOf('designer') === -1 ? 'John IS NOT designer.' : 'John IS designer.')
*/

/*******************************************************
 * Coding challenge 3
 */


/*
let bills = [124, 48, 268]

function calculateTip(bill) {
    // also possible: let percentage
    if (bill < 50) {
        // percentage = .2
        return .2 * bill
    } else if (bill >= 50 && bill < 200) {
        // percentage = .15
        return .15 * bill
    } else {
        // percentage = .1
        return .1 * bill
    }
    // return percentage * bill
}

// NOTE: can assign output of function straight to the array !!! :)
// better
let tipsBetter = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])]
let paidAmountsBetter = [bills[0] + tipsBetter[0], bills[1] + tipsBetter[1], bills[2] + tipsBetter[2]]
console.log('Tips better', tipsBetter)
console.log('Paid amounts better', paidAmountsBetter)

// not so good - more lines
let tips = []
let paidAmounts = []
tips[0] = calculateTip(bills[0])
paidAmounts[0] = tips[0] + bills[0]
tips[1] = calculateTip(bills[1])
paidAmounts[1] = tips[1] + bills[1]
tips[2] = calculateTip(bills[2])
paidAmounts[2] = tips[2] + bills[2]

console.log('Tips', tips)
console.log('Paid amounts', paidAmounts)
*/

/*******************************************************
 * 25 Objects and properties
 * 26 Object and methods
 */


/*
 // object literal
let john = {
    // firstName is key and also property
    // firstName and 'John' is key-value pair
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
}

console.log(john)

// access properties of object by dot notation
console.log(john.firstName)
// access properties of object using bracket notation, key is string in this case
console.log(john['lastName'])
// bracket notation using string in pre-declared variable
let x = 'birthYear'
console.log(john[x])

// mutate object
// by dot notation
console.log(john.job)
john.job = 'driver'
console.log(john.job)
// by bracket notation
console.log(john['isMarried'])
john['isMarried'] = true
console.log(john['isMarried'])

// new object syntax 
let jane = new Object()
jane.firstName = 'Jane'
jane.birthYear = 1969
jane.lastName = 'Smith'

console.log(jane)
*/

/*
// methods - functions attached to objects
let john = {
    // firstName is key and also property
    // firstName and 'John' is key-value pair
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calculateAge: function() {
        // here we could check that the now is higher than birthYear
        this.age = 2020 - this.birthYear
    },
}

john.calculateAge()
console.log(john)
*/

/*******************************************************
 * Coding challenge 4
 */

/*
 let john = {
    fullName: 'John Smith',
    mass: 80,
    height: 1.92,
    calculateBmi: function() {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

let mark = {
    fullName: 'Mark Twain',
    mass: 80,
    height: 1.75,
    calculateBmi: function() {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

// NOTE: has to write braces after the function usage from object!!! :)
//john.calculateBmi()
//mark.calculateBmi()

console.log(john)
console.log(mark)


// also possible
if (john.calculateBmi() > mark.calculateBmi()) {
    // calculate bmi during the first condition
    // because our function also returns bmi value
    console.log(john.fullName, '(BMI:', john.bmi, ') has higher BMI than', mark.fullName, '(BMI:', mark.bmi, ').')
} else if (john.bmi < mark.bmi) {
    // then just use the value from the object
    console.log(mark.fullName, '(BMI:', mark.bmi, ') has higher BMI than', john.fullName, '(BMI:', john.bmi, ').')
} else {
    console.log(john.fullName, 'and', mark.fullName, 'have same BMIs:', john.bmi, mark.bmi)
}

// my solution
switch (true) {
    case john.bmi > mark.bmi:
        console.log(john.fullName, 'has higher BMI than', mark.fullName)
        break
    case john.bmi < mark.bmi:
        console.log(mark.fullName, 'has higher BMI than', john.fullName)
        break
    default:
        console.log(john.fullName, 'and', mark.fullName, 'have same BMIs.')
}
*/

/*******************************************************
 * 29 Loops and iteration
 */

// for loop
// (starting variable; condition used for evaluating if the loop should continue; counter update)

/*
// simple loop over a range
for (let i = 0; i <= 6; i += 2) {
    console.log(i)
}

// loop over an array using index
var john = ['John', 'Smith', 1990, 'designer', false]
for (let i = 0; i < john.length; i++) {
    console.log(john[i])
}

// loop over an array using while loop
let i = 0
while (i < john.length) {
    console.log(john[i])
    i++
}
*/


/*
// continue
var john = ['John', 'Smith', 1990, 'designer', false]
for (let i = 0; i < john.length; i++) {
    // one line if does not need {} :)
    if (typeof john[i] !== 'string') continue
    console.log(john[i])
}

// break
for (let i = 0; i < john.length; i++) {
    // one line if does not need {} :)
    if (typeof john[i] !== 'string') break
    console.log(john[i])
}

// loop in the opposite direction (from back to forth)
for (let i = john.length - 1; i >= 0; i--) {
    console.log(john[i])
}
*/

/*******************************************************
 * Coding challenge 5
 */

function calculateAverageOfTips(arrayTips) {
    let total = 0
    for (let i = 0; i < arrayTips.length; i++) {
        total += arrayTips[i]
    }
    return total / arrayTips.length
}

johnsFamily = {
    bills: [124, 48, 268, 180, 42],
    johnsRule: function(bill) {
        let percentage
        if (bill < 50) {
            percentage = .2
        } else if (bill >= 50 && bill < 200) {
            percentage = .15
        } else {
            percentage = .1
        }
        return bill * percentage
    },
    calculateTipsAndFinalAmounts: function() {
        // if we make empty arrays in the object in the beginning, we save 2 lines in the end of this function :)
        this.tips = []
        this.amounts = []
        // note:
        // this.tips = this.amounts = [] does not work
        // because those would be the same arrays (also added items would be addded to both)
        for (let i = 0; i < this.bills.length; i++) {
            let bill = this.bills[i]
            let tip = this.johnsRule(bill)
            this.tips[i] = tip
            this.amounts[i] = tip + bill
        }
    }
}

// tips and amounts for John's family
johnsFamily.calculateTipsAndFinalAmounts()
console.log(johnsFamily)
console.log(johnsFamily.tips)
console.log(johnsFamily.amounts)

marksFamily = {
    bills: [77, 475, 110, 45],
    marksRule: function(bill) {
        let percentage
        if (bill < 100) {
            percentage = .2
        } else if (bill >= 100 && bill < 300) {
            percentage = .10
        } else {
            percentage = .25
        }
        return bill * percentage
    },
    calculateTipsAndFinalAmounts: function() {
        // if we make empty arrays in the object in the beginning, we save 2 lines in the end of this function
        this.tips = []
        this.amounts = []
        for (let i = 0; i < this.bills.length; i++) {
            let bill = this.bills[i]
            let tip = this.marksRule(bill)
            this.tips[i] = tip
            this.amounts[i] = tip + bill
        }
    }
}

// tips and amounts for Mark's family
marksFamily.calculateTipsAndFinalAmounts()
console.log(marksFamily)
console.log(marksFamily.tips)
console.log(marksFamily.amounts)

// averages of tips for John's and Mark's family and comparison
johnsFamily.johnsAverage = calculateAverageOfTips(johnsFamily.tips)
marksFamily.marksAverage = calculateAverageOfTips(marksFamily.tips)

switch(true) {
    case johnsFamily.johnsAverage > marksFamily.marksAverage:
        console.log('John\'s family paid higher average tip:', johnsFamily.johnsAverage, 'vs', marksFamily.marksAverage)
        break
    case marksFamily.marksAverage > johnsFamily.johnsAverage:
        console.log('Mark\'s family paid higher average tip:', marksFamily.marksAverage, 'vs', johnsFamily.johnsAverage)
        break
    default:
        console.log('John\s and Mark\s families paied the same average tip.')
}

/*******************************************************
 * 33 JS versions: ES5, ES6 / ES2015 and ES6+
 */

 // just info
 // 1996 LiveScript aka JavaScript
 // 1997 ES1 (ECMAScript)
    // ECMAScript: the language standard
    // JavaSciprt: the language in practice
 // 2009 ES5
 // 2015 ES6/ES2015 the biggest update to the language ever
    // in 2015 changed to annual release cycle
    // -> small releases, easier to keep up-to-date
// ES2016/ES2017/ES2018/ES2019/...

// ES5  
    // - supported in all browsers
// ES6(2015) / ES7(2016) / ES8(2017) 
    // - supported in all modern browsers, but not in old browers
    // - can use most features in production with transpiling and polyfilling (converting to ES5)
// ESNext 
    // - group name for future versions of js
    // - can already use some features in production with transpiling and polyfilling