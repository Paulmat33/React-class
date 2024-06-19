import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Wale from './Pages/Wale/Wale';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menu from './components/Menu/Menu'
import Header from './components/Header/Header'



function App() {
  return (
    <BrowserRouter>
    <div>
      {/* <Wale/> */}
      <Header/>
      <Navbar/>
      <Hero/>
      <Menu/>
    </div>
    <Routes>
      {/* <Route path='/' element={<Layout/>}/> for Navbar and footer */}
      {/* <Route index element  ={<Homepage />}/> */}
      {/* <Route path='wale' element={<Wale/>}/> */}
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
