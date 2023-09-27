import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
  const[editMode , setEditMode] = useState(false);
  const[list, setList] = useState([]);
  const[firstname, setFirstname]= useState(" ");
  const[lastname, setLastname]= useState(" ");
  const[userId, setUserId]= useState(" ");

  const showTodos = async ()=>{
    try{
      const {data}= await axios.get('/api/show/todos')
      setList(data);
    } catch (error){
       console.log(error);
    }
  }

  const addtodo = async (e)=>{
    e.preventDefault();
    try{
      const add = await axios.post('/api/create/list', {firstname, lastname});
if(add.status ===200)
      {
        setFirstname(" ");
        setLastname(" ");
        showTodos();
      }
    } catch (error){
       console.log(error);
    }
  }

  const deletetodo = async (id)=>{   
    try{
      const todoDelete = await axios.delete(`/api/delete/todos/${id}`);
if(todoDelete.status ===200)
      {
        showTodos();
      }
    } catch (error){
       console.log(error);
    }
  }

  const ShowSingleTodo = async (id)=>{   
    setEditMode(true);
    try{
      const{data} = await axios.get(`/api/todos/${id}`);
      setFirstname(data.firstname);
      setLastname(data.lastname)
      setUserId(data.id);

    } catch (error){
       console.log(error);
    }
  }

  const editTodo = async (e)=>{
    e.preventDefault();
    try{
      const edit = await axios.put(`/api/update/todos/${userId}`, {firstname, lastname});
if(edit.status ===200)
      {
        setEditMode(false);
        setFirstname(" ");
        setLastname(" ");
        showTodos();
      }
    } catch (error){
       console.log(error);
    }
  }



  useEffect(()=>{
    showTodos();
  },[]);

  return (
   <>
  <div className='container'>
    <div className='form' style={{paddingBottom:"50px",paddingTop:"50px"}}>
      <form onSubmit={editMode ? editTodo : addtodo}>
        <div className='"form-wrapper' style={{display:"flex", justifyContent:"space-between"}}>
        <div style={{flex:1, marginRight:"10px"}}>
          <input onChange={(e)=>setFirstname(e.target.value)} value={firstname} className="form-control" type='text' placeholder='first name' name='firstName'></input>
        </div>
        <div style={{flex:1}}>
        <input onChange={(e)=>setLastname(e.target.value)} value={lastname} className="form-control" type='text' placeholder='last name' name='lastName'></input>
        </div>
        {editMode ?
          <button type='submit' style={{width:"200px", marginLeft:"10px"}} className='btn btn-primary'>Edit</button> :
          <button type='submit' style={{width:"200px", marginLeft:"10px"}} className='btn btn-success'>+ Add</button>}
        
        </div>
      </form>
    </div>
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>First name</th>
          <th scope='col'>Last name</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          list && list.map(d =>(
        <tr key={d.id}>
          <th scope="row">{d.id}</th>
          <td>{d.firstname}</td>
          <td>{d.lastname}</td>
          <td>
            <i onClick={()=>ShowSingleTodo(d.id)} className='fa-solid fa-pen-to-square' style={{color:"green", cursor:"pointer", marginRight:"25px"}}></i>
            <i onClick={()=>deletetodo(d.id)} style={{color:"red", cursor:"pointer"}} className='fa-solid fa-trash-can'></i>
          </td>
        </tr>
          ))
}
      </tbody>
    </table>
  </div>
   </>
  )
}

export default Home