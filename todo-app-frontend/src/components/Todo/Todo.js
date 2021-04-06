import React from 'react';
import Tasks from './Tasks';
import Menu from './Menu';

const Todo = () => {
  const generateTask = () => {
    alert('button to generate a task');
  };
  return (
    <div>
      <Menu handleClick={generateTask} />
      <Tasks />
    </div>
  );
};

export default Todo;
