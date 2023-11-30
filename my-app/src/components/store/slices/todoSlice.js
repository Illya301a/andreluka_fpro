import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        { text: 'Wake up!', completed: true },
        { text: 'Breakfast', completed: false },
        { text: 'Brush teeth', completed: false },
    ],
    reducers: {
        toggleTodo: (state, action) => {
            const todoToToggle = state.find(todo => todo.text === action.payload);
            if (todoToToggle) {
                todoToToggle.completed = !todoToToggle.completed;
            }
        },
        addTodo: (state, action) => {
            state.push({ text: action.payload, completed: false });
        },
        deleteTodo: (state, action) => {
            const todoToDelete = state.find(todo => todo.text === action.payload);
            if (todoToDelete) {
                state.splice(state.indexOf(todoToDelete), 1);
            }
        },
    },
});

export const { toggleTodo, addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;