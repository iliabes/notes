
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from '../note/note'



function Notes(){
    const [notess, setNotes] = useState();
    useEffect(async () => {
    const result = await axios('/bd');
    setNotes(result.data)
    },[])
    console.log(notess)
    if(notess){
    const listItems = notess.map((number) =>
    <Note item={number}></Note>
      );
        return( 
            <div className="notes">
            {listItems}

        </div>
        )
    }else{
        return(
            <div>
            <ul>
                <p>Лоадинг , плис вейт</p>
            </ul>
        </div>
        )
    }





}

export default  Notes



// function Form(){
//     const [notes, setNotes] = useState();
//     useEffect(async () => {
//         const result = await axios('/bd');
//         setNotes(result.data)
//     },[])
//   if(notes){
//     return (
//         <form>
//             <ul>
//                 <h1>Notes</h1>
//                 {notes.map((item,index)=>{return <li key={index}>Todo:{item.value}    Color:{item.color}</li>})}
//             </ul>
//         </form>
//     )
//   }
//   return (
//     <form>
//         <ul>
//             <p>Лоадинг , плис вейт</p>
//         </ul>
//     </form>
// )

// }