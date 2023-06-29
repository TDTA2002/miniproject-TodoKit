import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './TodoSlices';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
