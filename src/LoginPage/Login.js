import React, {useState} from "react";

function Login(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState ('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log( handleSubmit, {email, password});
  };

  return(
    <div className="Login">
      <h1 className="Title">Login do sistema</h1>
      <form className="form">
        <div className="field">
          <label htmlFor="email">email</label>
          <input
           type="email"
           name="email"
            className="email"
             value={email} 
             onChange=
             {(e) => setEmail(e.target.value)}/>
        </div>
        <div className="field">
          <label htmlFor="password">senha</label>
          <input 
          type="password"
           name="password"
            className="password"
            value={password}
            onChange=
            {(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="actions">
          <button className="confirm" type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;