


import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Aboutus from './components/pages/Aboutus';
import Aboutteam from './components/pages/Aboutteam';
import Services from './components/pages/Services';
import Contactpage from './components/pages/Contactpage';
import Footer from './components/footer/Footer';
import FQA from './components/pages/FQA';



function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<Aboutus/>}/>
        <Route path='team' element={<Aboutteam/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='contact' element={<Contactpage/>}/>
        <Route path='faq' element={< FQA/>}/>
       </Routes>
       <Footer/>
    </div>

  );
}

export default App;
