
import TodoItem from "./TodoItem";
import React,{ useState } from "react";
export default function Todo()
{
    const [inputText,setInputText]=useState("");
    const [newList,setNewList]=useState([]);
    function handleChange(event)
    {
        const newInput=event.target.value;
        setInputText(newInput);
    }
    function handleClick()
    {
        setNewList(prev=>{
         return [...prev,inputText];
    })
        setInputText("") 
    }
    function deleteItem(id)
     {
        setNewList(newList.filter(
            (newList,index)=>
                {
                    return index!==id
                }));
    }  
   return( <div className="todoBox">
   <div className="heading"><h1>Todo - List</h1></div>
   <div className="inputBox">
     <input className="text" type="text" placeholder="Add What you need to do..."  onChange={handleChange} />
     <button className="addButton" type="submit" onClick={handleClick}>+</button>
   </div>
   <div className="List" >
     <ul >
       {newList.map((todoitems,index)=>(<TodoItem id={index} key={index}  text={todoitems} onChecked={deleteItem}/>))}
     </ul>
   </div>
 </div>)
}