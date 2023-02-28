import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }else{

            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

  return (
    <div className='container my-3'>
        <h3>Add Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="todoTitle" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange= {(e)=>{setTitle(e.target.value)}}  className="form-control" id="todoTitle" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text"   onChange= {(e)=>{setDesc(e.target.value)}}  value={desc} className="form-control" id="desc"/>
  </div>

  <button type="submit" className="btn btn-sm btn-success">Submit</button>
</form>
    </div>
  )
}

export default AddTodo
