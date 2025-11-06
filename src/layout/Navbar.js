import { Link } from "react-router-dom" 
import Container from "./Container"
import styles from './Navbar.module.css' //imporando o estilo
import logo from '../img/costs_logo.png' // a imagem

function Navbar(){
    
    return(

        <nav class={styles.navbar}> 
            <Container>{/*O que ta dentro deste componente, vai ter o estilo dele - ver div/class dele*/}
                <Link to ='/'>
                    <img src={logo} alt="Costs"/>
                </Link>
                <ul class={styles.list}>
                    <li class={styles.item}> <Link to ='/'>Home</Link> </li>
                    <li class={styles.item}><Link to ='/contact'>Contato</Link></li>
                    <li class={styles.item}><Link to ='/company'>Empresa</Link></li>
                    <li class={styles.item}><Link to ='/netproject'>Novo Projeto</Link></li>

                </ul>
            </Container>
        </nav>

    )
        
  //  <nav class={styles.navbar}>  - classe - estilo da classe navbar 
}

export default Navbar