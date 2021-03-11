// 🚩 ******************** ECMA 2015 *******************
        // 1.LET & CONST   2.TEMPLATE STRINGS    3.DEFAULT PARAMETERS    4.REST OPERATORS
        // 5.DESTRUCTURING  6.OBJECT PROPERTIES  7.ARROW FUNCTION  8.SPREAD OPERATORS
        // 6.For in Loop    7.For of Loop
        


//🤜************************************** 1.LET & CONST
  // 👍 Var VS Let VS Const 

      // 🖐️ *** Var
              // var myName = 'Himanshu';
              // console.log(myName);
              // myName = 'Himanshu Kumar'
              // console.log(myName);

      // 🖐️ *** Let
              // let myName = 'Himanshu';
              // console.log(myName);
              // myName = 'Himanshu Kumar'
              // console.log(myName);

      // 🖐️ *** Const
              // const myName = 'Himanshu';
              // console.log(myName);
              // myName = 'Himanshu Kumar'
              // console.log(myName);

// 🤵 var  ==> Functional Block
// 🤵 let & const  ==> Block Scope


//🤜************************************** 2.TEMPLATE STRINGS 
// let leapYear = function(year){
//     if(year%4 === 0){
//         if(year%100 === 0){
//             if(year%400 === 0){
//                 return(console.log(`${year} is Leap Year`));
//             }else{
//                 return(console.log(`${year} is Not a Leap Year`));
//             }
//         }else{
//             return(console.log(`${year} is a Leap Year`));
//         }
//     }else{
//         return(console.log(`${year} is Not a Leap Year`));
//     }
// }
// leapYear(2400);


//🤜************************************** 3.DEFAULT PARAMETERS
    /* Default arguments means Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed */

// function sum(a,b=2){
//     return console.log(a+b);
// }
// sum(5);


//🤜************************************** 7.ARROW FUNCTION 
  // 🔘Normal Way To Write Function:-

    // console.log(sum());
    // function sum(){
    //     let a=2; b=5;
    //     let sum = a+b;
    //     return `The sum of ${a} and ${b} is ${sum}`
    // }

    
  // 🔘By Using Fat Arrow Function:-

    // const sum = ()=>{
    //     let a=2; b=5;
    //     let sum = a+b;
    //     return `The sum of ${a} and ${b} is ${sum}`;
    // } 

            // const sum = ()=>{
            //     let a=2; b=5;
            //     return `The sum of ${a} and ${b} is ${a+b}`;
            // } 
            // console.log(sum());

    // const sum = ()=>`The sum of two number is ${ (a=2)+(b=5) }`;
    // console.log(sum());


//🚩******************** ARRAY IN JAVASCRIPT *******************
    /* When we use var, we can stored only only one value at a time.But when we want to storing multiple values in one varible, then we will use ARRAY.
    In Javascript, we have an Array class, and arrays are the prototype of this class.
    We can use any datatype in array whereas this features is not available in many other language like c,c++*/
      // In Javascript, We have an Array class, and arrays are the prototype of this class

    // 🥚EXAMPLE
        // var myFriends = ['Sonu', 'Monu', 'Ronu', 'Dhonu'];
        // console.log(myFriends);
      
      //  1.👉  'Traversal in array' | 'Navigate through an array'
                //➡️ if we want to get the single data at a time and also if we want to change the data
                  // var myFriends = ['Sonu', 'Monu', 'Ronu', 'Dhonu'];
                  // console.log(myFriends[3]);

                //➡️What we do when there are more elements in array that we can't count, so we don't know the actual length of the aaray. Thus, array have a property named 'length'. We use it in this way :-
                  // var myFriends = ['Sonu', 'Monu', 'Ronu', 'Dhonu'];
                  // console.log(myFriends.length);                     // To know about the length of an array
                  // console.log(myFriends[myFriends.length-1]);        // To display the last element of an array

                //➡️We can get only single data by using the above Method, but WHAT if we want to get all the data, then it becomes very complecated, that's why WE NEED for loop METHOD:-
                //💁USING SIMPLE for loop TO NAVIGATE :-
                      // var myFriends = ['Sonu', 'Monu', 'Ronu', 'Dhonu', 'Bonu'];
                      // for(i=0; i<myFriends.length; i++){
                      //   console.log(myFriends[i]);
                      // }
                //💁AFTER ES6, WE HAVE for...in AND for...of LOOP
                      // 🔘 for...in :- WE USE for...in TO GET THE INDEX VALUE OF AN ARRAY
                              // var myFriends = ['Sonu', 'Monu', 'Ronu', 'Dhonu', 'Bonu'];
                              // for(let elements in myFriends){
                              //   console.log(elements);
                              // }
                      // 🔘 for...of :- WE USE for...of TO GET THE ELEMENT OF AN ARRAY
                              // var myFriends = ['Sonu', 'Monu', 'Ronu', 'Dhonu', 'Bonu'];
                              // for(let elements of myFriends){
                              //   console.log(elements);
                              // }
                            
                      // 🌟 WE HAVE ONE MORE METHOD NAMED 'forEach' to get the data from an array. It calls a for each element in the array. Good thing about 'forEach' is that we can simply get both elements, index value, array name. We can not have to use both for..in & for..of to get these. 
                        /* 🔘 BY USING SIMPLE FUNCTION METHOD */
                        //      var myFriends = ['Sonu', 'Monu', 'Ronu', 'Dhonu', 'Bonu'];
                        //      myFriends.forEach(function(element, index, array){
                        //         console.log(element, index, array);
                        //      })
                        /*  🔘BY USING FAT ARROW FUNCTION | NOTE: WE CAN'T USE FAT ARROW WHILE WORKING WITH 'this'  ARGUMENT*/
                        //      var myFriends = ['Sonu', 'Monu', 'Ronu', 'Dhonu', 'Bonu'];
                        //      myFriends.forEach((element, index, array)=>{
                        //      console.log(element, index, array);
                        //      })


      // 2.👉 SEARCHING and FILTERING in an Array:-

                // ➡️ SEARCHING :-
                      //💁 Array.prototype.indexOf()
                            // It returns the first (least) index of an element within the array equal to an element, or -1 if none is found. It search the element from first to last.
                            // var myFriends = ['Sonu', 'Monu', 'Ronu', 'Dhonu', 'Bonu', 'Konu','Dhonu'];
                            // console.log(myFriends.indexOf('Dhonu'));
                            // console.log(myFriends.indexOf('Dhonu', 4));   // Search from index 4
                            // console.log(myFriends.indexOf('dhonu'));  // -1 indicate that no element present

                      //💁 Array.prototype.lastIndexOf()
                            // It returns the last (greater) index of an element within the array equal to an element, or -1 if none is found. It search the element from last to first.
                            // var myFriends = ['Sonu', 'Monu', 'Ronu', 'Dhonu', 'Bonu', 'Konu', 'Dhonu'];
                            // console.log(myFriends.lastIndexOf('Dhonu'));
                            // console.log(myFriends.lastIndexOf('Dhonu', 4)); // Search from index 4
                            // console.log(myFriends.lastIndexOf('Dhonu', 2)); // Search from index 4
                            // console.log(myFriends.lastIndexOf('dhonu'));

                      //💁 Array.prototype.includes()
                            // It determine whether the array contains a value, then returning true or false as appropriate.
                            // It only search forewards .
                            // var myFriends = ['Sonu', 'Monu', 'Ronu', 'Dhonu', 'Bonu', 'Konu', 'Dhonu'];
                            // console.log(myFriends.includes('Dhonu'));
                            // console.log(myFriends.includes('dhonu'));

                // ➡️ FILTERING :-
                      //💁 Array.prototype.find()
                            // arr.find(callback(element[, index[, array]])[, thisArg])
                            /* It Returns the found element in the array, if some element in the array satisfies the testing function, or returns undefined if not found.
                            Only problem is that it returns only one element.*/
                            //  Here i want to find price less than 600
                            // const price = [200, 320, 452, 100, 600, 785, 900]
                            // const findElement = price.find((currentElement, index, array)=>{
                            //     return currentElement<600;
                            // })
                            // console.log(findElement);

                                    // **** Other Way To Write The Above Program ****
                            // const price = [200, 320, 452, 100, 600, 785, 900]
                            // console.log(price.find((currentElement)=> currentElement<600));
                            
                      //💁 Array.prototype.find()
                            // It Return the found index in the array, if an element in array satisfies the testing function, or return -1 if not found.
                            // const price = [200, 320, 452, 100, 600, 785, 900]
                            // console.log(price.findIndex((currentEle)=> currentEle<600)) // It return 0th index number
                            // console.log(price.findIndex((currentEle)=> currentEle<200)) // It return 3rd index number
                            // console.log(price.findIndex((currentEle)=> currentEle<100)) // bcoz element doesn't exist

                      //💁 Array.prototype.filter()
                            /*It Returns a new array containing all elements of the calling array for which the provided filtering function returns true
                            It return [] (Empty Array) if elements not found*/
                            // const price = [200, 320, 452, 100, 600, 785, 900]
                            // const newPrice = price.filter((elem, index)=>{
                            //   return elem < 600;
                            // })
                            // console.log(newPrice);

                                    // **** Other Way To Write The Above Program ****
                            // const price = [200, 320, 452, 100, 600, 785, 900]
                            // console.log(price.filter((elem, index)=>elem<600))


      // 3.👉 How TO SORT and COMPARE an Array:-
                // ➡️ Array.prototype.sort()
                        /* The sort() method sorts the elements of an array in place and returns the sorted array.
                        The default sort order is assending, built upon converting the elements into strings, then compare their sequence of UTF-16 code units values.*/
                        // const month = ['March', 'June', 'April', 'December', 'November']
                        // console.log(month.sort()); // Sort according to Alphabet string

                        /*When we sort any num ber then first it convert numbers into string then sort it. */
                        // const numbers = [200, 301, 15658, 400]
                        // console.log(numbers.sort());
                        /*NOTE:- However, if a number is sorted as string, '200' is bigger than '15658', because '2' is bigger than '1'.Because of this, the sort() method will produce an incorrect result when sorting numbers.*/


      // 4.👉 Insert, Add, Replace & Delete elements in an Array[CRUD]:-
                // ➡️ ADD :-
                      //💁 Array.prototype.push():-
                             /*The push method adds one or more elements to the end of an array and returns the new length of the array.*/ 
                                // const animals = ['Cat', 'Dog', 'Elephant'];
                        //      console.log(myNumbers)
                                // // if i want to add more animals in this array' then,
                                // const count = animals.push('Cow','hen','tiger'); //count variable counts the elements
                                // console.log(animals, count);  // Add element in last of array

                      //💁 Array.prototype.unshift():-
                             /*The unshift method adds one or more elements to the beginning of an array and returns the new length of the array.*/ 
                        //      const animals = ['Cat', 'Dog', 'Elephant'];
                        //      console.log(myNumbers)
                        //      // if i want to add more animals in this array' then,
                        //      const count = animals.unshift('Cow','hen','tiger'); //count variable counts the elements
                        //      console.log(animals, count);  // Add element in last of array

                        //                      2nd Example
                        //      const myNumbers = [1, 2, 3, 5]
                        //      console.log(myNumbers)
                        //      myNumbers.unshift(4,6);
                        //      console.log(myNumbers); // Can't sort numbers, It add it in beginning

                // ➡️ DELETE :-
                      //💁 Array.prototype.pop():-
                            /* The pop() method removes the last elements from an array and returns that element. This method changes the length */
                        //     const animals = ['Cat', 'Dog', 'Elephant','Cow','hen','tiger'];
                        //     console.log(animals);
                        //     console.log(animals.pop())
                        //     console.log(animals);

                      //💁 Array.prototype.shift():-
                            /* The shift() method removes the first elements from an array and returns that element. This method changes the length */
                        //     const animals = ['Cat', 'Dog', 'Elephant','Cow','hen','tiger'];
                        //     console.log(animals);
                        //     console.log(animals.shift())
                        //     console.log(animals);


                // ➡️ splice Method :-
                        // 💁Array.prototype.splice()
                        // Adds and/or Remove elements from an array.

                           /*🔥Challenge Time 😃 :-
                           1. Add Dec at the end of an Array.
                           2. Add May after april of an Array.
                           3. Add Feb after april of an Array.
                           4. What is the return value of splice method?
                           5. update june to JUNE (undated)?
                           6. Search 'march' from array and update march to MARCH ?
                           7. Delete June from an array?    
                           8. Delete whole Array.  */

                                // 💌 SOLUTION 😍
                //  /* 🎏 Sol_1*/     const months = ['jan','march', 'april', 'june', 'july']
                //                 months.splice(5,0,'Dec')//Starting number is that,in which index(0-End) we want to add? Here, we want Dec at 5th index.
                //                 console.log(months);

        //   /*ANOTHER🎏🎏 Sol_1*/     const months = ['jan','march', 'april', 'june', 'july']
        //                         months.splice(months.length,0,'Dec')// When we don't know about the length of array
        //                         console.log(months);


                ///* 🎏Sol_2*/       const months = ['jan','march', 'april', 'june', 'july']
                //                 months.splice(3,0,'May')  //Starting number is that,in which index we want to add?
                //                 console.log(months);


                //  /* 🎏Sol_3*/     const months = ['jan','march', 'april', 'june', 'july']
                //                 months.splice(1,0,'Feb')  //Starting number is that,in which index we want to add?
                //                 console.log(months);


                /*🎏Sol_4*/          /* splice Method returns the number of deleted values or indexes. */
                                //    const months = ['jan','march', 'april', 'june', 'july']
                                //    newMonths = months.splice(1,0)
                                //    console.log(newMonths); // return empty array bcoz we don't delete any value
                                //    console.log(months);
                

                /*🎏Sol_5         update june to JUNE (undated)? */
                 /* month.splice(index, after that index how many index value you want to delete, string)  */
                                //    const months = ['jan','march', 'april', 'june', 'july']
                                //    months.splice(3, 1, 'JUNE') 
                                //    console.log(months);
                                   

                /*🎏Sol_6 Search 'march' from array and update march to MARCH,when we don't know it sustain or not */   
                                // const months = ['jan','march', 'april', 'june', 'july']
                                // const seacrhIndex = months.includes('march');
                                // if(seacrhIndex != -1){
                                //         months.splice(seacrhIndex, 1, 'MARCH')
                                //         console.log('Found! ',months);
                                // }else{
                                //         console.log('Not Found!');
                                // }
                                                
                                                        /*** OR ***/

                                // const months = ['jan','march', 'april', 'june', 'july']
                                // if(months.includes('march') != -1){
                                //         months.splice(months.includes('march'), 1, 'MARCH')
                                //         console.log('Found! ',months);
                                // }else{
                                //         console.log('Not Found!');
                                // }
                

                /*🎏Sol_7   Delete June from an array?*/   
                                // const months = ['jan','march', 'april', 'june', 'july']
                                // newMonths = months.splice(3,1)
                                // console.log(newMonths); // splice Return the deleted value
                                // console.log(months);


                /*🎏Sol_8.    Delete whole Array.  */
                                // const months = ['jan','march', 'april', 'june', 'july']
                                // months.splice(0,Infinity)
                                // console.log(months);



        // 5.👉 Map() & Reduce() Method :-
                // ➡️ Array.prototype.map() :-
                        // let newArray = arr.map(callback(currentValue[, index[, array]])
                        //         return element for newArray, after executing something
                        // }[, thisArg]);
                        // It returns a new containing the results of calling a function on every element in array.
                        
                        // const array1 = [1, 4, 5, 9, 16, 25];
                        // let newArray = array1.map((currentEle, index, array)=>{
                        //         return currentEle >9;
                        // })
                        // console.log(array1);
                        // console.log(newArray);
                        
                        // NOTE: forEach() method mutate the original array BUT map() method doesn't.forEach() returns 'UNDEFINE' but map() returns a new array with elements.
                                // const array1 = [1, 4, 5, 9, 16, 25];
                                // let newArrayMap = array1.map((currEle, index, arr)=>{
                                //         return `Index no = ${index} || Value = ${currEle} || from Array ${arr} `;
                                // })
                                // console.log(newArrayMap);

                                // let newArrayforEach = array1.forEach((currEle, index, arr)=>{
                                //         return `Index no = ${index} || Value = ${currEle} || from Array ${arr} `;
                                // })
                                // console.log(newArrayforEach);

                        // NOTE: You can attach reduce(), sort(), filter() and so on after performing a map() method on array BUT can't do with forEach().
                                // const array1 = [1, 4, 5, 9, 16, 25];
                                // let newArrayMap = array1.map((currEle)=>{
                                //         return currEle;
                                // }).filter((currEle)=>{
                                //         return currEle > 5;
                                // })
                                // console.log(newArrayMap);
                        

                        /*🔥Challenge Time 😃 :-*/
                                // 1. Find the square root of each element in an array?
                                        // let arr = [25, 36, 49, 64, 81];
                                        // let arrSquare = arr.map((currEle) =>{
                                        //         return Math.sqrt(currEle);
                                        // })
                                        // console.log(arrSquare);
                                
                                // 2. Multiply each element by 2 and return only those elements which are greater than 10.
                                        // let arr = [2, 3, 4, 5, 6];
                                        // let newArr = arr.map((currEle) =>{
                                        //         return currEle*2;
                                        // }).filter((currEle) =>{
                                        //         return currEle > 10;
                                        // })
                                        // console.log(newArr);

                                                        /****** IN ONE LINE SIMPLE CODE (Chaining)*****/
                                        // let arr = [2, 3, 4, 5, 6];
                                        // let newArr = arr.map((currEle)=>currEle*2).filter((currEle)=>currEle>10)
                                        // console.log(newArr);
       

                // ➡️ Array.prototype.reduce() :-
                        // It is usually used to convert the 3d or 2d array into a single dimensional array.
                        // And many more works can be done using reduce method.
                        // The reduce() method executes a reducer function (that you provided) on each element of the array, resulting in single output value.
                        // The reducer function takes four argument.
                                // Accumulator   ---> Ek Sath Jama Karna. Its like a box in which data can store.
                                // Current Value
                                // Current index
                                // Source Array

                           /*🔥Challenge Time 😃 :-*/
                                // 1. Working Like Professional, Multiply each element by 2 and return only those elements which are greater than 10 and add them.
                                        // let arr = [2, 3, 4, 5, 6,7,8];
                                        // let newArr = arr.map((currEle)=>currEle*2).filter((currEle)=>currEle>10).reduce((accumulator, currEle)=>{                                      
                                        //         return accumulator + currEle
                                        // })
                                        // console.log(newArr);

                                //      2. Find sum of array element USING Reduce METHOD
                                        // let arr = [2, 3, 4, 5, 6];
                                        // let sum = arr.reduce((accumulator, currEle)=>{
                                        //         // debugger
                                        //         return accumulator + currEle
                                        // })
                                        // console.log(sum);

                        // HOW TO FATTEN AN ARRAY, Converting 2d and 3d array into one dimensional array.
                                // const arr = [
                                //         ['zone1', 'zone2'],
                                //         ['zone3', 'zone4'],
                                //         ['zone5', 'zone6'],
                                //         ['zone7', 'zone8'],
                                // ]
                                // let fattenArr = arr.reduce((accum, currVal)=>{
                                //         return accum.concat(currVal);
                                // })
                                // console.log(fattenArr);

                        /* BUT WHAT WHEN WE ADD 3d array with these 2d array, can it convert it in 1d array? */
                                // const arr = [
                                //         ['zone1', 'zone2'],
                                //         ['zone3', 'zone4'],
                                //         ['zone5', 'zone6'],
                                //         ['zone7', 'zone8'],
                                //         ['zone7', ['zone8', 'zone9']],
                                // ]
                                // let fattenArr = arr.reduce((accum, currVal)=>{
                                //         return accum.concat(currVal);
                                // })
                                // console.log(fattenArr);
                        /* It doesn't, SO  in ECHMA 2020, a new method is introduce to do this which we futher discuss. */
                        

//🚩******************** STRING IN JAVASCRIPT *******************
 /*    A Javascript string is zero or more characters written inside quotes('' or "").
       Javascript strings are used for storing and manipulating text.
       You can use single or double quotes.
       Strings can created as primitives, from string literals, or as objects, using the string() constructor */

        /* 🎆Make a string with the help of string() constructor :- */
                // let myName = new String('Himanshu Kumar');
                // console.log(myName); 

        /*🎆 How to Find length of the string  */
                // let myName = 'Himanshu Kumar';
                // console.log(myName.length);      // By using length Property


      // 1.👉 Escape Character  OR  Backslash( \ ) Escape Character:-
                // var myName = 'My Name is \'HIMANSHU KUMAR\'';   // Can Use
                // console.log(myName);
                // var myName = "My Name is 'HIMANSHU KUMAR'";     // Can use
                // console.log(myName);
                // var myName = 'My Name is 'HIMANSHU KUMAR'';     // Can't Use
                // console.log(myName);


      // 2.👉 Finding a String in a String:-
            // Javascript counts position from zero
                // ➡️ String.prototype.indexOf(searchValue [, fromIndex]) :-
                        /* The indexOf() method returns the index of (the position of) the first occurrence of specified text in a string. Search from 0 to last index. */
                        // const myIntro = 'My name is Himanshu Kumar';
                        // console.log(myIntro.indexOf('name'));
                        // console.log(myIntro.indexOf('name', 2));


                // ➡️ String.prototype.lastIndexOf(searchValue [, fromIndex]) :-
                        /* The lastIndexOf() method returns the index of (the position of) the last occurrence of specified text in a string. Search from last index to 0. */
                        // const myIntro = 'My name is Himanshu Kumar';
                        // console.log(myIntro.lastIndexOf('name'));
                        // console.log(myIntro.lastIndexOf('name', 2));


      // 3.👉 Searching for a String in a String:-
                // ➡️ String.prototype.search()  :-
                        /*The search() method searches a string for a specified value and returns the position of the match
                        The search() method can not taken a second start position argument.  */
                        // const myIntro = 'My name is Himanshu Kumar';
                        // console.log(myIntro.search('name'));


      // 4.👉 Extracting String Parts:-
             /* There are three methods for extracting a part of a string :-
                   slice(start, end)
                   substring(start, end)
                   substr(start, length)  */

                // ➡️ The slice() Method :-
                        /* slice() extracts a part of a string and returns the extrscted part in a new string.
                            The method takes 2 parameters:
                                 the start position
                                 the end position (end not included, End wale ko chhor deta h)  */

                        // var fruits = 'Apple, Banana, Grapes';
                        // let searchFruits1 = fruits.slice(4);
                        // let searchFruits2 = fruits.slice(0,4);
                        // let searchFruits3 = fruits.slice(5,-2);  // Search from index 5 and and then count from last for -(minus) digit [-2, -1, 0]
                        // console.log(searchFruits1);            
                        // console.log(searchFruits2);            // OUTPUT : Appl
                        // console.log(searchFruits3);            

                            /* NOTE: The slice() method selects the elements starting at the given start argument, and ends at, but doesn't included the given end argument.
                            The original array will not be changed. */ 

                        /*🔥Challenge Time 😃 :-*/
                            /* 1. Display only 280 characters of a string like the one used in Tweeter? */
                                // const MyTweets = 'Good morning sir / madam.First of all, thank you for giving me thisopportunity to introduce myself.My name is Vaishali. I am from Bangalore.Talking about my educational qualification, I have completed my BE in CSE from vemana Institute of technology. I have done my 12th in St Francis pu college and 10th in our lady of Fatima high school.'
                                // let myTweetsLimit = MyTweets.slice(0, 280);
                                // console.log(MyTweets);
                                // console.log(myTweetsLimit);

                                
                // ➡️ The substring() Method :-
                        /*substring() is similar to slice().
                        The difference is that substring() can not accept negative indexes.*/
                                // var fruits = 'Apple, Banana, Grapes';
                                // let newFruits = fruits.substring(0,4);
                                // console.log(newFruits);
                        /* WHAT HAPPEN WHEN WE GIVE NEGATIVE VALUE*/
                                // var fruits = 'Apple, Banana, Grapes';
                                // let newFruits = fruits.substring(8, -2);
                                // console.log(newFruits);
                        /*NOTE: If we give negative value then the characters are counted from the 0th position*/


                // ➡️ The substr() Method :-
                        /* substr() is similar to slice().
                        The difference is that the second parameter specifies the length of the extracted part (jis length tak string ko extract karna hai, wo likha jata hai)*/
                        //    var fruits = 'Apple, Banana, Grapes';
                        //    let newFruits = fruits.substr(1,4)
                        //    console.log(newFruits);

                        //    var fruits = 'Apple, Banana, Grapes';
                        //    let newFruits = fruits.substr(-6)  // Output from last index
                        //    console.log(newFruits);


      // 5.👉 Replacing String Content:-
                /* ➡️ string.prototype.replace(searchFor, replaceWith) :-
                   The replace() method replaces a specified value with another value in a String.*/
                        // let intro = 'I am Himanshu Kumar';
                        // let replaceIntro = intro.replace('Himanshu', 'Sonu');
                        // console.log(replaceIntro);
                /*Points To Remember:-
                   1. The replace() method doesn't change the string it is called on. It returns a new string.
                   2. By default, the replace() method replaces only the first match.
                   3. By default, the replace() method is case sensitive.


      /* 6.👉 Extracting String Content:-
           There are 3 methods for extracting string characters:-
             1. chatAt(position)
             2. charCodeAt(position)
             3. Property access []*/
                /* ➡️ The charAt() Method :-
                        The charAt() method returns the character at a specified index(position) in a string.*/
                        //   let intro = 'I am Himanshu Kumar';
                        //   console.log(intro.charAt(0));

                /* ➡️ The charCodeAt() Method :-
                        The charCodeAt() method returns the unicode of the character at a specified index in a string.
                        The method returns a UTF-16 code (an integer between 0 and 65535)*/
                                //let intro = 'I am Himanshu Kumar';
                                //console.log(intro.charCodeAt(0));
                        /* The Unicode standard provides a unique number for every character, no matter the platform, device, applicaton, or language. UTF-8 is a popular Unicode encoding which has 88-bit code units. */

                        /*🔥Challenge Time 😃 :-*/
                           /* 1. Return the Unicode of the last character in a string */ 
                        //    let intro = 'I am Himanshu Kumar';
                        //    let lastChar = intro.length - 1;
                        //    console.log(intro.charCodeAt(lastChar));

                /* ➡️ The Property Access Method :-
                        ECMAScript 5 (2009) allows property access [] on strings.*/
                        // let intro = 'I am Himanshu Kumar';
                        // console.log(intro[0]);


      /* 7.👉 Other Useful methods:-*/
                // /* ➡️*/  let myName = 'Himanshu Kumar';
                //           console.log(myName.toUpperCase());
                //           console.log(myName.toLowerCase());

                /*➡️ The concate() Method :-*/
                        // let fName = 'Himanshu';
                        // let lName = 'Kumar';
                        // console.log(fName.concat(lName));

                /*➡️ string.trim() Method :-
                        The trim() method removes whitespace from both sides of a string.Not space between the strings */
                          // var str = '            Himanshu Kumar     ';
                          // console.log(str);
                          // console.log(str.trim());

                /*➡️ Converting a String to an Array :-
                        A string can be converted to an Array with the split() method */
                        // var txt1 = 'a,b,c,d,e';
                        // console.log(txt1.split(' '));
                        // console.log(txt1.split(','));


//8. 🚩******************** DATE & TIME IN JAVASCRIPT *******************
      /* 1.👉 Date :-
        Javascript Date objects represents a single moments in time in a platform-independent format.
        Date objects contains a number that represents milliseconds since 1 January 1970 UTC.
        NOTE: India is 5 hours 30 minutes ahead of Greenwich Mean Time and if we add 5hr 30min, then we get our indian Time. 
          There are 4 ways to create a new date Object: -
             new Date()
             new Date(year, month, day, hours, minutes, seconds, milliseconds) // It takes 7 arguments
             new Date(milliseconds)
             new Date(date string)                       */
          
               /*➡️ new Date() :-
                     Date objects are created with the new Date() constructor. */
                //      let currDate = new Date();
                //      console.log(currDate);
                //      console.log(new Date());

                //      console.log(new Date().toLocaleDateString());
                //      console.log(new Date().toString());


               /*➡️ Date.now() :-
                      Returns the numeric value coresponding to the current time. The number of milliseconds elapsed since January 1, 1970 00:00:00 UTC     */
                //       console.log(Date.now()); // 1 Jan 1970 se avi tak kitna millisec ho chuks h, wo hame milta h
                      

               /*➡️ new Date(year, month, ...) :-
                     7 Number specify - year, month, day, hour, minute, second and millisecond(in that order)
                     NOTE: Javascript counts months from 0 to 11. Jan is 0 & Dec is 11.  */
                        // var d = new Date(2021, 11, 25, 0, 7, 44, 0)
                        // console.log(d.toLocaleString());

                //      Month is compulsary to mention
                        // console.log(new Date(2021).toLocaleString());
                        // console.log(new Date(2021, 11).toLocaleString());
                       

               /*➡️ new Date(dateString) :-
                        It creates a new date object from a date string */
                        // var d = new Date("February 16, 2021 11:12:30 ")
                        // console.log(d.toLocaleString());


      /* 2.👉 Dates Method :-  */
      //      // How to get the individual date
                // const currDate = new Date();
                // console.log(currDate.toLocaleString());
                // console.log(currDate.getFullYear());
                // console.log(currDate.getMonth());  // 0-11 jan to dec
                // console.log(currDate.getDay());
                // console.log(currDate.getHours());

             // How to set the individual date  | All are specially used when we use it with html while creating Events
                // const currDate = new Date();
                // console.log(currDate.setFullYear(2022));
                // console.log(currDate.setFullYear(2022, 12, 25));
                // console.log(currDate.setMonth(11));
                // console.log(currDate.setDate(25));
                // console.log(currDate.toLocaleString());


      /* 2.👉 Time Method :-  */
                // How to get individual Time
                        // const curTime = new Date();
                        // console.log(curTime.getTime()); // It returns the numbers of miliseconds since Jan 1,1970
                        // console.log(curTime.getHours());  // It returns from 0-23
                        // console.log(curTime.getMinutes());
                        // console.log(curTime.getSeconds());
                        // console.log(curTime.getMilliseconds());

                // How to set the individual date | All are specially used when we use it with html while creating Events
                        // const currTime = new Date();
                        // console.log(currTime.setTime());
                        // console.log(currTime.setHours(5));
                        // console.log(currTime.setSeconds(11));
                        // console.log(currTime.setMinutes(25));
                        // console.log(currTime.setMilliseconds(5));

                        /*🎆Practice Time 😃 :-*/
                                // console.log(new Date().toLocaleDateString());
                                // console.log(new Date().toLocaleTimeString());
                                // console.log(new Date().toLocaleString());


//Section 9. 🚩******************** MATH OBJECT IN JAVASCRIPT *******************
        /* The Javascript Math Object allows you to perform mathematical tasks on numbers. */

        // /*➡️*/  console.log(Math.PI);

        // /*➡️   Math.round() :- Returns the value of x rounded to its nearest integer*/ 
                        // let num = 10.235;
                        // console.log(Math.round(num));

        /*   ➡️  Math.pow(x,y) :- Returns the value of x to the power of y  */
                        // console.log(Math.pow(2,3));

        /*   ➡️  Math.sqrt(x)  :- Returns the square rot of x */    
                        // console.log(Math.sqrt(25));   
                
        /*   ➡️  Math.abs(x) :- Returns the absolute (positive) value of x  */
                        // console.log(Math.abs(-96));
                        // console.log(Math.abs(6-9));

        /*   ➡️  Math.ceil(x) :- Returns the value of x rounded UP to its nearest integer  */
                        // console.log(Math.ceil(4.4));  // UP
                        // console.log(Math.round(4.4)); // round bcoz of after decimal
                        // console.log(Math.ceil(6.3));
                        // console.log(Math.round(6.3));

        /*   ➡️  Math.floor(x) :- Returns the value of x rounded DOWN to its nearest integer  */
                        // console.log(Math.floor(6.6));  // DOWN
                        // console.log(Math.ceil(6.6));   // UP
                        // console.log(Math.round(6.6));  // Round after watching after decimal

        /*   ➡️  Math.min() :- Can be used to find the lowest value in a list of arguments  */
                        // console.log(Math.min( 150, 24, 45, 12, 256));

        /*   ➡️  Math.max() :- Can be used to find the highest value in a list of arguments  */
                        // console.log(Math.max( 150, 24, 45, 12, 256));
                        
        /*   ➡️  Math.random() :- Returns a random number between 0(inclusive) and 1(exclusive)  */
                        // console.log(Math.random());     // 0-1
                        // console.log(Math.random()*10);  // 0-9
                        // console.log(Math.floor(Math.random()*10));    // -9

        /*   ➡️  Math.trunc() :- Returns the integer part of a number  */
                        // console.log(Math.trunc(2.25));
                        // console.log(Math.trunc(-2.25));
                /* NOTE: if the argument is positive number, Math.trunc() is equivalent to Math.floor() OTHERWISE 
                Math.trunc() is equivalent to Math.ceil().   */


//10. 🚩******************** DOM IN JAVASCRIPT *******************
      /* 1.👉 window VS document :-  
                🖥️--W->  Window is the main container or we can say the Global Object and any operations related to entire browser window can be a part of window object.
                🖥️--D->  whereas the DOM is the child of the window object.
                🖥️--W->  All the members like objects, methods or properties.If they are the part of window object then we do not refer the window object.
                🖥️--D->  whereas in the DOM we need to refer the document, if we want to use the document object, methods or properties.
                🖥️--W->  Window has methodas, properties and objects. Eg. setTimeout() or setInterval() are the methods, where as Document is the object of the Window and it also has a screen object with properties describing the physical display.
                🖥️--D->  Document is just the object od the global object that is Window, which deals with the document, the HTML elements themselves.        */


      /* 2.👉 DOM VS BOM :-
                🖥️-DOM-> The DOM is the Document Object Model, which deals with the document, the HTML elements themselves. Eg. document and all traversal you would do in it, events etc.
                        For eg. change the backgroundcolor to red --> document.body.style.background = "red";   

                🖥️-BOM-> The BOM is the Browser Object Model, which deals with browser components aside from the document, like history, location, navigator or screen (as well as some other that vary by browser)
                OR In simple meaning, all the window operations which comes under BOM are performed using BOM.
                Functions like alert/confirm/prompt are also a part of BOM, they are directly not related to the document, but represent pure browser methods of communicating with the user.    */


      /* 3.👉 DOM Navigation:-


      9:01