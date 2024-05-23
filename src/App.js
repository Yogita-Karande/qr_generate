import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
// import Home from './Components/Home';
import Navbar from './Components/Navbar';
// import QR_Code from './Reusable_Components/QR_Code';
// import Color from './Reusable_Components/Color';
import Main_Component from './Reusable_Components/Main_Component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
        </Routes>
      </BrowserRouter>
      {/* <QR_Code/> */}
      {/* <Color/> */}
      {/* <Logo/> */}
      <Main_Component/>
    </div>
  );
}

export default App;
