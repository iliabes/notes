import { store } from '../../redux/index'
import { connect } from 'react-redux'
import React, { useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';
import Note from '../note/note'
import './notes.sass'




function Notes(props) {
    useEffect(() => {
        getNotes()
    }, [])

    async function getNotes() {
        const result = await axios('/bd');
        store.dispatch({ type: 'GET_NOTES', payload: result.data });
    }


    if (props.updateStateNotes) {
        console.log('blablabla')
        getNotes()
        props.stopUpdate()
    }


    if (props.notes.length !== 0) {
        let items = props.notes[0].map((number, index) => {
            return (
                <CSSTransition
                    key={number._id}
                    timeout={600}
                    classNames='item'
                >
                    <Note key={index} item={number}></Note>
                </CSSTransition>
            )
        })
        return (
            <TransitionGroup className="notes">
                {
                    items
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

