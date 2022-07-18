import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)

    }

    const submitToDoHandler = (e) => {
        e.preventDefault(); //to prevent page refresh w/c is default behavior of submit button
        setTodos([...todos, {
            text: inputText,
            completed: false,
            id: Math.random() * 1000
        }]);
        setInputText('');
    };

    // Handle Status
    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

    return (<form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitToDoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div onChange={handleStatus} className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>)
}

export default Form;