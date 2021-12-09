import React, { useState } from 'react'
import ToDoList from './ToDoList'
const App = () => {
    const [input, setInput] = useState("");
    const [itemslist, setitemslist] = useState([]);//It is an array
    const itemEvent = (event) => {
        setInput(event.target.value);//update the {input} value on changing the input field

    };
    const lisOfItems = () => {
        setitemslist((olditems) => {
            return [...olditems, input];//olditems means the values in the old array , input means the new value which was added
        });
        setInput("");
    };
    const deleteItems = (id) =>{
      setitemslist((olditems)=>{
        return olditems.filter((arrElem,index)=>{
          return (index!==id);
        })
      })
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add Items" onChange={itemEvent} value={input} />
                    <button onClick={lisOfItems}> + </button>
                    <ol>
                        {/* <li>{inputList}</li> */}
                        {itemslist.map((itemval,index) => {
                            return <ToDoList text={itemval} key={index} id={index} onSelect={deleteItems}/>;
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default App;
