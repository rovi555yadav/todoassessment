import React from 'react';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
