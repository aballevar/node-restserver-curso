// ===================================
//   Puerto
// ===================================
process.env.PORT = process.env.PORT || 3000;


// ===================================
//   Entorno
// ===================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ===================================
//   Vencimiento del Token
// ===================================
// 60 segundos
// 60 minutps
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = '48h';


// ===================================
//   SEED de autenticación
// ===================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ===================================
//   Base de datos
// ===================================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

// ===================================
//   Google Cliente ID
// ===================================
process.env.CLIENTE_ID = process.env.CLIENTE_ID || '652620376493-do1lbl3hmau36li2bvamfvanu02livfc.apps.googleusercontent.com';