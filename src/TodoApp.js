import React from 'react';
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';
import { NewTodoForm } from './Components/NewTodoForm';
import Footer from './Components/Footer'
import './App.css';
import useTodoState from './Hooks/useTodoState';
import Container from 'react-bootstrap/Container'


export function TodoApp() {
    const initialTodos = [
        { id: 1, task: 'Go to the supermarket', complete: false },
        { id: 2, task: 'Call Alice', complete: false },
        { id: 3, task: 'Ask Alice to call Bob', complete: false },
        { id: 4, task: 'Do the dishes', complete: false },
        { id: 5, task: 'Change car tyres', complete: false }
    ]
    const { todos, addTodo, removeTodo, toggleComplete } = useTodoState(initialTodos)


    return (
        <Container>
            <Navbar />
            <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleComplete={toggleComplete}
            />
            <NewTodoForm addTodo={addTodo} />
            <Footer />
        </Container>
    );
}



export default TodoApp;
