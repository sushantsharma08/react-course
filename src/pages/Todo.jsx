import React, { useState, useEffect } from 'react'


import { Task } from '../components/Task'

export const Todo = () => {

    // todo part
    const [TodoList, setTodoList] = useState([])
    const [newTask, setnewTask] = useState('')
    const handleChange = (e) => {
        setnewTask(e.target.value);
    }
    const addTask = () => {
        const task = {
            id: TodoList.length === 0 ? 1 : TodoList[TodoList.length - 1].id + 1,
            taskName: newTask,
            completed: false,
        }
        setTodoList([...TodoList, task]);
    }
    const deleteTask = (id) => {
        setTodoList(TodoList.filter((task) => {
            if (task.id == id) {
                console.log(id);
                return false
            } else {
                return true;
            }
        }))
    }
    const done = (id) => {
        setTodoList(TodoList.map((task) => {
            if (task.id === id) {
                return ({ ...task, completed: true });
            } else {
                return task
            }
        }))
    }

    return (
        <div>
      ToDo Functionality

            <div className="newTask">
                <input type="text" onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
            </div>

            <div className="list">
                {TodoList.map((task) => {
                    return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} done={done} complete={task.completed} />
                })}
            </div>
        </div>
    )
}