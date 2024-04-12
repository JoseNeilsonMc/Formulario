import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o Formulario");
    console.log(name, email, bio, role);
    
    // Validar campos
    if (name.trim() === '' || email.trim() === '' || bio.trim() === '' || role === 'options') {
      alert('Por favor, preencha todos os campos.');
      setShowSuccessMessage(false); // Oculta a mensagem de sucesso se houver um erro de validação
      return;
    }

    // Envio do formulário
    console.log('Formulário válido. Enviando...');

    // Limpar campos
    setName("");
    setEmail("");
    setBio("");
    setRole("");

    // Atualizar estado do formulário enviado
    setFormSubmitted(true);
    setShowSuccessMessage(true);
  };

  return (
    <div className="Container">
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
          <input
            type="email"
            name="email"
            placeholder="Digite seu email aqui"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        <label>
          <span>Função no sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)} 
            value={role}
          >
            <option value="options">Escolha uma opção!</option>          
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        
        <input className="btn" type="submit" value="Enviar" />
        {showSuccessMessage && <div className="msg">Formulário enviado com sucesso!</div>}
      </form>
    </div>
  );
};

export default MyForm;
