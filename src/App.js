import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
// import QR_Code from './Reusable_Components/QR_Code';
// import Color from './Reusable_Components/Color';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      {/* <QR_Code/> */}
      {/* <Color/> */}
      {/* <Logo/> */}
      {/* <Main_Component/> */}
    </div>
  );
}

export default App;
