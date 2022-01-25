import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { faCheckCircle, faWrench, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TodoItem({ task, id, complete, removeTodo }) {

    function onClick(id) {
        var todoItems = this.state.todos.slice();
        for (let i = 0; i < this.state.todos.length; i++) {
            if (todoItems[i].id === id) {
                var newComplete = !todoItems[i].complete;
                todoItems[i].complete = newComplete;
            }
        }

        this.setState({
            todos: todoItems
        });
    }

    return (
        <Col xl={12}
            style={{ backgroundColor: complete ? "lightgreen" : "pink" }}>
            <h3>{task}</h3>
            <Button
                variant={complete ? "success" : "secondary"}
                className="btn"
                onClick={() => onClick(id)}>
                {complete ?
                    <FontAwesomeIcon aria-label="Task completed" icon={faCheckCircle} />
                    : <FontAwesomeIcon aria-label="Work in Progress" icon={faWrench} />}
            </Button>
            <Button
                variant="danger"
                className="btn"
                onClick={() =>
                    removeTodo(id)
                }>
                <FontAwesomeIcon
                    aria-label="Delete Task"
                    icon={faTrashAlt} />
            </Button>
        </Col>
    );
}