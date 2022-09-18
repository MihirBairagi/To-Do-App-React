import React, { useState } from "react";
import "./todo.css"

const Todo = () => {
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState([]);

    //    add item function 
    const addItem = () => {
        if (!inputdata) {
            alert("Please Enter the task")
        } else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            }
            setItems([...items, myNewInputData])
            setInputData("")
        }
    }

    // delete item function
    const deleteItem = (index) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== index;
        })
        setItems(updatedItems);
    }
    return (
        <>
            <div className="head-container">
                <h1>THINGS TO DO: </h1>
            </div>

            {items.length === 0 ? <NOTask /> :

                items.map((curElem, index) => {
                    return (
                        <div className="list-container" key={index}>
                            <div className="list-inner-container">
                                <div className="task-box">
                                    <input type="checkbox" className="checkbox" id={curElem.id} />
                                    <label htmlFor={curElem.id} ><p>{curElem.name} </p> </label>
                                </div>
                                <div className="delete-box">
                                    <button className="btn"
                                        onClick={() => deleteItem(curElem.id)} >x</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="input-container">
                <div className="inner-input-container">
                    <div className="text">
                        <input type="text" placeholder="Enter new task"
                            value={inputdata}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                    </div>
                    <button className="btn-2" onClick={addItem} > ADD TASK </button>
                </div>
            </div>

        </>
    )
}

const NOTask = () => {
  return (
    <div className="no-task" >Looks like you're absolutely free today!</div>
  )
}


export default Todo