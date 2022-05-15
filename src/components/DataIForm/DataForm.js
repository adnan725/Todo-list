import React, {useEffect, useState} from "react";
import './DataForm.css';
import Button from "../Button/Button";

function getLocalItems() {
    const list = localStorage.getItem('lists')
    if (list) {
        return JSON.parse(localStorage.getItem('lists'))
    } else {
        return []
    }
}
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const date = new Date()

function DataIForm() {

    //store input value into 'enteredValue'
    const [enteredValue, setEnteredValue] = useState('');

    //store enteredValues into array of Todos
    const [listItems, setListItems] = useState(getLocalItems())

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

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(listItems))
    }, [listItems])

    return (
        <div className="formContainer">
            <form className={`form ${!isValid ? 'invalid' : ''}`} onSubmit={formSubmitHandler}>
                <label>Add to list</label>
                <input
                    onChange={inputChangeHandler}
                    type="text"
                    value={enteredValue}
                />
                <Button className="formBtn">Click</Button>
            </form>

            <div className="itemsContainer">
                {listItems.map((item, id) => {
                    return <div className="item" key={id}>
                        <div className="getDate">
                            <p>{date.getDate()}</p>
                            <p className="month">{monthNames[date.getMonth()]}</p>
                            <p>{date.getFullYear()}</p>
                        </div>
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