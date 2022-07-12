 //FInding primitives is diff from finding reference types

 
//  const  courses = [
// {id: 1 , name : 'HTML For Dummies'},
// {id: 2, name:'JavaScript For Dumies'},
//  ];

//  const course = courses.find(function(course){

//     return course.name === 'HTML For Dummies';

//  });

//  console.log(course);

//  const course2 = courses.findIndex(function(course2){

//     return course2.name === 'HTML For Dummies';

//  });

//  console.log('Index Is ',course2);

//  //Arrow Functions

//  const course3 = courses.find(course3 => course3.name === 'HTML For Dummies');

//  console.log('Arrow Index Is ',course3);

//  //Removing Elements From An Array

//  const somenumbers = [1 , 2 , 3 , 4];
//  //somenumbers.push()  Adds at the end of an array
//  //somenumbers.unshift() Addds at the beginning of an array
//  //somenumbers.splice Adds elements somewhere in the middle


//  //Now For Removing 

//  //End
//  //somenumbers.pop. Removes last element in the array & stores it in the last object
// // const last = somenumbers.pop();
// // console.log(last);
// //  //Begining
// //  const begining = somenumbers.shift();
// //  console.log(begining);
//  //Middle
//  somenumbers.splice(2,1);
// console.log(somenumbers);


// //emptying an array
// let numbers = [1 , 2 , 3 , 4];

// let another = numbers;

// //solution 1
// //numbers = [];
// //solution 2
// /// truncates the original array so it does not matter how many references to the array

// // console.log('Empty Array',numbers);
// // console.log('Original Array',numbers);
// //solution 3
// // numbers.splice(0,numbers.length);
// //solution 4
// // while(numbers.length >0){
// //     numbers.pop();
// // }
// // console.log('Popping ',numbers);

// //combining Arrays
// //solution 1
// const first = [1,2,3];

// const second = [4,5,6];

// let concated = first.concat(second);
// console.log(concated);

// //solution 4

// //const slice = concated.slice(2,4);// started after index 2 and finished after inidex 4
// const slice = concated.slice(2);//staring from index 2 onwards
// console.log(slice);


// //dealing  with objects
// // will point at the reference

// const myObject = [{id:1}];

// //Note that when we concat with an object, the object itself is not copied , only its reference

// const combined = myObject.concat(second);
// myObject[0].id = 10;//0 here represents the first element which is the object and change its id to 10
// console.log(combined);

// //spread (...)method is cleaner and more flexible for combining arrays
// //combine all elements of first array nd second array

// const first2 = [1,2,3];

// const second2 = [4,5,6];

// let combined2 = [...first2,'Adding Btwn', ...second2,'Adding End'];

// let copy = [...combined2];

// console.log('Copy',copy);
// console.log('Using Spread',combined2);

//iterating an array

const numbers = [1,2,3];
for (let number of numbers){
   console.log(number);
}

//Another way

numbers.forEach(function(number){
   console.log('For Each',number);
});

//Using Fat Arrow

numbers.forEach(number => console.log('Fat Arrow',number));

numbers.forEach((number,index) => console.log('Fat Arrow With Index',index,number));

//Joining Arrays

const numberz = [1,2,3];

const joined = numbers.join(',');
console.log(joined);

//nother way to join messsages

const message = 'This is my message';

const parts = message.split(' ');//splitting the array with ''
console.log(parts);

parts.join('');

const combined3 = parts.join('-');
console.log(combined3);// this is useful when building a URL slug

//Sorting Arrays

const unsortedNumbers = [2 ,3,1];

unsortedNumbers.sort();
console.log('Sorted Solution',unsortedNumbers);

//reversing the order in an array

unsortedNumbers.reverse(console.log('Reverse',unsortedNumbers));
//Another example with object

const courses = [
{id:1 , name : 'Node.js'},
{id:2 , name: 'Javascript For Dummies'}
];

courses.sort(function(a,b){
// a < b => -1
// a > b => 1
// a == b => 0
if (a.name < name.b ) {
   return -1;
}
if (a.name > b.name) {
   return 1;
}
return 0;

});

console.log(courses);