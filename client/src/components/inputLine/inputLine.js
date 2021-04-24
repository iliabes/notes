import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './inputLine.css'
import kanbanIcon from '../../img/icon/017-flags.png'
import notesIcom from '../../img/icon/makibishi.png'
import todoIcon from '../../img/icon/arrow.png'
import mainIcon from '../../img/icon/shuriken.png'

function InputLine(){
  return (
    <div className='cont-input'>
      <img src={mainIcon}></img>
      <input className='main-input' type='text'></input>
      <ul>
        <li><a href="/kanban"><img src={kanbanIcon}></img></a></li>
        <li><a href="/todo"><img src={todoIcon}></img></a></li>
        <li><a href="/"><img src={notesIcom}></img></a></li>
      </ul>
    </div>
  )
}

export default InputLine