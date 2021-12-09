import React from 'react';
const ToDoList = (props) => {
    return (
        <div className='todo_style'>
        <button className="cross" onClick={()=>{
            props.onSelect(props.id);
        }}>x</button>
        <li className='list1'>{props.text}</li>
        </div>
        );
};
export default ToDoList;
