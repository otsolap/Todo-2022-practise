import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import UseInputState from '../Hooks/UseInputState';

export function NewTodoForm({ addTodo }) {
    const [value, onInputChange, reset] = UseInputState("")

    return (
        <Form onSubmit={e => {
            e.preventDefault();
            addTodo(value)
            reset();
        }}>
            <Form.Group>
                <Form.Label>
                    Tasks To Do
                </Form.Label>
                <Form.Control
                    type="text"
                    name="task"
                    id="task"
                    value={value}
                    onChange={onInputChange}
                />
                <Form.Text className="text-muted">
                    Add new task
                </Form.Text>
            </Form.Group>
            <Button
                variant="success"
                className="btn"
                type="submit"
            >
                Submit
            </Button>
        </Form>
    );
}