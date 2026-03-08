///// oop : objected oriented programming  ....

// const Person = function (name, birth) {
//   ////// constructor function ...
//   ///// instances (propreties)  ...
//   this.firstName = name;
//   this.birthYear = birth;

// /////// d'ont do that XXXXXXXXXX :::
// //   this.calcAge = function (){
// //     console.log(2026 - this.birthYear) ; 
// //   }


// };


// Person.prototype.calcAge = function (){
//      console.log(2026 - this.birthYear) ; 
// }
// Person.prototype.welcome = function (){
//     console.log(`welcome ${this.firstName}`)
// }

// ///////  inhertance (wiratha) ;

// const human1 = new Person("jessica", 1993);

// console.log(human1);

// const human2 = new Person("peter" , 1900) ; 
// console.log(human2)



// const x = new Array("peter" , "sara")

// console.log(x)

// const y = []


///////// class declaration :::: 

// class Student  {
   
//     constructor (name , birth){
     
//         this.firstName = name ; 
//         this.birthYear = birth ; 
//             ////// d'ont do that :::
//     // this.calcAge = function (){
//     //     console.log(2026 - this.birthYear) ; 
//     // }
//     }

//     calcAge (){
//        console.log(2026 - this.birthYear)
//     }




// }


// const peter = new Student ("peter" , 2000) ; 
// const nicole = new Student ("nicole" , 1995) ; 

// console.log(peter , nicole)




///////// challange correction ::: 


// const Car = function (make , speed){
 
//     this.make = make ; 
//     this.speed = speed ;
// }


// Car.prototype.accelerate = function (){
//     // this.speed = this.speed + 10
//     this.speed+= 10 ; 
//     console.log(`the ${this.make} accelerate to ${this.speed} km/h`)
// }


// Car.prototype.break = function (){
//         // this.speed = this.speed - 5
//     this.speed -= 5 
//     console.log(`the ${this.make} slows down to ${this.speed} km/h`)
// }

// const car1 = new Car ("BMW" , 120) ; 
// const car2 = new Car("Mercedes" , 95) ; 

// console.log(car1 , car2)

// car1.accelerate()
// car2.break()





////// with class : 


class Car {
    constructor (make , speed){
    this.make = make ; 
    this.speed = speed ;
    }

    accelerate(){
    this.speed+= 10 ; 
    console.log(`the ${this.make} accelerate to ${this.speed} km/h`)
    }

    break(){
    this.speed -= 5 
    console.log(`the ${this.make} slows down to ${this.speed} km/h`)
    }
}



const car3 = new Car ('KIA' , 80) ; 
const car4 = new Car ("Toyota" , 110) ; 

console.log(car3,car4)

car3.accelerate()
car4.break() 