import React, { useState } from 'react';

// Define the type for the task
interface Task {
  id: number;
  title: string;
  priority: 'Low' | 'Medium' | 'High';
  completed: boolean;
}

// Define the props for TaskForm
interface TaskFormProps {
  addTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) {
      alert('Task title is required!');
      return;
    }

    // Create a new task object
    const newTask: Task = {
      id: Date.now(), // Generate a unique ID using timestamp
      title,
      priority,
      completed: false,
    };

    // Pass the task to the parent
    addTask(newTask);

    // Reset the form fields
    setTitle('');
    setPriority('Medium');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="border p-2 w-full mb-2"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as 'Low' | 'Medium' | 'High')}
        className="border p-2 w-full mb-2"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
