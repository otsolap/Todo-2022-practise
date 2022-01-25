import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NewTodoForm } from './NewTodoForm';
import { TodoItem } from './TodoItem';



export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodoName: '',
            todos: this.props.todos
        };
    }

    generateNewId() {
        return this.state.todos.length + 1;
    }

    onSubmit(event) {
        event.preventDefault();

        var newTodos = this.state.todos.slice();
        newTodos.push({
            id: this.generateNewId(),
            name: this.state.newTodoName,
            complete: false
        });

        this.setState({ todos: newTodos, newTodoName: '' });
    }

    onClick(id) {
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

    onChange(event) {
        this.setState({ newTodoName: event.target.value });
    }
    onRemoveClick(id) {
        //implement this logic
        console.log('Remove Item!');
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        {this.todoItems()}
                    </Col>
                    <NewTodoForm
                        onSubmit={this.onSubmit.bind(this)}
                        newTodoName={this.state.newTodoName}
                        onInputChange={this.onChange.bind(this)}
                    />
                </Row>
            </Container>
        );
    }

    todoItems = () => {
        var retVal = [];

        for (let i = 0; i < this.state.todos.length; i++) {
            var todo = this.state.todos[i];
            retVal.push(
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onClick={this.onClick.bind(this)}
                    onRemoveClick={this.onRemoveClick.bind(this)}
                />
            );
        }
        return retVal;
    };
}

