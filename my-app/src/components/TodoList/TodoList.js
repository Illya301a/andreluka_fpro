import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, addTodo, deleteTodo } from '../store/slices/todoSlice';
import "./todo-list.css"
import refresh from "./refresh.png"

export default function TodoList() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = React.useState('');
    const [rotating, setRotating] = React.useState(false);

    const handleTodoToggle = (index) => {
        dispatch(toggleTodo(index));
    };

    const handleAddTodo = () => {
        if (newTodo) {
            dispatch(addTodo(newTodo));
            setNewTodo('');
        }
    };

    const handleDeleteTodo = (index) => {
        dispatch(deleteTodo(index));
    };

    const handleRefreshPage = () => {
        setRotating(true);
        setTimeout(() => {
            setRotating(false);
            window.location.reload();
        }, 500);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleAddTodo();
        }
    }

    return (
        <div className="todo-list-container">
            <img
                src={refresh}
                className={`refresh ${rotating ? 'rotate' : ''}`}
                alt="refresh"
                onClick={handleRefreshPage}
            />
            <h1>Todo List</h1>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className={`todo-item ${todo.completed ? 'completed' : ''}`}
                        onClick={() => handleTodoToggle(todo.text)}
                    >
                        {todo.text}
                        <span className="delete-button" onClick={() => handleDeleteTodo(todo.text)}> X </span>
                    </li>
                ))}
            </ul>
            <div className="add-todo-container">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Add a new todo"
                    className="todo-input"
                />
                <button onClick={handleAddTodo} className="add-button">
                    Add Todo
                </button>
            </div>
        </div>
    );
}