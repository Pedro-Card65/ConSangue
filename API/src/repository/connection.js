import mysql from 'mysql2/promise';

const con = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'ConSangue',
    password: 'root'
})

console.log('-> Conectou com MySQL! ');

export { con };