import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './note.css'
import back from '../../img/icon/hidden.png'
import del from '../../img/icon/007-ninjato.png'
function Note(props){
    const [clas, setClass] = useState('note');
    const [wasHeader, setWasHeader] = useState();
    const [nowHeader, setNowHeader] = useState();
    const [wasValue, setWasValue] = useState();
    const [nowValue, setNowValue] = useState();
    const [flag, setFlag] = useState(0);
    const [id, setId] = useState(props.item._id);
    let bla = 0;
    function expandNote(bla){
        console.log(clas)
        setClass('note note-expand')
    }
    async function  netReqvest(id){
          let response = await fetch('http://localhost:4000', {
            method: 'delete',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({'id':id})
          });
      }
      async function  Update(id,header,value){
        let response = await fetch('http://localhost:4000', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({'id':id,'header':header,'value':value})
        });
    }
    function writeNow(e){
        console.log(id)
        setClass('note note-expand')
        let parentUl = e.target.parentElement.parentElement
        if(flag != 1){
            setWasHeader(parentUl.children[0].children[0].value)
            setWasValue(parentUl.children[1].children[0].value)
        }
        setFlag(1)

    }
    function changeNow(e){
        let parentUl = e.target.parentElement.parentElement.parentElement
        setNowHeader(parentUl.children[0].children[0].value)
        setNowValue(parentUl.children[1].children[0].value)
        console.log(wasHeader,wasValue)
        console.log(parentUl.children[0].children[0].value,parentUl.children[1].children[0].value)
        if((wasHeader != parentUl.children[0].children[0].value) || (wasValue != parentUl.children[1].children[0].value)){
            Update(id,parentUl.children[0].children[0].value,parentUl.children[1].children[0].value)
        }
        setWasHeader();setWasValue();
        setNowValue();setNowHeader();
        setFlag(0)
    }

    function findId(e){
        netReqvest(id)
    }
    return (
            <ul  id={props.item._id} className={clas}>
                <div onClick={(e)=>{writeNow(e)}} className='top-container'>
                    <textarea defaultValue={props.item.header}></textarea>
                </div>
                <div onClick={(e)=>{writeNow(e)}} className='content-container'>
                    <textarea defaultValue={props.item.value}></textarea>
                </div>
                <div className='bottom-container'>
                <button><img onClick={(e)=>{setClass('note');changeNow(e);}} src={back}></img></button>
                <button className='del'><img onClick={(e)=>{findId(e)}} src={del}></img></button>
                </div>
            </ul>
    )


}
export default  Note




                {/* <h1>Notes</h1>
                <p>Header</p>
                <li>{props.item.header}</li>
                <p>value</p>
                <li>{props.item.value}</li> */}



// function Form(){
//     const [notes, setNotes] = useState();
//     useEffect(async () => {
//         const result = await axios('/bd');
//         setNotes(result.data)
//     },[])
//   if(notes){
//     return (
//         <form>
//             <ul>
//                 <h1>Notes</h1>
//                 {notes.map((item,index)=>{return <li key={index}>Todo:{item.value}    Color:{item.color}</li>})}
//             </ul>
//         </form>
//     )
//   }
//   return (
//     <form>
//         <ul>
//             <p>Лоадинг , плис вейт</p>
//         </ul>
//     </form>
// )

// }