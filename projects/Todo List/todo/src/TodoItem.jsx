import React from "react";

 export default function TodoItem(list)
 {

    return (<div onClick={  ()=>{{list.onChecked(list.id)}}}>
          <li >{list.text}</li>
    </div>)
 }