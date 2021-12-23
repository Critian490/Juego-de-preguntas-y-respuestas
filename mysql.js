let nombreJugador = document.getElementById('nombreJugador')

const mysql = require('mysql');

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'puntajes'
})

conection.connect ( (err) =>{
    if(err) throw err
    console.log('La conexion funciona')
})

//node ./mysql.js
const insertar = "INSERT INTO score (id, Nombre, Puntaje) VALUES('',nombreJugador, '8')"
conection.query(insertar, (err, rows) =>{
    if(err) throw err
})

conection.query('SELECT* from score', (err, rows) =>{
    if(err) throw err
    console.log("Los datos de la tabla son estos: ")
    console.log(rows)
    console.log("La cantidad de participantes son: ")
    console.log(rows.length)
    const jugador1 = rows[0]
    console.log(`El usuario ${jugador1.Nombre} tiene un puntaje de ${jugador1.Puntaje}`)
})

conection.end();