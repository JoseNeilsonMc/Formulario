import { useState } from 'react';
import "./MyForm.css";

const MyForm = ({user}) => {
  //6 - controle de inputs
  //3 - gerenciamento de Dados
  const [name, setName] = useState( user ? user.name: "")
  const [email, setEmail] = useState( user ? user.email: "")

  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  console.log("Enviando o Formulario");
  console.log(name,email,bio);

  setName("");
  setEmail("");
  setBio("");
  };
  return (
    <div>
        
        <form onSubmit={handleSubmit}>
          
          <div>
            <label htmlFor="name">Nome:</label>
              <input 
                type="text"
                name="name" 
                placeholder="Digite seu Nome aqui" 
                onChange={handleName}
                value={name}
              />  
          </div>

            <label>  
              <span>E-mail:</span>
                <input type="email" 
                  name='email' 
                  placeholder='Digite seu email aqui'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email} />
            </label>
            <label>
              <span>Bio:</span>
              <textarea name="bio" 
                  placeholder='Descrição do usuário' 
                  onChange={(e) => 
                  setBio(e.target.value)} 
                  value={bio} >
              </textarea>
            </label>
            <input type="submit" value="Enviar"/>

        </form>
    </div>
  )
}
export default MyForm;
