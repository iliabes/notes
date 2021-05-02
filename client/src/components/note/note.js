import React, { useState,useContext } from 'react';
import redeser from '../../context/redeser'

import './note.sass'
import back from '../../img/icon/hidden.png'
import del from '../../img/icon/020-katana.png'
import {RefreshState} from '../../context/RefreshContext'

function Note(props){
    const init = useContext(RefreshState);
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
        if(flag !== 1){
            setWasHeader(parentUl.children[0].children[0].value)
            setWasValue(parentUl.children[1].children[0].value)
        }
        setFlag(1)

    }
    function changeNow(e){
        let parentUl = e.target.parentElement.parentElement.parentElement
        setNowHeader(parentUl.children[0].children[0].value)
        setNowValue(parentUl.children[1].children[0].value)
        if((wasHeader !== parentUl.children[0].children[0].value) || (wasValue !== parentUl.children[1].children[0].value)){
            Update(id,parentUl.children[0].children[0].value,parentUl.children[1].children[0].value)
            props.funcitonTest()
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
                <button><img  alt="button back" onClick={(e)=>{setClass('note');changeNow(e);}} src={back}></img></button>
                <button className='del'><img alt="button delete" onClick={(e)=>{findId(e);init.startUpdate()}} src={del}></img></button>
                </div>
            </ul>
    )


}
export default  Note




