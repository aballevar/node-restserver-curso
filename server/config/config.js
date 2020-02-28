// ===================================
//   Puerto
// ===================================
process.env.PORT = process.env.PORT || 3000;


// ===================================
//   Entorno
// ===================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ===================================
//   Base de datos
// ===================================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://aballevar:0EBd8tWTeJU4ue6I@cluster0-v7ika.mongodb.net/cafe';
}
process.env.URLDB = urlDB;