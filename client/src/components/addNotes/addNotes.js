import React, { useState,useContext  } from 'react';

import './inputLine.sass'
import ButtonAdd from '../buttonAddNotes/buttonAdd'
import {RefreshState} from '../../context/RefreshContext'

function NotesAdd(props){
  const init = useContext(RefreshState);
  const [click, setClick] = useState(0);
  let data = {
    header:'',
    value:''
  }

  async function  createNote(){
    if(data.header || data.value){
        await fetch('http://localhost:4000', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      })
      .then((data)=>{console.log(data)})
    }
      init.startUpdate()
  }


  if(click){
    return (
      <>
      <div onClick={()=>{setClick(0);createNote()}} className="add-notes-overlay ">
      </div>
      <div className='cont-add-notes overlay'>
        <input onChange={function bla(e){data.header = e.target.value;console.log(data)}} className='note-input note-input-header' type='text' placeholder="Заметка.."></input>
        <input onChange={function bla(e){data.value = e.target.value;console.log(data)}} className='note-input note-input-content' type='text' placeholder="Заметка.."></input>
      </div>

      </>
    )
  }else{
    return (
      <div className='cont-add-notes'>
        <input className='note-input' onClick={()=>{setClick(1)}} type='text' placeholder="Заголовок.."></input>
        <ButtonAdd onClick={()=>{setClick(1)}}></ButtonAdd>
      </div>
    )
  }
}

export default NotesAdd








// async function  netReqvest(){
//   if(data.header || data.value){
//     const result = await axios({
//     method:'POST',
//     url:'http://127.0.0.1:4000/',
//     data:JSON.stringify({"header":data.header,"value":data.value})
//   });
//   }

// }