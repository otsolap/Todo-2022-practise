import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { TodoItem } from './TodoItem';

export default function TodoList({ todos, removeTodo, toggleComplete }) {
    return (
        <Container>
            <Row>
                {todos.map(todo => (
                    <TodoItem
                        task={todo.task}
                        key={todo.id}
                        id={todo.id}
                        complete={todo.complete}
                        removeTodo={removeTodo}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </Row>
        </Container>
    );
}

