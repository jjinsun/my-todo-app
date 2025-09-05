import { useState } from "react";
import "./App.css";

export default function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "공부하기",
            completed: false, 
        },
        {
            id: 2,
            text: "운동하기",
            completed: false, 
        },
        {
            id: 3,
            text: "산책하기",
            completed: false, 
        },  
    ]);
    const [addInput, setAddInput] = useState("");

    const handleInputChange = (e) => {
        setAddInput(e.target.value);
        console.log("value", addInput);
    };

   const handleAddTodo = () => {
    const todo = {
        id: todos.length > 0 ? todos.at(-1).id + 1 : 1,
        text: addInput,
        completed: false,
    };
    setTodos([...todos, todo]);
    setAddInput("");
   };

   const handDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
   };

   const handleComplete = (id) => {
    setTodos(
        todos.map((todo) => 
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        )
    );
   };

    return (
        <div className="App">
            <h1>진선의 Todo List!!</h1>
            <div>
                <input 
                onChange={handleInputChange}
                value={addInput}
                className="add-input" 
                type="text" 
                />
                <button onClick={handleAddTodo}className="add-btn">
                    추가하기
                </button>


                <div className="todo-container">
                    {todos.map((todo) => (
                        <div key={todo.id} className="todo-item">
                            <div
                                style={{ textDecoration: todo.completed ? "line-through" : "none",
                                    cursor: "pointer",
                                 }}
                                 onClick={() => handleComplete(todo.id)}
                            >{todo.text}</div>
                            <button onClick={() => handDeleteTodo(todo.id)}>삭제</button>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}