import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  const submit = (e) => {
     e.preventDefault();
     if(!title || !desc){
       alert("Title or Description cannnot be blank")
     }
     else{
       addTodo(title, desc);
     title = "";
     desc = "";
    //  setTitle("");
    //  setDesc("")
  }
}

  return (
    <div className='container'>
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title">Todo Title</label>
          <input type="text" className="form-control" id="title" placeholder="Enter title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <small id="todoHelp" className="form-text text-muted">We'll never share your Todos with anyone else.</small>
        </div>
        <div className="mb-3">
          <label htmlFor="desc">Todo Description</label>
          <input type="text" className="form-control" id="desc" placeholder="Enter Description" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
      </form>
    </div>
  )
}

