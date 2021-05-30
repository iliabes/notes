import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import './inputLine.sass'





function NotesAdd(props) {
  const [click, setClick] = useState(0);
  let dataNote = ''
  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.code === 'Enter' && click === 1 && dataNote !== '') {
        createNote()
      }
    });
  })

  async function createNote() {
    if (dataNote) {
      await fetch('http://localhost:4000', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ 'header': dataNote })
      })
        .then((dataNote) => {
          props.startUpdate()
          setClick(0)
        })
    }
  }

  function getDateNote(e) {
    dataNote = e.target.value;
  }

  if (click) {
    return (
      <>
        <div onClick={() => { setClick(0); createNote() }} className="add-notes-overlay ">
        </div>
        <div className='cont-add-notes overlay'>
          <input onChange={(e) => { getDateNote(e) }} className='note-input note-input-header' type='text' placeholder="Заметка.."></input>
          <button className="add-button" onClick={(e) => { createNote() }}>✔️</button>
          <button className="add-button" onClick={(e) => { setClick(0) }}>❌</button>
        </div>
      </>
    )
  } else {
    return (
      <div className='cont-add-notes'>
        <input className='note-input' onClick={() => { setClick(1) }} type='text' placeholder="Заголовок.."></input>
      </div>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    startUpdate: () => {
      dispatch({ type: 'START_UPDATE' });
    }
  })
)(NotesAdd)








// async function  netReqvest(){
//   if(data.header || data.value){
//     const result = await axios({
//     method:'POST',
//     url:'http://127.0.0.1:4000/',
//     data:JSON.stringify({"header":data.header,"value":data.value})
//   });
//   }
// }