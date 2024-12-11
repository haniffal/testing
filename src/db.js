const mysql = require('mysql2');

// Membuat koneksi ke MySQL
const connection = mysql.createConnection({
    host: process.env.DB_HOST,        // Ganti dengan IP instance MySQL Anda
    user: process.env.DB_USER,                  // Ganti dengan username MySQL Anda
    database: process.env.DB_NAME,       // Ganti dengan nama database Anda
    password: process.env.DB_PASS        // Ganti dengan password MySQL Anda
    
});

// Mengecek koneksi
connection.connect((err) => {
    if (err) {
        console.error('Koneksi gagal:', err.message);
    } else {
        console.log('Berhasil terhubung ke database.');
    }
    
});

module.exports = connection ;