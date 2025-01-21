import React from 'react';

// Define the type for a task
interface Task {
  id: number;
  title: string;
  priority: 'Low' | 'Medium' | 'High';
  completed: boolean;
}

// Define the props for TaskList
interface TaskListProps {
  tasks: Task[];
  updateTaskStatus: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, updateTaskStatus, deleteTask }) => {
  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks available. Add a new task!</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between items-center p-4 bg-gray-100 mb-2 rounded"
        >
          <div>
            <h3 className="font-bold">{task.title}</h3>
            <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
            <p>Priority: {task.priority}</p>
          </div>
          <div>
            {!task.completed && (
              <button
                className="bg-blue-500 text-white px-3 py-1 mr-2 rounded"
                onClick={() => updateTaskStatus(task.id)}
              >
                Mark as Completed
              </button>
            )}
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
