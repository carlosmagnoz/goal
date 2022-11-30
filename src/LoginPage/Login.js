import React, {useState} from "react";

function Login(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState ('');

  function handleSubmit (event) {
    event.preventDefault();
    console.log("submit");
  };

  return(
    <div className="Login">
      <h1 className="Title">Login do sistema</h1>
      <form className="form">
        <div className="field">
          <label htmlFor="email">email</label>
          <input type="email"
           name="email"
            className="email"
             value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="field">
          <label htmlFor="password">senha</label>
          <input type="password" name="password" className="password"/>
        </div>
        <div className="actions">
          <button className="confirm" type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;