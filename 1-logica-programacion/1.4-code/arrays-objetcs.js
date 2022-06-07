//Tipos fuerte vs tipado debil
// int numero = 7; vs var numero = 7;

//Tipos de datos primitivos
var nombre = "jose";
var numero = 7;
var decimal = 10.5;
var flag = true;

// Tipos de datos compuestos
var arr = [ 0, 10, 20, 30, 40, 'steve', true, {name: 'data'} ];
var student = {
  id:1, 
  name:'jose montoya',
  calificacione: [10, 8, 9] 
};

console.log(nombre);
console.log(arr[4]); //10
console.log(arr[8]); //
console.log(arr[10]); // 100
console.log(student.name); //nombre del student
console.log(arr[7].name); //data
console.log(student.califiaciones[1]); //calificacion de 8 del estudiante
