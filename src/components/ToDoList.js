import React from 'react';
import Todo from './Todo';
const toDoList = (props) => {
    return (
        <div className="todo-container" >
            <ul className="todo-list">
                {props.todos.map(todo => {
                    return(<Todo text={todo.text} todo={todo} key={todo.id} setTodos={props.setTodos} todos={props.todos}/>);
                })}
            </ul>
        </div >
    );
}
export default toDoList;