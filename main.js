//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function parsePerson3(){
    for(let i = 0; i < Object.keys(person3).length; i++){
        if(typeof Object.values(person3)[i] === 'string'){
            console.log(Object.values(person3)[i])
        } else if(Array.isArray(Object.values(person3)[i])){
            console.log(Object.values(person3)[i])
        }
    }
}
console.log(parsePerson3())


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name,age){
    this.name = name;
    this.age = age;

    this.printInfo = (name,age) => {
        console.log(`This person is ${this.name} and this person's age is ${this.age}.`)

        return 'Returned Value'
    }

    this.incrementAge = (age) => {
        this.age = this.age + 1
        return this.age
    }
}

let person6 = new Person('Jack',19)
let person7 = new Person('Johnny', 27)

console.log(person6.printInfo())
console.log(person6.incrementAge())

console.log(person7.incrementAge())
console.log(person7.incrementAge())
console.log(person7.incrementAge())
console.log(person7.printInfo())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigOrSmall = (string) => {
    return new Promise( (resolve,reject) => {
        if(string.length >= 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

isBigOrSmall('Constantinople')
// isBigOrSmall('Nothing')
.then( (result) => {
    console.log(`Big Word`)
})
.catch( (error) => {
    console.log(`Small number`)
})