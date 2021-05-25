import React from 'react';
import Note from '../note/note.jsx'
import './app.sass'



let items = [
   { 'header': "item1" },
   { 'header': "item2" },
   { 'header': "item3" },
   { 'header': "item4" },
]


function App() {
   let notes = items.map((item, index) => {
      return <Note key={index} header={item.header}></Note>
      console.log(notes)
   })


   return (
      <div>

      <div className='notes'>
         {notes}
      </div>

      </div>
   )
}

export default App;