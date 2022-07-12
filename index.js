 //FInding primitives is diff from finding reference types

 
 const  courses = [
{id: 1 , name : 'HTML For Dummies'},
{id: 2, name:'JavaScript For Dumies'},
 ];

 const course = courses.find(function(course){

    return course.name === 'HTML For Dummies';

 });

 console.log(course);

 const course2 = courses.findIndex(function(course2){

    return course2.name === 'HTML For Dummies';

 });

 console.log('Index Is ',course2);

 //Arrow Functions

 const course3 = courses.find(course3 => course3.name === 'HTML For Dummies');

 console.log('Arrow Index Is ',course3);