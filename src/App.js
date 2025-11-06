import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; //importando os componentes e funcionalidades do router 
import { FaPhone } from 'react-icons/fa';


import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Container from './layout/Container';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';




function App() {
  return (
    <Router>
      <Navbar/>

      {/* Conteúdo da Página (Alterna com base na URL) */}
      <div className="p-8 min-h-screen"> 
        <Container customClass="min-height">
          <Routes>
         
            {/* SINTAXE CORRETA do React Router v6: usa 'element' */}
            <Route path='/' element={<Home />} />
            <Route path='/company' element={<Company />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/newproject' element={<NewProject />} />  
        
          </Routes>
        </Container>
      </div>

      
      <Footer></Footer>
    </Router>

  );
}

export default App;
