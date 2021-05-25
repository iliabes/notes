import React from "react";
import Note from '../note/note.jsx'

let items = [
   { 'header': "item1" },
   { 'header': "item2" },
   { 'header': "item3" },
   { 'header': "item4" },
]


function App() {

   // let items = items.map((item, index) => {
   //    <Note header={item.header}></Note>
   // })
   return (
      <div>
         <b>Hello world!</b>
         <Note header={'1'}></Note>
         <Note header={'2'}></Note>
         <Note header={'3'}></Note>
         <Note header={'4'}></Note>
      </div>
   )
}

export default App;