const db = require("../db/database");

exports.createDb= (req,res)=>{
    let q ="CREATE DATABASE Todolist";
      db.query(q,(err,results) =>{
        if (err) throw err;
        return res.status(201).json("db created")
      })
}

exports.createTable =(req, res)=>{
  let q = 'CREATE TABLE todos(id int AUTO_INCREMENT, firstname VARCHAR(255), lastname VARCHAR(255) , PRIMARY KEY(ID))';
  db.query(q,(err, result)=>{
    if(err) throw err;
    return res.status(201).json("db created")
  })
}

exports.createList= (req,res)=>{
  let q ="INSERT INTO todos SET ?";
  const {firstname,lastname} = req.body;
    db.query(q,{firstname,lastname},(err,results) =>{
      if (err) return res.json(err);
      return res.status(200).json(results);
    })
}

exports.showTodos= (req,res)=>{
  let q ="SELECT * FROM todos";
    db.query(q,(err,results) =>{
      if (err) return res.json(err);
      return res.status(200).json(results);
    })
}

exports.singleTodos= (req,res)=>{
  let q =`SELECT * FROM todos where id=${req.params.id}`;
    db.query(q,(err,results) =>{
      if (err) return res.json(err);
      return res.status(200).json(results[0]);
    })
}

exports.updateTodos= (req,res)=>{
  let q =`UPDATE todos SET ? where id=${req.params.id}`;
  const {firstname,lastname} = req.body;
    db.query(q,{firstname,lastname},(err,results) =>{
      if (err) return res.json(err);
      return res.status(200).json(results);
    })
}

exports.deleteTodos= (req,res)=>{
  let q =`DELETE FROM todos where id=${req.params.id}`;

    db.query(q,(err,results) =>{
      if (err) return res.json(err);
      return res.status(200).json({data:"todo deleted"});
    })
}