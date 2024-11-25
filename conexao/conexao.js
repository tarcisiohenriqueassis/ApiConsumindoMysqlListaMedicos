import mysql2 from'mysql2/promise';

const pool = mysql2.createPool({
    host:'localhost',
    user:'usuario_bd_medicos',
    password:'123456',
    database:'bd_medicos'
})

export default pool;