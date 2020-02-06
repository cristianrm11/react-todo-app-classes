import React, { Component } from 'react';
import uuid from 'uuid/v4';
import TodoList from '../components/TodoList';
import Header from '../components/Header';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoTask: '',
            items: []
        }
    }

    onChange = (e) => {
        this.setState({
            todoTask: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.todoTask) {
            this.setState({
                todoTask: '',
                items: [...this.state.items, {
                    id: uuid(),
                    todo: this.state.todoTask
                }]
            });
        }
    }

    removeItem = (id) => {
        const filteredItems = this.state.items.filter((todo) => {
            return todo.id !== id;
        });

        this.setState({
            items: [...filteredItems]
        })
    }

    clearTodoList = () => {
        this.setState({
            todoTask: '',
            items: []
        });
    }

    render() {
        return (
            <div>
                <Header />
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline" onSubmit={this.onSubmit}>
                        <input placeholder="Type your todo..." value={this.state.todoTask} onChange={this.onChange} />
                        <button>Add Todo</button>
                    </form>
                    <button onClick={this.clearTodoList}>Clear List</button>
                </nav>
                <TodoList items={this.state.items} removeItem={this.removeItem} />
            </div>
        );
    }
}

export default TodoApp;