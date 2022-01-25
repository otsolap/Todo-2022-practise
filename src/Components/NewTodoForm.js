import React, { Component } from 'react';

export class NewTodoForm extends Component {
    render() {
        return (
            <form
                className="wrapper"
                style={{ 'grid-template-columns': '7fr 2fr' }}
                onSubmit={this.props.onSubmit}>
                <input
                    placeholder="Add new todo"
                    value={this.props.newTodoName}
                    onChange={this.props.onInputChange}
                />
                <button
                    className="btn btn-success"
                    type="submit"
                    value="Submit">
                    Submit
                </button>
            </form>
        );
    }
}