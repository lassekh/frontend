import { useState } from "react";

const TodoForm = ({todo, setTodo, setTodos, todos}) => {
    const handleSubmit = (e) => { //event
        e.preventDefault();
        todo.id = todos[todos.length-1].id + 1
        setTodos([...todos, todo])
        console.log(todo.id);  
    }
    const changeTodo = (e) => {
        setTodo({
            ...todo, //Spread syntax - sets this object to 'todo' object defined as a useState
            [e.target.id]: e.target.value //this overwrites values in the 'todo' object, because keys are equal to object keys
        });
    }

    return (
        <>
            <h2>Add new todo</h2>
            <form onSubmit={handleSubmit}>
                Title <input id="title" type="text" value={todo.title} placeholder="Write a new todo" onChange={changeTodo} /><br />
                User ID <input id="userId" type="number" value={todo.userId} placeholder="Enter user id" onChange={changeTodo} /><br />
                <input type="submit" value="Add todo" />
            </form>
        </>
    )
}
export default TodoForm