import React from 'react';

import "./todo-list.css"
import refresh from "./refresh.png"

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { text: 'Wake up!', completed: true },
                { text: 'Breakfast', completed: false },
                { text: 'Brush teeth', completed: false },
            ],
            newTodo: '',
        };
    }
    handleTodoToggle = (index) => {
        const updatedTodos = [...this.state.todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        this.setState({ todos: updatedTodos });
    };

    handleAddTodo = () => {
        if(this.state.newTodo) {
            this.setState({
                todos: [...this.state.todos, { text: this.state.newTodo, completed: false }],
                newTodo: '',
            });
        }
    };


    handleDeleteTodo = (e, itemIndex) => {
        e.stopPropagation();
        this.setState({
            todos: this.state.todos.filter((item, index) => index !== itemIndex)
        });
    };

    handleRefreshPage = () => {
        this.setState({ rotating: true });
        setTimeout(() => {
            this.setState({ rotating: false });
            window.location.reload();
        }, 500);
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.handleAddTodo();
        }
    }

    render() {
        return (
            <div className="todo-list-container">
                <img
                    src={refresh}
                    className={`refresh ${this.state.rotating ? 'rotate' : ''}`}
                    alt="refresh"
                    onClick={() => this.handleRefreshPage()}
                />
                <h1>Todo List</h1>
                <ul className="todo-list">
                    {this.state.todos.map((todo, index) => (
                        <li
                            key={index}
                            className={`todo-item ${todo.completed ? 'completed' : ''}`}
                            onClick={() => this.handleTodoToggle(index)}
                        >
                            {todo.text}
                            <span className="delete-button" onClick={(e) => this.handleDeleteTodo(e, index)}> X </span>
                        </li>
                    ))}
                </ul>
                <div className="add-todo-container">
                    <input
                        type="text"
                        value={this.state.newTodo}
                        onChange={(e) => this.setState({ newTodo: e.target.value })}
                        onKeyPress={this.handleKeyPress}
                        placeholder="Add a new todo"
                        className="todo-input"
                    />
                    <button onClick={() => this.handleAddTodo()} className="add-button">
                        Add Todo
                    </button>
                </div>
            </div>
        );
    }
}