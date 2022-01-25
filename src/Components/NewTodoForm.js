import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export function NewTodoForm(props) {

    return (
        <Form.Group
            onSubmit={props.onSubmit}>
            <Form.Label>
                Tasks To Do
            </Form.Label>
            <Form.Control
                placeholder="Add new task"
                value={props.newTodoName}
                onChange={props.onInputChange}>
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