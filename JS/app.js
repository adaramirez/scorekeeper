var scores = {}; //va a llevar el registro de los jugadores y sus puntos. 
console.log(scores);
//
function createPlayer (object, name) {
    object [name.toLowerCase()] = 0; //le estoy poniendo una key al objeto y lo estoy inicializando en cero
    console.log(object);
}

function addPoints (name, points){
    scores[name] += points; //le estoy agregando el valor a la key del objeto
    console.log (scores);
}

function printAllPoints (){
    var arrayPlayers = Object.keys (scores);
    var resultados = "";
    for (var k=0; k < arrayPlayers.length; k++){
        if (k == arrayPlayers.length - 1){ //se verifica que estamos en el último índex para quitar la coma que separa los elementos
            resultados += arrayPlayers[k] + ':' + scores[arrayPlayers[k]];
        } else {
            resultados += arrayPlayers[k] + ':' + scores[arrayPlayers[k]] + ", ";
        }
    }
    return resultados;

}

createPlayer (scores, "Ana");
addPoints ("ana", 20);
addPoints ("ana", 40);
createPlayer (scores, "Silvana");
addPoints ("silvana",50);
console.log (printAllPoints ()); 
