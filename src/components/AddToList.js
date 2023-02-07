import React from "react";

function AddToList(props){

    const {addOnClick, settoDoInputValue, toDoInputValue} = props;
    return(
        <div>
            <input type="text" className="input" onChange={e => {settoDoInputValue(e.target.value)}} value={toDoInputValue} placeholder="What are your tasks for today?"/>
            <button className="add" onClick={addOnClick} >Add</button>
        </div>
    )
};

export default AddToList;

















