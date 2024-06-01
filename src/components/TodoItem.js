// TodoItem.js
import React from 'react';

const TodoItem = ({ task, toggleComplete }) => {
  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <p className={`${task.completed ? 'completed' : 'incompleted'}`} onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
    </div>
  );
};

export default TodoItem;
