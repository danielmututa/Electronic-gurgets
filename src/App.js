


import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Aboutus from './components/pages/Aboutus';
import Aboutteam from './components/pages/Aboutteam';
import Services from './components/pages/Services';



function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<Aboutus/>}/>
        <Route path='team' element={<Aboutteam/>}/>
        <Route path='services' element={<Services/>}/>
       </Routes>
    </div>

  );
}

export default App;
