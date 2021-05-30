import { connect } from 'react-redux'
import del from '../../img/icon/020-katana.png'
import './note.sass'




function Note(props) {
    async function deleteNote(id) {
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


    return (
        <div id={props.item._id} className={'note'}>
            <div className="container-content">
                <input type='checkbox' />
                <div className="note-content">
                    <p>{props.item.header}</p>
                </div>
                <button onClick={() => { deleteNote(props.item._id) }} className="btn-del"><img alt="button delete" src={del} /></button>
            </div>
        </div>
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
)(Note)

    //-------------update
    // async function Update(id, header, value) {
    //     let response = await fetch('http://localhost:4000', {
    //         method: 'put',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8'
    //         },
    //         body: JSON.stringify({ 'id': id, 'header': header, 'value': value })
    //     })
    // }