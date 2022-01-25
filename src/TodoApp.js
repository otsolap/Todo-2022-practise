import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';
import { NewTodoForm } from './Components/NewTodoForm';
import Footer from './Components/Footer'
import './App.css';


export function TodoApp() {
    const initialTodos = [
        { id: 1, task: 'Go to the supermarket', complete: false },
        { id: 2, task: 'Call Alice', complete: false },
        { id: 3, task: 'Ask Alice to call Bob', complete: false },
        { id: 4, task: 'Do the dishes', complete: false },
        { id: 5, task: 'Change car tyres', complete: false }
    ]
    const [todos, setTodos] = useState(initialTodos)

    const addTodo = newTodoTask => {
        setTodos([...todos, { id: uuidv4(), task: newTodoTask, complete: false }])
    }
    const removeTodo = todoId => {
        const remainingTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(remainingTodos);
    }


    return (
        <div>
            <Navbar />
            <TodoList
                todos={todos}
                removeTodo={removeTodo}
            />
            <NewTodoForm addTodo={addTodo} />
            <Footer />
        </div>
    );
}



export default TodoApp;
