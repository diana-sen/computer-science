
function createSuperHumano(superpoder, tipo, alias){

    this.superpoder = superpoder;
    this.tipo = tipo;
    this.alias = alias;
};

//el new lo que hace es que al terminar de ejecutar la función createSuperHumano,
//debe retornar todas las propiedades del this
//el new sustituye al return

const flash = new createSuperHumano("super velocidad", "super heroe", "flash");
const mujerMaravilla = new createSuperHumano("super fuerza", "super heroe", "mujer maravilla");

/**
 * 1 Se cambia var por const ya que es mas correcto limitar el alcance de las variables.
   2. El objeto literal es reemplazado por la sintaxis this.
   3. El return de la función constructora se elimina, ya que al llamar a la función
   constructora con new, implicitamente nos retorna un objeto con las propiedades asignadas
   en el this.
   */


console.log(flash);
console.log(mujerMaravilla);