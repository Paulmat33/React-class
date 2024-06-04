import { Routes, Route, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Homepage />}/>
      <Route path='about' element={<About/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
