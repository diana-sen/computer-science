
/**
*Problema
*Imprimir los numeros pares del 1-20,
*exceptuando el 18.
**/

// while
// do - while
//for
//inicio, condición, razón de cambio


var i = 0; //inicio
while(i <= 20) { //condición
  if (i % 2  === 0 && i!== 18) {
    //console.log('numero: ' + i); //muestra i como string
    console.log('numero: ', i);  
  }
   // i = i + 1; // razon de cambio
 // i += 1; //operador de asignación suma
  i++; //operador de incremento
}

//for(inicio; condicion; razonCambio) {
  
for (var j = 0; j <= 20; j++){
    if (j % 2  === 0 && j!== 18) {
    console.log('numero: ', j);  
  } 
}

//do...while

// do-while inicio
var k= 0;
  console.log('Iniciando ciclo do - while');
do {

    if (k % 2  === 0 && k!== 18) {
    console.log('numero doWhile: ', k);  
    }
    k++; //razon de cambio
} while(k <= 20) // condicion