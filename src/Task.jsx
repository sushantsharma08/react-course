export const Task = (props) => {
    return (
        <div className='task'>
            <h2 >{props.taskName}{props.id}</h2>
            <button onClick={() => props.deleteTask(props.id)}>Delete task</button>
            <button onClick={() => done(task)}>Task Done</button>
        </div>
    )
}