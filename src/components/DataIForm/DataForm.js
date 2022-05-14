import React, { useState } from "react";
import './DataForm.css';
import Button from "../Button/Button";

function DataIForm(props) {

    //store input value into 'enteredValue'
    const [enteredValue, setEnteredValue] = useState('');

    //store enteredValues into array of Todos
    const [listItems, setListItems] = useState([])

    // to keep track if input field is empty
    const [isValid, setIsValid] = useState(false)

    const inputChangeHandler = event => {
        setEnteredValue(event.target.value);

        if (event.target.value.trim().length > 0) {
            setIsValid(true)
        }
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false) // if this 'if' condition is true, isValid will be 'false'
        }
        // if input field is empty, return without doing anything
        if(!enteredValue) {
            return
            //alert('Please write something')
        } else {
            setListItems([...listItems, enteredValue])
            setEnteredValue('')
        }

    };

    function deleteItemHandler(id) {
        const updateList = listItems.filter((item, ind) => {
            return ind !== id
        })
        setListItems(updateList)
    }

    function clearAllHandler() {
        setListItems([])
    }

    return (
        <div className="formContainer">
            <form className='form' onSubmit={formSubmitHandler}>
                <label style={{color: !isValid ? 'red' : '#332400'}}>
                    Add to list
                </label>
                <input
                    style={{borderColor: !isValid ? '#da5123' : '#f3e0c2'}}
                    onChange={inputChangeHandler}
                    type="text"
                    value={enteredValue}
                />
                <Button className="formBtn">Click</Button>
            </form>

            <div className="itemsContainer">
                {listItems.map((item, id) => {
                    return <div className="item" key={id}>
                        <p>{item}</p>
                        <p className="deleteButton" onClick={() => deleteItemHandler(id)}>🗑️</p>
                    </div>
                })}
            </div>
            <Button className="clearAll" onClick={clearAllHandler}>Clear All</Button>
        </div>
    )
}

export default DataIForm