
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Note from '../note/note'
import { RefreshState } from '../../context/RefreshContext'
import { connect } from 'react-redux'
import './notes.sass'
import { store } from '../../redux/index'

async function getNotes() {
    const result = await axios('/bd');
    store.dispatch({ type: 'GET_NOTES', payload: result.data });
} getNotes()


function Notes(props) {
    console.log(props.updateStateNotes)
    if (props.updateStateNotes) {
        getNotes()
        props.stopUpdate()
    }
    // const init = useContext(RefreshState);
    // const [notess, setNotes] = useState();
    // function refresh() {
    //     getNotes()

    // }
    // if (init.update) {
    //     console.log('update now')
    //     getNotes()
    //     setTimeout( ()=>{init.stopUpdate()},1000)
    // }


    // useEffect(() => {
    //     getNotes()
    // })

    console.log(props)
    async function getNotes() {
        const result = await axios('/bd');
        props.getAllnotes(result.data)
        console.log('UpdateNotes', props.updateNotes())
    }

    console.log(props.notes.length != 0)

    if (props.notes.length != 0) {
        console.log(props.notes)
        const listItems = props.testStore.reduser[0].map((number) =>
            <Note key={number._id} item={number} ></Note>
        );
        return (
            <div className="notes">
                {listItems}
                <p onClick={() => { props.updateNotes2() }}>Лоадинг , плис вейт</p>
            </div>
        )
    } else {
        return (
            <div>
                <ul>
                    <p onClick={() => { getNotes() }}>Лоадинг , плис вейт</p>
                    <p onClick={() => { console.log(props.testStore) }}>Лоадинг , плис вейт</p>
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
        updateNotes: () => {
            dispatch({ type: 'UPDATE_NOTES' });
        },
        updateNotes2: () => {
            dispatch({ type: 'START_UPDATE' });
        },
        stopUpdate: () => {
            dispatch({ type: 'STOP_UPDATE' });
        }
    })
)(Notes);



    // async function subscribe() {
    //     let response = await fetch('/subscribe', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json;charset=utf-8'
    //         },
    //         body: JSON.stringify({'user':"blakc"})
    //       });

    //     if(response.status === 502){
    //         await subscribe();
    //     }else if(response.status !== 200){
    //         console.log(response.statusText)
    //         await new Promise(response => setTimeout(subscribe(), 1000))
    //     }else{
    //         let result = await response.text();
    //         console.log(result)
    //         await subscribe();
    //     }
    //   }  