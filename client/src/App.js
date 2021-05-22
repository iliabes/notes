
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Kanban } from './pages/kanban'
import { Todo } from './pages/todo'
import { NotesMain } from './pages/notes'



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/kanban'} exact component={Kanban} />
        <Route path={'/todo'} component={Todo} />
        <Route path={'/'} component={NotesMain} />
      </Switch>
    </BrowserRouter>
  );
}

export default App




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