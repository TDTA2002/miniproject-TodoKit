import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './AddTask';
import App from '../App';
import Todorender from './Todorender';

const TodoList = () => {
  const [searchFilter, setSearchFilter] = useState('All');
  const todos = useSelector(state => state.todos);

  const handleSearchFilterChange = event => {
    setSearchFilter(event.target.value);
  };

  const filteredTodos = todos.filter(todo => {
    if (searchFilter === 'All') {
      return true;
    } else if (searchFilter === 'Incomplete') {
      return !todo.completed;
    } else if (searchFilter === 'Complete') {
      return todo.completed;
    }
  });

  return (
    <div>
      <select value={searchFilter} onChange={handleSearchFilterChange}>
        <option value="All">All</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </select>

   
        {/* {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
        <Todorender filteredTodos={filteredTodos}/>
     */}
    </div>
  );
};

export default TodoList;
