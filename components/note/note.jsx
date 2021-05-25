import React, { useState } from 'react';
import './note.sass'
import { CSSTransition } from 'react-transition-group';



function Note(props) {
    const [showMessage, setShowMessage] = useState(false);
    console.log(showMessage)
    return (
        <div>
            <CSSTransition
            in={showMessage}
            classNames='bla'
            timeout={300}
            onEnter={() => {
            console.log('onEnter',showMessage)
            // setShowMessage(false)
                        }}
       >
            <div onClick={()=>{
                    setShowMessage(true)
                    console.log('onClick',showMessage)
                     }} className={'note'}>
                <div className="container-content">
                    <input type='checkbox' />
                    <div className="note-content">
                        <p>{props.header}</p>
                    </div>
                    <button className="btn-del">x</button>
                </div>
            </div>
            </CSSTransition>
        </div>
    )
}

export default Note;