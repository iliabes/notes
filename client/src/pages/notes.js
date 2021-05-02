import React, { useState } from 'react';
import InputLine from '../components/topNav/topNav'
import AddNotes from '../components/addNotes/addNotes'
import NavSide from '../components/navSide'
import Notes from '../components/notes/notes'
import {UpdateState} from '../context/state'

export const NotesMain =() =>{
  let [update, setUpdate] = useState(0)
  function changeUpdate(){
    setUpdate(!update)
  }

  return (
    <div className="App">
      <UpdateState >
        <InputLine></InputLine>
        <AddNotes changeUpdate={changeUpdate}/>
        <NavSide></NavSide>
        <Notes update={update} changeUpdate={changeUpdate}></Notes>
      </UpdateState>
    </div>
  )
}

