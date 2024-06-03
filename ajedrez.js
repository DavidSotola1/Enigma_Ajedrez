/* 

ACTIVIDAD:  Pintar tablero de ajedrez 8x8 con 
            espacios rojos (representados por "1")
            y espacios azules (representados por "2").

CRITERIOS:  Igual cantidad de espacios rojos y azules, 
            evitando a su vez que dos filas o columnas presenten el 
            mismo número de espacios rojos.
*/



// Definimos función para crear tablero
let makeTablero = (filas, columnas) => {
    var matrixTablero = [];
    for(i = 0; i < columnas; i++) {
        matrixTablero[i] = new Array(filas);
    }
    
    // Inicializamos las casillas en 0 siendo 0 = sin pintar
    for(i = 0; i < columnas; i++) {
        for(j = 0; j < filas; j++) {
            matrixTablero[i][j] = 0
    }
}
    return [matrixTablero, filas, columnas]
}


// Creamos el tablero
const [tablero, filas, columnas] = makeTablero(8, 8)


// Definimos función para pintar el tablero
function pintarTablero(matrix, col1, col2) {

    // Recorremos matríz y pintamos las casillas correspondientes
    for(i = 0; i < filas; i++) {
        for(j = 0; j < columnas - i; j++) {
            matrix[i][j] = col1
        }
    }

    for(i = 0; i < filas; i++) {
        for(j = 0; j < columnas; j++) {
            if(matrix[i][j] != col1) {
                matrix[i][j] = col2
            }
        }
    }
    return matrix
}


// Llamamos a la función y ponemos argumentos 1 y 2 siendo 1 = rojo y 2 = azul
let tableroPintado = pintarTablero(tablero, 1, 2)

console.log(tablero)



/* 

CONCLUSIÓN: Es imposible pintar el tablero con los criterios dados.
            Con un tablero de 8x8, observándolo y pensado de manera 
            burda, uno concluye que para mantener la misma cantidad
            de espacios rojos(1) y azules(2), algunas filas o columnas, 
            si o si, van a tener la misma cantidad de casillas rojas(1).

            En el caso de un tablero 1000x1000, el problema se mantiene,
            ya que ambas matrizes son cuadradas y tienen filas y columnas
            pares.

*/