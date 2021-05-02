import React from 'react';
import './inputLine.sass'
import kanbanIcon from '../../img/icon/017-flags.png'
import notesIcom from '../../img/icon/makibishi.png'
import todoIcon from '../../img/icon/arrow.png'
import mainIcon from '../../img/icon/shuriken.png'

function InputLine(){
  return (
    <div className='top-nav'>
      <img alt="section main" src={mainIcon}></img>
      <input className='main-input' type='text'></input>
      <ul>
        <li><a href="/kanban"><img alt="section kanban" src={kanbanIcon}></img></a></li>
        <li><a href="/todo"><img alt="section todo" src={todoIcon}></img></a></li>
        <li><a href="/"><img alt="section notes" src={notesIcom}></img></a></li>
      </ul>
    </div>
  )
}

export default InputLine