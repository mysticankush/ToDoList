import React, { useState } from 'react'
import ToDoList from './ToDoList'
const App = () => {
    const [input, setInput] = useState("");
    const [itemslist, setitemslist] = useState([]);
    const itemEvent = (event) => {
        setInput(event.target.value);
    };
    const lisOfItems = () => {
        setitemslist((olditems) => {
            return [...olditems, input];
        });
        setInput("");
    };
    const deleteItems = (id) => {
        // console.log("deleted");
        setitemslist((olditems) => {
            return olditems.filter((arrElem, index) => {
                return index !== id;//id came from itemslist and index came from olditems . So, basically they both are same.
            })
        })
    }
    return (
        <React.Fragment>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add Items" onChange={itemEvent} value={input} />
                    <button onClick={lisOfItems}> ➕ </button>
                    <ol>
                        {/* <li>{inputList}</li> */}
                        {itemslist.map((itemval, index) => {
                            return <ToDoList
                                text={itemval}
                                key={index}
                                id={index}
                                onSelect={deleteItems}
                            />;
                        })}
                    </ol>
                </div>
            </div>
        </React.Fragment>
    )
}
export default App;