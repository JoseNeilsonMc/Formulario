import { useState } from 'react'
import './MyForm.module.css'
export const MyForm = () => {
  //3 - gerenciamento de Dados
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const handleName = (e) => {
    setName(e.target.value)
  }
 console.log(name);
  return (
    <div>
        <div>
        <form action="name">Nome:</form>
        <input type="text" 
               name="name" 
               placeholder="Digite seu Nome aqui" 
               onChange={handleName}/>
        <label>
        <span>E-mail:</span>
        <input type="email" name='email' placeholder='Digite seu email aqui' />
        </label>

        </div>
        <input type="submit" value="Enviar" />
    </div>
  )
}
