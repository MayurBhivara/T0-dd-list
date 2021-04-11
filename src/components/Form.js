import React from 'react';

const form = (props) => {
    const inputTextHandler = (e)=>{
        props.setInputText(e.target.value)
    }
    const submitTodoHandler= (e)=>{
        e.preventDefault();
        if(props.inputText.trim() ===''){
            alert("Enter a valid Input");
            return;
        }
        props.setTodos([...props.todos,{
            text: props.inputText.trim(),
            completed:false,
            id: Math.random()*1000
        }]);
        props.setInputText("");
    }
    return (
        <form >
            <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    );
}
export default form;