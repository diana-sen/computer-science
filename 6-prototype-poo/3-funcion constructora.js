//Asumiendo que usamos es5
function createSuperHumano(superpoder, tipo, alias){
    var superhumano = {  
        superpoder: superpoder,
        tipo: tipo,
        alias: alias
    };
    return superhumano;
};

var flash =createSuperHumano("super velocidad", "super heroe", "flash");
console.log(flash);