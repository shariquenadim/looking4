const mysql = require('mysql');

const db = {
  host: "localhost",
  user: "root",
  password: "root",
  database: 'test'
};

const connectToDb = async function(){
  return new Promise((resolve,reject) => {
     const conn = mysql.createConnection(db)
     conn.connect(err => {
        if(err) reject(err)

        resolve(conn);
     })
  })
}

module.exports =  {
  db,
  connectToDb,
};