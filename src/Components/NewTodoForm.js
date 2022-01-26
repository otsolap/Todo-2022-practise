import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import UseInputState from '../Hooks/UseInputState';

export function NewTodoForm({ addTodo }) {
    const [value, onInputChange, reset] = UseInputState("")

    return (
        <Container className="bg-dark py-5">
            <Row>
                <Form onSubmit={e => {
                    e.preventDefault();
                    addTodo(value)
                    reset();
                }}>
                    <Form.Group>
                        <Form.Label className="text-center text-light">
                            Tasks To Do
                        </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="task"
                            id="task"
                            value={value}
                            onChange={onInputChange}
                        />
                        <Form.Text className="text-muted text-light">
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
            </Row>
        </Container>
    );
}