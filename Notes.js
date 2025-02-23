/* Functions, If/Else, Loops, Objects & Arrays.



function sum(a, b) {         // Assigned 
    let FinalSum = a + b;    // value, Function;
    return FinalSum;         // Answer to be Given according to assigned values;  
                                Function decleration
}

let FinalSum = sum("10",20);     //     Provided
let FinalSum2 = sum(52,564);     //     values; Function call

console.log(FinalSum);
console.log(FinalSum2);

//Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age){    // This is where 
    if ( age > 18 ) {     // the 
   return true;           // function 
    } else {              // is
   return false;          // assigned or declared;
    } 
}
let Vote = canVote(06);    // This is where the function is called;
console.log(Vote);


Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd." 

function EvenOrOdd(a){
    if (a%2 == 0) {
    console.log("The number is even.");
    } else {
    console.log("The number is odd.");
    }
}
EvenOrOdd(14);   


function isPositive(a){
    if (a>=0) {
        console.log("The number is Positive.")
    } else {
        console.log("The number is Negative.")
    } 
}
isPositive(null);           


Write a function called sum that finds the sum from 1 to a number   

function sum(a){
    let sum = 0;
    for (let i=1; i<=a; i++){
        sum = sum + i;
    }
    return sum;
}
let ans = sum(1000);
console.log(ans);                    


 Write a function that takes a user as an input and greets them with their name and age 

function greet(user){
     return("Hi "+ user.name + ",your age is " + user.age);
    }
    
let user = {
    name: "Cristiano",
    age: 19
    }

let message = greet(user);
console.log(message);

                                OR

function greet(user){
     console.log("Hi "+ user.name + ",your age is " + user.age);
    }

let user = {
    name: "Cristiano",
    age: 19
    }

greet(user);                            


Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender         

function greet(user){
     console.log("Hi "+ user.name + ",your age is " + user.age + " and your geender is " + user.gender);
    }

let user = {
    name: "Cristiano",
    age: 19,
    gender: "Male"
    }

greet(user);                  


Also tell the user if they are legal to vote or not     

function greet(user){
    
    console.log("Hi "+ user.name + ",your age is " + user.age + " and your geender is " + user.gender)

    if (user.age>=18){
        console.log(user.name, "You are eligible to vote.");
     }else{
        console.log(user.name, "You are not eligible to Vote.");
     }  
}
    
let user = {
    name: "Cristiano",
    age: 24,
    gender: "Male"
    }

greet(user);                                


Write a function that takes an array of numbers as input, and returns a new array with only even values.                
   
Array = [1,2,3,4,5,6,7,8,9,10];                 // Given Array
    let newArray = Array.filter(function(a){    // Function is declared in new Array
    return(a%2 ==0);                               & Function is called in new Array
    })
console.log(newArray);                
                                    OR
                                    
Array = [1,2,3,4,5,6,7,8,9,10];
    let Function =function(a){                  // Function is declared here
        return(a%2 != 0);
    }
newArray = Array.filter(Function);              // Function is called here
console.log(newArray);                             & new Array is made here  


Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old    

Array1 = [user1 = {age: 56},user2 = {age:78}, user3 = {age:19}, user4 = {age:18},
          user5 = {age:12}, user6 = {age:17}]
]
    newArray = Array1.filter(function(a){
        return(a.age>18);
    })
console.log(newArray);


//write a function to find the mean of 5 numbers

function mean(a,b,c,d,e){
    for(let i=0;i<mean.length; i++);
    console.log((a+b+c+d+e)/5);
}
mean(1,2,3,4,5);


Create a function that takes an array of objects as input,
and returns the users whose age > 18 and are male           

Array1 = [user1 = {name:"Rishi", 
                   age: 56,
                   gender:"male"
                  },
          user2 = {name:"MorarjiDesai",
                   age:78,
                   gender:"male"
                  }, 
          user3 = {name:"Indira",
                   age:19,
                   gender:"female"
                  }, 
          user4 = {name:"Cristiano",
                   age:38,
                   gender:"male"
                  },
          user5 = {name:"Shakira",
                   age:52,
                   gender:"Female"
                  }, 
          user6 = {name:"Madhuri",
                   age:56,
                   gender:"Female"
                  }
          ];

let newArray = Array1.filter(function(a){
    return(a.age>18 && a.gender == "male");
    }
)
console.log(newArray);                       
                                        OR (Female, & is <28)

Array1 = [user1 = {name:"Rishi", 
       age: 56,
       gender:"male"
      },
user2 = {name:"ModiGandu",
       age:78,
       gender:"male"
      }, 
user3 = {name:"Indira",
       age:19,
       gender:"female"
      }, 
user4 = {name:"Cristiano",
       age:38,
       gender:"male"
      },
user5 = {name:"Shakira",
       age:12,
       gender:"female"
      }, 
user6 = {name:"Madhuri",
       age:56,
       gender:"female"
      }
];

let newFunction = function(a){
    return(a.age<20 && a.gender == "female");
    }
let Array = Array1.filter(newFunction);
console.log(Array);
                                        
let user1 = {                    //This is object inside an object.
    name: "harkirat",
    age: 19,
    address: {
        city: "Delhi",
        country: "India",
        address: "1122 DLF"
    }
}

console.log(user1.address.city);                

To find a random number between a given set of numbers,
const min = 56;
const max = 89;
console.log(Math.floor(Math.random()*((max-min)+1)+min)); 

                                            
// Both of them holds the same output but one is an object whereas other is an array

let Marks = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
    Diana: 88
};
for(let i=0; i<Object.keys(Marks).length; i++){
    console.log(Object.keys(Marks)[i] Marks[Object.keys(Marks)[i]]);
}

let marks = [Alice=85, Bob=92, Charlie=78, Diana=88 ];
for(let i=0; i<marks.length; i++){
    console.log(marks[i]);
}

//Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
                                                                        

//ASYNC, AWAIT & PROMISES IN JS//

//  I/O operations (synchronous form) 

const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);


// Functional arguments 
   Any of the functions are used as an argument to doOperation function
    
function sum(a, b){
  return a + b;
}

function multiply(a, b){
  return a * b;
}

function subtract(a, b){
  return a - b;
}

function divide(a, b){
  return a / b;
}

function doOperation(a, b, op){
  return op(a, b);
}

console.log(doOperation(5, 19, sum));


// Another example of (Async code) callback functiton/Functional argument (fs.readfile) //

const fs = require("fs");

function Run(err, data){
    console.log(data);
}
fs.readFile("a.txt", "utf-8", Run);              -> Run here is a functional argument,
fs.readFile("b.txt", "utf-8", Run);                 callback by readfile function.

console.log("This is a message");                -> for the reference


// Another example of (Async code) callback functiton/Functional argument (setTimeout) //

function run() {
    console.log("I will run after 1s");
}

setTimeout(run, 1000);
console.log("I will run immedietely");


//class & objects//

   class Rectangle {                                --> This here is a class called rectangle
   constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color; 
   }

   area() {
       const area = this.width * this.height;
         return area;
   }

   paint() {
            console.log(`Painting with color ${this.color}`);
   }

}

const rect = new Rectangle(2, 4, "blue")                            --> This is the object of the class
const area = rect.area();
const paint = rect.paint();
console.log(area, paint);

    //This is another example for onject & class, (a class called circle)//
    
class Circle {
   constructor(radius, color) {
       this.radius = radius;  
       this.color = color;
   }

   area() {
      const area = this.radius * this.radius * Math.PI;
       return area;
   }

   paint() {
            console.log(`Painting with color ${this.color}`);
   }

}

const circle = new Circle(2, "red")
const area = circle.area();
const paint = circle.paint();
console.log(area);
console.log(paint);

                             
        **PROMISES**     Note:- Promise is also a class(Promise class) 

function setTimeoutPromisified(ms) {                            --> This part here is 'defining Promise'.
    let P = new Promise(resolve => setTimeout(resolve, ms));      --> This function above is   
    return P;                                                      returning an object 'P' of Promise 
  }                                                                                             class.
  
  function callback() {
      console.log("3 seconds have passed");                       --> From here this part is 'using the
  }                                                                                             Promise'.
  
  setTimeoutPromisified(3000).then(callback)
                                                          NOTE-->In the first line of the above code, ms refers
                                                               to milisecond which is to be used in the process.
  
                                                                                
  //Basic concepts of Functions & Promises & SetTimeout// (Insider or wrapper of the above  promisified code)
  
  
  function After3S(Resolve) {                                      --> Here, Function 'After3S' is declared.
      setTimeout(Resolve, 3000);               --> Here, Resolve will be replaced by main after 3 seconds.(Reason is after code)
  }
  function main() {
      console.log("After 3 seconds, main is called but it is actually Resolve");
  }
  After3S(main);                                                   --> Here, Function 'After3S' is called
  
  When the Function 'After3S' is called, 'main' as a function is passed in the place of Resolve inside the 'After3S' function.
  (Basic property of a function). Then the 'Resolve' inside SetTimeout is also replaced by 'main'.                                                                                           
                                                                                          
   //This is the Main Program of Promisifying a function and using it//
       (This is the combination of the above two codes.)
       (Details of it is explained in the notebook.)
  
  function After3S(Resolve){
      setTimeout(Resolve, 3000)
  }
  
  let P = new Promise(After3S);
     
      
  function main(){
      console.log("Promise succeded after 3 seconds.")
  }
  
  P .then(main)                   
  
                                      OR(This is the alternate way to write the same code,
                                                     very minute or no difference in them)
                                          (As mentioned, Explained in Notebook)
  
  function After3S(Resolve){
      setTimeout(Resolve, 3000);
  }
  
  function SetTimeoutPromisified(){
  let P = new Promise(After3S);
  return P;
  }
  
  function main(){
      console.log("Promise succeded after 3 seconds.")
  }
  
  SetTimeoutPromisified().then(main)
                                                               
  
      **Promisified version of fs.readfile**
  
  const fs = require("fs");
  
  function readTheFile(Resolve){
      fs.readFile("a.txt", "utf-8", function(err, data){
          Resolve(data)
      })
  }
  
  function readfile(){
      return new Promise(readTheFile);
  }
  
  function callback(contents){
      console.log(contents);
  }
  
  readfile().then(callback);                            
                                                                          
                                                                           OR        
                                                         
  const fs = require("fs");
  
  function readTheFile(Resolve){
      fs.readFile("a.txt", "utf-8", function(err, data){
          Resolve(data)
      })
  }
  
  function readfile(){
      return new Promise(readTheFile);
  }
  
  const R = readfile();
  
  function callback(contents){
      console.log(contents);
  }
  
  R.then(callback);
                                                                      */
  