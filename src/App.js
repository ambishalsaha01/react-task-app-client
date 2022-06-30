import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Calender from './Pages/Calender/Calender';
import CompletedTasks from './Pages/CompletedTasks/CompletedTasks';
import ToDo from './Pages/ToDo/ToDo';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
        <Route path='/completetask' element={<CompletedTasks></CompletedTasks>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
      </Routes>
    </div>
  );
}

export default App;
