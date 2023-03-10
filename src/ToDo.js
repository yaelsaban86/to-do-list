
import { useState } from 'react';
import ToDoItem from './components/ToDoItem';
import AddToList from './components/AddToList';

function ToDo() {

  const [list, setList] = useState(JSON.parse(localStorage.getItem('toDoList')) || []);
  const [toDoInputValue, settoDoInputValue ] = useState("");

  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(list))
  }, [list]);

  const deleteOnClick = (toDoDelete) =>{
    const newList = list.filter(item => item !== toDoDelete);
    setList(newList)
  };
               
  return(

    <div>
      <image />
      <h className='toDo'>To Do List</h>
      <br></br>
      <br></br>
         <AddToList toDoInputValue={toDoInputValue} addOnClick={addOnClick} settoDoInputValue={settoDoInputValue} />
        {list.map((item , index) => {
        return(        
          <ul className='a' key={index}>
            <ToDoItem item={item} deleteOnClick={deleteOnClick} />  
          </ul>
          )})
      }
    </div>
  );  
  };

     

        
        
    
      
  

          
  
   
  
 
  
    

export default ToDo;
