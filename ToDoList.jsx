import React from 'react';
const ToDoList = (props) => {
    const deleteitem = () => {
        console.log("deleted");
    };
    return (
        <>
            <div className="todo_style">
                <p className="p1" onClick={() => {
                    props.onSelect(props.id);
                }}>✖️</p>
                <li className="list">{props.text}</li>
            </div>
        </>
    );
};
export default ToDoList;