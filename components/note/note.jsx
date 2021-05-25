
import { CSSTransitionGroup } from 'react-transition-group'
import React from "react";
import './note.sass'

function Note(props) {
    return (
        <div>
            <div className={'note'}>
                <div className="container-content">
                    <input type='checkbox' />
                    <div className="note-content">
                        <p>{props.header}</p>
                    </div>
                    <button className="btn-del"><img alt="button delete" /></button>
                </div>
            </div>
        </div>
    )

}

export default Note;