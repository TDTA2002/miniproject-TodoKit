import { createSlice, current } from '@reduxjs/toolkit';


const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);

        },
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, title } = action.payload;
            const todo = state.find((todo) => todo.id === id);
            if (todo) {
                todo.title = title;
            }
        },
        setFilter: (state, action) => {
            return action.payload === 'All' ? current(state) : state.filter(todo => todo.status === action.payload);
        },
    },
});

export const { addTodo, removeTodo, updateTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
