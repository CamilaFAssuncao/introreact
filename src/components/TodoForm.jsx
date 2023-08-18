import {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value, category);
        setValue("");
        setCategory("");
        
    };
  return (
    <div className="TodoForm">
        <h2>Create a task:</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Write your task'
            value = {value}
            onChange={(e)=> setValue(e.target.value)}
            />
            <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option value="">Select a category</option>
                <option value="Personal">Personal</option>
                <option value="Work">Work</option>
                <option value="Wellbeing">Wellbeing</option>
            </select>
            <button type="submit">Create your task</button>
        </form>
    </div>
  )
}

export default TodoForm
