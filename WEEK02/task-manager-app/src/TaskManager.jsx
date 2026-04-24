import { useState } from 'react'
import './TaskManager.css'

export default function TaskManager() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    if (!input.trim()) return
    setTasks([...tasks, {
      id: Date.now(),
      title: input,
      completed: false
    }])
    setInput('')
  }

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed)

  return (
    <div className="app">
      <div className="left-panel">
        <h2>Add Task</h2>
        <div className="input-group">
          <label>Task Title</label>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTask()}
            placeholder="e.g. Buy groceries"
          />
        </div>
        <button className="add-btn" onClick={addTask}>+ Add Task</button>
      </div>

      <div className="right-panel">
        <h2>Tasks</h2>
        {tasks.length === 0 && (
          <p className="empty-msg">No tasks yet. Add one from the left panel!</p>
        )}
        {sortedTasks.map(task => (
          <div key={task.id} className={`task-card ${task.completed ? 'completed' : ''}`}>
            <div className="task-info">
              <p className="task-title">{task.title}</p>
              <span className={`badge ${task.completed ? 'done' : 'pending'}`}>
                {task.completed ? 'Completed' : 'Pending'}
              </span>
            </div>
            <div className="task-btns">
              <button
                className="task-btn toggle"
                onClick={() => toggleTaskCompletion(task.id)}
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                className="task-btn delete"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}