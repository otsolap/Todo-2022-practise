import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { faCheckCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TodoItem({ task, id, complete, removeTodo, toggleComplete }) {
    return (
        <Col
            xl={12}
            className={`todo-item d-flex justify-content-center pt-1 align-items-baseline ${complete ? 'bg-success' : 'bg-secondary'}`}
        >
            <p className="text-light task-name">{task}</p>
            <Button
                variant={complete ? "success" : "secondary"}
                onClick={() => toggleComplete(id)}>
                {complete ?
                    <FontAwesomeIcon aria-label="Task completed" icon={faCheckCircle} />
                    : <FontAwesomeIcon aria-label="Work in Progress" icon={faCheckCircle} />}
            </Button>
            <Button
                variant="danger"
                onClick={() =>
                    removeTodo(id)
                }>
                <FontAwesomeIcon
                    aria-label="Delete Task"
                    icon={faTrashAlt} />
            </Button>
        </Col >
    );
}