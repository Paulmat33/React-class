import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Wale from './Pages/Wale/Wale';



function App() {
  return (
    <BrowserRouter>
    <div>
      <Wale/>
    </div>
    <Routes>
      {/* <Route path='/' element={<Layout/>}/> for Navbar and footer */}
      {/* <Route index element  ={<Homepage />}/> */}
      <Route path='wale' element={<Wale/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
