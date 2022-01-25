import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';
import { NewTodoForm } from './Components/NewTodoForm';
import Footer from './Components/Footer'
import './App.css';
import { v4 as uuidv4 } from 'uuid'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


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
        <Container>
            <Navbar />
            <Row>
                <Col>
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                    />
                    <NewTodoForm addTodo={addTodo} />
                </Col>
            </Row>
            <Footer />
        </Container>
    );
}



export default TodoApp;
