import logo from './logo.svg';
import './App.css';

import ViewAll from './Components/ViewAll';
import { Route, Routes } from 'react-router';
import AddTodo from './Components/Addtodo';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/viewall' exact element={<ViewAll/>}/>
      <Route path='/addtodo' exact element={<AddTodo/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
