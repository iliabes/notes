import React, { useState, useContext } from 'react';
import redeser from '../../context/redeser'
import axios from 'axios';
import './note.sass'
import back from '../../img/icon/hidden.png'
import del from '../../img/icon/020-katana.png'
import { RefreshState } from '../../context/RefreshContext'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, Button, Alert } from 'react-bootstrap';

function Note(props) {
    const init = useContext(RefreshState);
    const [showMessage, setShowMessage] = useState(false);
    const [clas, setClass] = useState('note');
    const [wasHeader, setWasHeader] = useState();
    const [nowHeader, setNowHeader] = useState();
    const [wasValue, setWasValue] = useState();
    const [nowValue, setNowValue] = useState();
    const [flag, setFlag] = useState(0);
    const [id, setId] = useState(props.item._id);
    let bla = 0;

    async function getNotes() {
        const result = await axios('/bd');
        props.getAllnotes(result.data)
    }




    function expandNote(bla) {
        console.log(clas)
        setClass('note note-expand')
    }

    async function netReqvest(id) {
        let response = await fetch('http://localhost:4000', {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ 'id': id })
        });
        let commits = await response.json()
        if (commits.ok === 'ok') {
            props.startUpdate()
        }
    }

    async function Update(id, header, value) {
        let response = await fetch('http://localhost:4000', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ 'id': id, 'header': header, 'value': value })
        });
    }

    function writeNow(e) {
        console.log(id)
        setClass('note note-expand')
        let parentUl = e.target.parentElement.parentElement
        if (flag !== 1) {
            setWasHeader(parentUl.children[0].children[0].value)
            setWasValue(parentUl.children[1].children[0].value)
        }
        setFlag(1)

    }

    function changeNow(e) {
        let parentUl = e.target.parentElement.parentElement.parentElement
        setNowHeader(parentUl.children[0].children[0].value)
        setNowValue(parentUl.children[1].children[0].value)
        if ((wasHeader !== parentUl.children[0].children[0].value) || (wasValue !== parentUl.children[1].children[0].value)) {
            Update(id, parentUl.children[0].children[0].value, parentUl.children[1].children[0].value)
            // props.funcitonTest()
        }
        setWasHeader(); setWasValue();
        setNowValue(); setNowHeader();
        setFlag(0)
    }

    function findId(e) {
        netReqvest(id)
    }

    // function anim(elem) {
    // let goal = document.getElementById(elem)
    // console.log(elem,goal)
    // goal.style.transform = "translateX(1300px)"
    // let promise = new Promise((res,rej)=>{
    //     setTimeout(()=>{
    //         console.log('animate');
    //         res('win')
    //     },2000)

    // })
    // promise
    //     .then(()=>{
    //         netReqvest(elem)
    //         goal.style.transform = "translateX(0px)"

    //     })
    // }




    return (
        <Container style={{ paddingTop: '2rem' }}>
            <CSSTransition
                in={showMessage}
                classNames='bla'
                timeout={2300}
                onEnter={() => { setShowMessage(false) }}
            >
                <div id={props.item._id} onClick={() => { }} className={'note'}>
                    {console.log(props.key)}
                    <div className="container-content">
                        <input type='checkbox' />
                        <div className="note-content">
                            <p>{props.item.header}</p>
                        </div>
                        <button onClick={() => { setShowMessage(true); }} className="btn-del"><img alt="button delete" src={del} /></button>
                    </div>
                </div>
            </CSSTransition >
        </Container>

    )


}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        startUpdate: () => {
            dispatch({ type: 'START_UPDATE' });
        },
    })
)(Note);





// <ul id={props.item._id} className={clas}>
// <div onClick={(e) => { writeNow(e) }} className='top-container'>
//     <textarea defaultValue={props.item.header}></textarea>
// </div>
// <div onClick={(e) => { writeNow(e) }} className='content-container'>
//     <textarea defaultValue={props.item.value}></textarea>
// </div>
// <div className='bottom-container'>
//     <button><img alt="button back" onClick={(e) => { setClass('note'); changeNow(e); }} src={back}></img></button>
//     <button className='del'><img alt="button delete" onClick={(e) => { findId(e); init.startUpdate() }} src={del}></img></button>
// </div>
// </ul>


    // function anim(elem) {
    //     let goal = document.getElementById(elem)
    //     console.log(elem,goal)
    //     anime({
    //         targets: goal,
    //         translateX: 1550,
    //         position:'absolute',
    //         update: function() {
    //             console.log('update')
    //           },
    //           begin: function() {
    //             goal.style.position = 'absolute';
    //           },
    //           complete: function() {
    //             netReqvest(elem)
    //           }

    //     });
    // }