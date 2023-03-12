export const Task = (props) => {
    return (
        <div className='task'>
            <h2 style={{ color: props.complete ? 'green' : "black" }} >{props.taskName}</h2>
            <button onClick={() => props.deleteTask(props.id)}>Delete task</button>
            <button onClick={() => props.done(props.id)}>Task Done</button>
        </div>
    )
}