var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root123',
  database : 'Todolist'
});
 

db.connect(error =>{
    if (error) throw error;
console.log('db connected');
});

module.exports=db;