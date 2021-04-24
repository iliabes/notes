import React from 'react';
import InputLine from '../components/inputLine/inputLine'
import AddNotes from '../components/addNotes/inputLine'
import NavSide from '../components/navSide'
import Notes from '../components/notes/notes'

export const NotesMain =() =>{

  return (
    <div className="App">
        <InputLine></InputLine>
        <AddNotes/>
        <NavSide></NavSide>
        <Notes></Notes>
    </div>
  )
}

