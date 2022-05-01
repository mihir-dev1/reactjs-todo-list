import React from 'react'
import TodoItem from './TodoItem'
export const Todos = (props) => {
  return (
    <div className='container text-center'>
      <h3 className='text-center'>Todo List</h3>
      { props.todos.length !== 0 ? <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Desc</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete}/>
          })
          }
        </tbody>
      </table> : <strong className='p-4'>Not todo items</strong> }
    </div>
  )
}
