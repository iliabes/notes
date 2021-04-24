
import './App.css';
import Notes from './components/notes/notes'
import InputLine from './components/inputLine/inputLine'
import NavSide from './components/navSide'
import AddNotes from './components/addNotes/inputLine'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Kanban} from './pages/kanban'
import {Todo} from './pages/todo'
import {NotesMain} from './pages/notes'

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path={'/kanban'} exact component={Kanban}/>
      <Route path={'/todo'} component={Todo}/>
      <Route path={'/'} component={NotesMain}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;




// function App() {
//   return (
//     <div className="App">
//         <InputLine></InputLine>
//         <AddNotes/>
//         <NavSide></NavSide>
//         <Notes></Notes>

//     </div>
//   );
// }