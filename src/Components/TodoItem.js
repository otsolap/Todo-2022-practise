import React from 'react';
import Button from 'react-bootstrap/Button'

export function TodoItem(props) {
    let color;
    let text;

    if (props.todo.complete === true) {
        color = 'lightgreen';
        text = 'Complete';
    } else {
        color = 'pink';
        text = 'Incomplete';
    }

    return (
        <div className="wrapper"
            style={{ backgroundColor: color }}>
            <h3>{props.todo.name}</h3>
            <Button
                variant={props.todo.complete ? "success" : "secondary"}
                className="btn"
                onClick={() => props.onClick(props.todo.id)}>
                {text}
            </Button>
            <Button
                variant="danger"
                className="btn"
                onClick={() =>
                    props.onRemoveClick(props.todo.id)
                }>
                Remove from list
            </Button>
        </div>
    );
}