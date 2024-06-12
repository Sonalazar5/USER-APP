
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import SignUp from './components/SignUp';
import Viewall from './components/ViewAll';




function App() {
  
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddUser/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/ViewAll' element={<Viewall/>}/>
    </Routes></BrowserRouter>
  );
}

export default App;
