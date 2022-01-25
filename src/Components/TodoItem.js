import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { faCheckCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TodoItem({ task, id, complete, removeTodo, toggleComplete }) {



    return (
        <Col xl={12}
            style={{ backgroundColor: complete ? "lightgreen" : "pink" }}>
            <h3>{task}</h3>
            <Button
                variant={complete ? "success" : "secondary"}
                className="btn"
                onClick={() => toggleComplete(id)}>
                {complete ?
                    <FontAwesomeIcon aria-label="Task completed" icon={faCheckCircle} />
                    : <FontAwesomeIcon aria-label="Work in Progress" icon={faCheckCircle} />}
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