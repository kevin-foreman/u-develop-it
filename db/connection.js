const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: `localhost`,

        // Your mySQL username

        user: `root`,

        // Your mySQL password

        password: `ISEEkwel!@#123`,

        database: `election`
    },

    console.log(`Connected to the elecetion database.`)
);

module.exports = db;