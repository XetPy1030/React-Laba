import Task from "./Task";
import {useState} from "react";

function Tasks({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");

  function checkboxClick(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function editTask(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: prompt("Edit Task") };
      }
      return task;
    });
    setTasks(newTasks);
  }

    function maxId() {
        let max = 0;
        tasks.forEach((task) => {
            if (task.id > max) {
                max = task.id;
            }
        });
        return max;
    }

  function addTask() {
    const newTasks = [...tasks, { id: maxId() + 1, title: newTask, completed: false }];
    setTasks(newTasks);
    setNewTask("");
  }

    function startEdit(id) {
        const newTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, isEditing: true };
            }
            return task;
        });
        setTasks(newTasks);
    }

    function setTitle(id, title) {
        const newTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, title: title, isEditing: false };
            }
            return task;
        });
        setTasks(newTasks);
    }


  return (
      <div className={'tasks'}>
        <h2>todos</h2>
        <div className={'tasks__input'}>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className={'tasks__input__text'}
                placeholder={'Add Todo...'}
            />
            <button onClick={addTask} className={"tasks__button"}>Submit</button>
        </div>
        <ul>
          {tasks.map(task => (
              <Task
                  key={task.id}
                  {...task}
                  onClickCheckbox={checkboxClick}
                  onClickDelete={deleteTask}
                  onStartEdit={startEdit}
                  onEndEdit={editTask}
                  onSetTitle={setTitle}
              />
          ))}
        </ul>
      </div>
  )
}

export default Tasks;