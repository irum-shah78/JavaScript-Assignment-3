//1. remove duplicate value from array without using built-in function

let myArr=[1,3,7,9,8,9,8,6];
let newArr=[];
for(let i=0; i<myArr.length; i++){
    if(newArr.indexOf(myArr[i])==-1){
        newArr.push(myArr[i]);
    }
}
console.log(newArr);




//2.  swap two variables without the need for temporary third variable

let a=10;
let b=20;
let temp=b;
a=temp;
console.log(a,temp);
//2nd method by destrutor
[a,b]=[b,a];
console.log(a,b);


// 3. comparison b/w var, let and const keywords

// var can be re-declared with same name and also can be re-assigned. It is function scoped 
// we can declare, assign and console it any place in function.
          //  var x=10;
          //      x=10;
          //  var x=20;
          //  var y=10;
          //  var z=x+y;
          // console.log(z);

// let cannt be re-declared with same name but can be re-assigned. It is block scope.
          //  let l=10;
          //      l=40;
          // // let l=50;
          //    let m=40;
          // let n=l+m;
          // console.log(n);

// const cannot be re-declared with same name nor re-assigned. It is block scope.
            // const p=10;
            //       p=40; 
            // // const p=50;
            //   const q=40;
            // const r=p+q;
            // console.log(r);




// 4. Null vs Undefined

// Null can be assigned to a variable as a representation of no value.
// Its data type is object.

// Undefined means a variable has been declared but not aassigned a value yet.
// Its data type is undefined.

// undefined == null (true)
// undefined === null (false)
// Prmitive data types have no objects and no methods.And can't be altered. 


// 5. Immediately Invoked Function (IIF)
// It runs as soon as it is defined. Also known as self executing anonymous function. It contain grouong operator and paranthesis.
                // (function(){
                //     var a=10;
                //     console.log(a);
                //      a++;
                // })();

// Arrow Function                
// It allows you to create functions in a cleaner way compared to regular functions.(shorter function)  
                // let greet = () => console.log('Hello');
                // greet(); 

                //  let add =(num1,num2)=>num1+num2
                // let result=add(5,5);
                // console.log(result);  
  
// Regular Function
// Regular functions created using function declarations or expressions are constructible and callable.
// declartion means to define function name. but expression means to define variable name and use assigbment operator.
// function expression can be anonymous. but declaration must have name.
// In declarartion: we can call function first and afterwards can declare. 
                // function hello(){
                //     console.log("my name is irum.");
                // }
                // hello();


//6. Object Destructuring
// it is used to extract values from objects. or unpack values from objects.  
                // let person={
                //     name: "irum",
                //     age: 25
                // };
                // let {name,age}=person;
                // console.log(name); 
 
                
                
// 7. Temporal Dead Zone                
// Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs during the variable declaration and initialization process.
//  When a variable is declared using "let" or "const" keywords, it is not accessible until it has been fully initialized. 

// During the TDZ, any attempt to access the variable will result in a runtime error.
// The TDZ exists between the creation of a variable and its initialization. 
// This period is the time between the start of the scope where the variable is declared and the actual initialization of the variable. 
// Until the variable is initialized, it is in a "temporal dead zone," and any attempts to access it will result in a ReferenceError.



// 8.  Write down array method and it’s definition with its syntax


//  1)
// push(): Adds one or more elements to the end of an array and returns the new length of the array.
// Syntax: arr.push(element1, ..., elementN);


// 2)
// pop(): Removes the last element from an array and returns that element.
// Syntax: arr.pop();


// 3)
// shift(): Removes the first element from an array and returns that element.
// Syntax: arr.shift();


// 4)
// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
// Syntax: arr.unshift(element1, ..., elementN);


// 5)
// slice(): Returns a new array containing a portion of the original array, starting from the specified start index and ending at the specified end index (excluding the element at the end index).
// Syntax: arr.slice(startIndex, endIndex);


// 6)
// splice(): Removes elements from an array and optionally inserts new elements in their place, returning the removed elements.
// Syntax: arr.splice(startIndex, deleteCount, element1, ..., elementN);


// 7)
// reverse(): Reverses the order of the elements in an array.
// Syntax: arr.reverse();


// 8)
// sort(): Sorts the elements in an array, either alphabetically or numerically, depending on the data type.
// Syntax: arr.sort();


// 9)
// every(): Tests whether all elements in the array pass a given test.
// Syntax: array.every(function(currentValue, index, arr), thisValue)

 
// 10)
// fill(): Fills all the elements of an array with a static value.
// Syntax: array.fill(value, start, end)


// 11)
// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
// Syntax: array.filter(function(currentValue, index, arr), thisValue)


// 12)
// find(): Returns the value of the first element in the array that satisfies the provided testing function.
// Syntax: array.find(function(currentValue, index, arr),thisValue)


// 13)
// findIndex(): Returns the index of the first element in the array that satisfies the provided testing function.
// Syntax: array.findIndex(function(currentValue, index, arr), thisValue)


// 14)
// forEach(): Calls a function for each element in the array
// Syntax: array.forEach(function(currentValue, index, arr), thisValue)


// 15)
// includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// Syntax: array.includes(valueToFind, fromIndex)


// 16)
// indexOf(): Returns the index of the first occurrence of a specified value in an array.
// Syntax: array.indexOf(item, start)


// 17)
// map(): Creates a new array with the results of calling a provided function on every element in the calling array.
// Syntax: array.map(function(currentValue, index, arr), thisValue)


// 18)
// reduce(): Applies a function to each element in the array, resulting in a single output value.
// Syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


// 19)
// concat(): Joins two or more arrays and returns a new array.
// Syntax: array.concat(array1, array2, ..., arrayN)


// 20)
// join(): Returns a string representing the elements of an array joined together by a specified separator.
// Syntax: arr.join(separator);



// 9.  Synchronous vs Asynchronous

// In synchronous programming, code is executed sequentially, one line at a time. Each line must be completed before the next line can 
// be executed. This means that synchronous code can block the execution of subsequent code until it has completed, which can lead to 
// delays in the program's execution.

// In contrast, asynchronous programming allows code to be executed non-sequentially, meaning that the program can continue to execute
// other code while waiting for certain tasks to complete. Asynchronous programming is especially useful for tasks that involve 
// input/output operations, such as reading from or writing to a file, fetching data from a database, or making a network request. 
// In these cases, waiting for the I/O operation to complete before executing the next line of code would waste a lot of time, 
// and asynchronous programming allows the program to continue doing other tasks while waiting for the I/O operation to complete.
// Asynchronous programming in JavaScript is typically achieved using callbacks, promises, or async/await syntax.




