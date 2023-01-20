import logo from './logo.svg';
import './App.css';
import Tasks from "./components/Tasks";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Task 1", completed: false, isEditing: false },
        { id: 2, title: "Task 2", completed: true, isEditing: false },
        { id: 3, title: "Task 3", completed: false, isEditing: false },
        { id: 4, title: "Task 4", completed: true, isEditing: false },
        { id: 5, title: "Task 5", completed: false, isEditing: false },
        { id: 6, title: "Task 6", completed: true, isEditing: false },
        { id: 7, title: "Task 7", completed: false, isEditing: false },
        { id: 8, title: "Task 8", completed: true, isEditing: false },
        { id: 9, title: "Task 9", completed: false, isEditing: false },
    ]);

  return (
    <div className="App">
      <Tasks
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;
