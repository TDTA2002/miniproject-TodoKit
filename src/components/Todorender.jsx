// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Todorender from './Todorender';

// const TodoList = () => {
//   const [searchFilter, setSearchFilter] = useState('All');
//   const todos = useSelector(state => state.todos);

//   const handleSearchFilterChange = event => {
//     setSearchFilter(event.target.value);
//   };

//   const filteredTodos = todos.filter(todo => {
//     if (searchFilter === 'All') {
//       return true;
//     } else if (searchFilter === 'Incomplete') {
//       return !todo.completed;
//     } else if (searchFilter === 'Complete') {
//       return todo.completed;
//     }
//   });

//   return (
//     <div>
//       <select value={searchFilter} onChange={handleSearchFilterChange}>
//         <option value="All">All</option>
//         <option value="Incomplete">Incomplete</option>
//         <option value="Complete">Complete</option>
//       </select>


//       <Todorender filteredTodos={filteredTodos} todos={filteredTodos}/>
//     </div>
//   );
// };

// export default TodoList;
