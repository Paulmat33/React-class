import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Fixedheader from './components/Fixedheader/Fixedheader';
import form from'./components/form/form';
import footer from './components/footer/footer'; 

function App() {
  return (
    <div>
    <Fixedheader />
    <Navbar/>
    <form/>
    <footer/>
    </div>
  );
}

export default App;
