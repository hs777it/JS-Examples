let student = { name: 'ahmed' }
//console.log(student);

let newStudent = student;  // reference from student object
let newStudent2 = { ...student }; // copy from student object
student.name = 'ali';
console.log(newStudent);
console.log(newStudent2);