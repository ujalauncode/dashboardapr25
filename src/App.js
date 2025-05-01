import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Mainhome from './components/Mainhome';


function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>}  />
    <Route path='/home' element={<Mainhome  name="ujala" />}  />
  </Routes>
</BrowserRouter>
  );
}

export default App;
