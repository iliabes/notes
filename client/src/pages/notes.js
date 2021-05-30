import React from 'react';
import InputLine from '../components/topNav/topNav'
import AddNotes from '../components/addNotes/addNotes'
import NavSide from '../components/navSide'
import Notes from '../components/notes/notes'


export const NotesMain = () => {


  return (
    <div className="App">
      <InputLine></InputLine>
      <AddNotes />
      <NavSide></NavSide>
      <Notes ></Notes>
    </div>
  )
}

