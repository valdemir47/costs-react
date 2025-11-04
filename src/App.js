import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// MUDANÇA: Usando FaPhone do Font Awesome (fa) para garantir que a importação funcione
import { FaPhone } from 'react-icons/fa';

// Componentes de Página (Removi o .js da extensão para voltar à convenção padrão)
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Container from './layout/Container';



function App() {
  return (
    <Router>
      
      {/* Menu de Navegação (Parte fixa) */}
      <nav className="bg-gray-800 p-4 shadow-md text-white">
        <div className="flex space-x-6">
          
          {/* Use <Link> para navegação interna */}
          <li>
            <Link to="/" className="hover:text-yellow-500 transition duration-300">Home</Link>
          </li>
          <li>
            {/* O FaPhone foi usado aqui */}
            <Link to="/contact" className="hover:text-yellow-500 transition duration-300">Contato <FaPhone className="inline ml-1 text-sm" /></Link>
          </li>
          <li>
            <Link to="/company" className="hover:text-yellow-500 transition duration-300">Empresa</Link>
          </li>
          <li>
            <Link to="/newproject" className="hover:text-yellow-500 transition duration-300">Novo Projeto</Link>
          </li>
        </div>
      </nav>


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

      <footer className="bg-gray-700 text-white text-center p-3">
        <p>Footer do Costs</p>
      </footer>
      
    </Router>

  );
}

export default App;
