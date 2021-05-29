import { store } from '../../redux/index'
import { connect } from 'react-redux'
import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';
import Note from '../note/note'
import './notes.sass'


async function getNotes() {
    const result = await axios('/bd');
    console.log('result.data', result.data)
    store.dispatch({ type: 'GET_NOTES', payload: result.data });
    console.log('result.data', result.data)
}getNotes()

function Notes(props) {
    console.log(props.updateStateNotes)
    if (props.updateStateNotes) {
        getNotes()
        props.stopUpdate()
    }

    if (props.notes.length != 0) {
        return (
   
            <TransitionGroup className="notes">
                {
                    props.testStore.reduser[0].map((number, index) =>
                        {
                            return(
                                <CSSTransition
                                    key={number._id} 
                                    timeout={800}
                                    classNames='item'
                                >
                                    <Note key={index} item={number}></Note>
                                </CSSTransition>
                            )
                        })
                     }
            </TransitionGroup>
            
        )
    } else {
        return (
            <div>
                <ul>
                    <p>Лоадинг , плис вейт</p>
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        testStore: state,
        notes: state.reduser,
        updateStateNotes: state.updatee
    }),
    dispatch => ({
        getAllnotes: (notes) => {
            dispatch({ type: 'GET_NOTES', payload: notes });
        },
        stopUpdate: () => {
            dispatch({ type: 'STOP_UPDATE' });
        }
    })
)(Notes);

