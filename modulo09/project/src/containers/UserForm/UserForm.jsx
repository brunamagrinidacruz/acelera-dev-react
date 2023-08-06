import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const [success, setSucces] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleCadastrar = () => {
    let newUser = {
      name: name,
      avatar: avatar,
      username: username,
      email: email
    }

    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users", {
      method: "POST",
      body: JSON.stringify(newUser)
    }).then(() => setSucces(true))
  }   

  return (
    <React.Fragment>
      <div className="post__form" data-testid="user-form">
        <div className="profile-data">
          <img className="user__thumb" src={avatar} alt={name}/>
          <div className="user__name">
            <p>{name}</p>
            <span>{username}</span>
          </div>
        </div>
        <div className="post__form__wrapper">
          <label>Nome</label>
          <input value={name} onChange={(event) => setName(event.target.value)} />
          <label>Usuário</label>
          <input value={username} onChange={(event) => setUsername(event.target.value)} />
          <label>Email</label>
          <input value={email} onChange={(event) => setEmail(event.target.value)} />
          <label>Url da Imagem de Perfil (use a url da imagem do Linkedin)</label>
          <input value={avatar} onChange={(event) => setAvatar(event.target.value)} />
          <button onClick={handleCadastrar}>Cadastrar</button>
        </div>
      </div>

      { success ?
        <SuccessMessage/>
        : null
      }

    </React.Fragment>
  );
};

export default UserForm;
