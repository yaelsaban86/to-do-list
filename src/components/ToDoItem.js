import React from "react";
import { useState } from "react";



function ToDoItem(props) {
    const { item, deleteOnClick } = props;
    const [checked, setChecked] = useState(false);
    const checkboxClassName = checked ? 'item strike' : 'item';

    return(
     <li> 
        <p>
        <input className="checkbox"  type="checkbox" onClick={() => setChecked(!checked) } checked={checked} />
        <span className={checkboxClassName}> {item} </span>
        <button className="delete" onClick={() => deleteOnClick(item)} >x</button>
        <label className="container">

        </label>
        </p>
        

     </li>
    );

}

export default ToDoItem;


