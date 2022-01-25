import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import UseInputState from '../Hooks/UseInputState';

export function NewTodoForm({ addTodo }) {
    const [value, onInputChange, reset] = UseInputState("")

    const formSubmit = (e) => {
        e.preventDefault();
        addTodo(value)
        reset();
    }

    return (
        <Form.Group
            onSubmit={formSubmit}>
            <Form.Label>
                Tasks To Do
            </Form.Label>
            <Form.Control
                placeholder="Add new task"
                value={value}
                onChange={onInputChange}>
            </Form.Control>
            <Button
                variant="success"
                className="btn btn-success"
                type="submit"
                value="Submit">
                Submit
            </Button>
        </Form.Group>
    );
}