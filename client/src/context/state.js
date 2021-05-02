import React , {useReducer} from 'react';
import reducer from './redeser';
import redeser from './redeser'
import {RefreshState} from './RefreshContext'

let init = 0;
export const UpdateState = ({children}) => {
    const [update, dispath] = useReducer(reducer, init)
    function startUpdate(){
        console.log('update state: update'+update)
        dispath({type:'update'})
    }
    function stopUpdate(){
        dispath({type:'stopUpdate'})
    }
    return(
        <RefreshState.Provider value= {{startUpdate,stopUpdate,update}}>
            {children}
        </RefreshState.Provider>
    )
}