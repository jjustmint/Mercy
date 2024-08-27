const mysql = require ("mysql2");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_ocqmz",
  password: "F7DYYpIrNGB7BEfZ",
  database: "lab_blank01_o3yels",
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

module.exports = connection;