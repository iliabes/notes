import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Form(){
    const [notes, setNotes] = useState();
    useEffect(async () => {
        const result = await axios('/bd');
        setNotes(result.data)
    },[])
  if(notes){
    return (
        <form>
            <ul>
                <h1>Notes</h1>
                {notes.map((item,index)=>{return <li key={index}>Todo:{item.value}    Color:{item.color}</li>})}
            </ul>
        </form>
    )
  }
  return (
    <form>
        <ul>
            <p>Лоадинг , плис вейт</p>
        </ul>
    </form>
)

}

export default  Form