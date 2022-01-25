import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';
import Footer from './Components/Footer'
import './App.css';



export function TodoApp() {
    const initialTodos = [
        { id: 1, name: 'Go to the supermarket', complete: false },
        { id: 2, name: 'Call Alice', complete: false },
        { id: 3, name: 'Ask Alice to call Bob', complete: false },
        { id: 4, name: 'Do the dishes', complete: false },
        { id: 5, name: 'Change car tyres', complete: false }
    ]
    const [todos, setTodos] = useState(initialTodos)

    return (
        <div>
            <Navbar />
            <TodoList todos={todos} />
            <Footer />
        </div>
    );
}



export default TodoApp;
