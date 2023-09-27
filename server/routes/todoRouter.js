const express = require('express');
const router = express.Router();
const {createDb,createTable,createList, showTodos, singleTodos, updateTodos, deleteTodos} = require('../controllers/todocontrollers');


router.get('/create/database',createDb);
router.get('/create/table',createTable);
router.post('/create/list',createList);
router.get('/show/todos',showTodos);
router.get('/todos/:id',singleTodos);
router.put('/update/todos/:id',updateTodos);
router.delete('/delete/todos/:id',deleteTodos);
module.exports = router;