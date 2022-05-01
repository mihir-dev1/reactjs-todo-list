import React, {useState} from "react";

export const AddTodo = (props) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc) {
            alert("title & desc required")
        }
        props.addTodo(title,desc);
    }

    return (
       <div>
            <h4 className='text-center'>Add Todo</h4>
        <form onSubmit={submit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp" placeholder="Enter title"/>
            </div>
            <div className="form-group">
                <label htmlFor="des">Description</label>
                <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="des" placeholder="Description"/>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
       </div>
    )
}
