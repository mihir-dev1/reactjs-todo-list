import React, {useState} from "react";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import "./App.css";

function App() {
  const onDelete = (todo) => {
    setTodoList(todoList.filter((e) => {
      return e !== todo;
    }))
    // console.log("I am Delete",todo);
    // todoList.splice(todo.id,1)
  }

  const addTodo = (title,desc) => {
    const id = todoList.length + 1
    const data = {};
    data['id'] = id;
    data['title'] = title;
    data['desc'] = desc;
    setTodoList([...todoList,data])
  }

  let myData = {
    title:'Todo List',
    SearchBar:false
  }
  
  const [todoList, setTodoList] = useState([
    {
      id:1,
      title: "Go to the School",
      desc:'You need to go the school to get this done'
    },
    {
      id:2,
      title: "Go to the office",
      desc:'You need to go the office to get this done'
    },
    {
      id:3,
      title: "Go to the mall",
      desc:'You need to go the market to get this done'
    }
  ])

  return (
    <>
      <Header myData={myData}></Header>
      <div className="container">
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todoList} onDelete={onDelete}></Todos>
      </div>
      <Footer/>
    </>
  );
}

export default App;
