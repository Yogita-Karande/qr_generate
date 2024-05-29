import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Decor from './Components/Decor';
import Decor_2 from './Components/Decor_2';
import Home from './Components/Home';
import Kc_Fabrics from './Components/Kc_Fabrics';
import Sarom from './Components/Sarom';
import VJF from './Components/VJF';


function App() {
  return (
    <div className="App">
      <BrowserRouter>      
      {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='kc-fabrics' element={<Kc_Fabrics/>}/>      
          <Route path='sarom' element={<Sarom/>}/>      
          <Route path='decor' element={<Decor/>}/>      
          <Route path='vjf' element={<VJF/>}/>      
          <Route path='decor-2' element={<Decor_2/>}/>      

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
