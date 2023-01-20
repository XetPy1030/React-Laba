function Task({id, title, completed, isEditing, onClickCheckbox, onClickDelete, onStartEdit, onSetTitle}) {

    let text = '';
    if (isEditing) {
        text = <input type="text" autoFocus={true} defaultValue={title} onBlur={(e) => onSetTitle(id, e.target.value)} />;
    }
    else {
        text = <label onClick={() => onStartEdit(id)}
                      className={completed ? 'task__completed' : ''}>{title}</label>;
    }

    // li element with a checkbox and a label
    return (
        <div>
            <li
                className="task"
            >
                <div>
                    <input checked={completed} type="checkbox" onChange={() => onClickCheckbox(id)}/>
                    {text}
                </div>
                <button onClick={() => onClickDelete(id)}>Delete</button>
            </li>
            <hr></hr>
        </div>

    )
}

export default Task;