import React, { useEffect, useState } from 'react'

export default ({todos, setTodos}) => {
    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setTodos(data)
            });
        }
    ,[]);

  return (
    <>
        <h2>Todo list</h2>
        <ol>
        {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
        ))}
        </ol>
    </>
  )
}
