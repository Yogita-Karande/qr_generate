import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='data' element={<KC_FABRICS/>}/>
          <Route path='data' element={<SAROM/>}/>
          <Route path='data' element={<DECOR/>}/>
          <Route path='data' element={<VJF/>}/>
          <Route path='data' element={<DECOR2/>}/>
          <Route path='qrcodescanner' element={<QRCodeScanner/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
