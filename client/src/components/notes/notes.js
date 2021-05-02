
import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import Note from '../note/note'
import {RefreshState} from '../../context/RefreshContext'
import './notes.sass'

function Notes(props){
    const init = useContext(RefreshState);
    const [notess, setNotes] = useState();
    function refresh(){
        getNotes()
        
    }
    if(init.update){
        console.log('update now')
        getNotes()
        // setTimeout( ()=>{init.stopUpdate()},1000)
    }
    useEffect( () => {
        getNotes()
        return ()=>{
            console.log('update stop')
            init.stopUpdate()
        }
    },[init])

    async function getNotes(){
        const result = await axios('/bd');
        setNotes(result.data)
    }

    if(notess){
    const listItems = notess.map((number) =>
    <Note key={number._id}  item={number} funcitonTest={refresh}></Note>
      );
        return( 

            <div className="notes">
            {listItems}
        </div>

        )
    }else{
        return(
            <div>
            <ul>
                <p>Лоадинг , плис вейт</p>
            </ul>
        </div>
        )
    }





}

export default  Notes



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