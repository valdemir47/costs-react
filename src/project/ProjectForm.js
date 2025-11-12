import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css' 

//btnText (pegando propriedade do componente pai)
function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            {/*Input/forms com componetização*/}
            <Input 
                type ="text" 
                text="Nome do Projeto" 
                name="name" 
                placeholder="Insira o nome do Projeto" 
                />
            <Input 
                type ="number" 
                text="Orçamento do Projeto" 
                name="budget" 
                placeholder="Insira o orçamento total" 
                />

            <Select name="category_id" text="Selecione a categoria"/>

            <SubmitButton text={btnText}/> {/*pegando do elemento pai/paramento funcao*/}

             {/*<div>
                <input type="number" placeholder="Insira o Orçamento total"/>
            </div>input sem componetização*/}
            
            {/*
            <div>
                <select name="category_id">
                <option disabled> Selecione a Categoria </option>
            </select>
            </div> 
            select sem componetização*/}
            
            
            
        </form>
    ) 
    
}

export default ProjectForm 