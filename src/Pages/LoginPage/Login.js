import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";

function Login() {

  const handleclickCadastro = (values) => {
    console.log(values);
  };
  const handleclickLogin = (values) => {
    console.log(values);
  };

  const validationLogin = yup.object().shape({
    email: 
    yup.string()
    .email("Email invalido")
    .required("Campo obrigatório"),
    password:
     yup.string()
    .min(8 , "A senha ter que ter no mínimo 8 caracteres")
    .required("Campo obrigatório"),
  });

  const validationCadastro = yup.object().shape({
    email: 
    yup.string()
    .email("Email invalido")
    .required("Campo obrigatório"),
    password:
     yup.string()
    .min(8 , "A senha ter que ter no mínimo 8 caracteres")
    .required("Campo obrigatório"),
    confirmpassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais")
  });

  return(

    <div className='Container-Login'
    style={{
      display:"flex",
      flexDirection: "column",
      backgroundColor: "white",
      borderRadius: "10px",
      width:"300px",
      marginLeft: "570px",
      marginTop: "230px"
    }}>
      <h1
       style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        marginLeft: "10px",
        marginTop: "10px",
        alignItems: "center",
        fontFamily: "sans-serif"
       }}
      >Login</h1>

       <Formik initialValues={{}}
       onSubmit={handleclickLogin}
       validationSchema={validationLogin}>
        <Form className="login-form"
        style={{
          width: "0px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px, solid, white"
        }}
        >
         <div className="login-form-group"
         style={{
          width: "260px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
         }}
         >
          <Field name="email" className="form-field" placeholder="Email"
          style={{
            width: "230px",
            backgroundColor: "white",
            borderRadius: "10px solid black",
            marginLeft: "37px"
          }}/>
           <ErrorMessage
            component="span"
            name="Email"
            className="form-error"
            />
          </div>

          <div className="login-form-group"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "230px",
            backgroundColor: "white",
            marginLeft: "37px",
            marginTop: "30px"
          }}
          >
           <Field name="password" className="form-field" placeholder="Senha"
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white"
            }}
           />
           <ErrorMessage
           style={{
            display: "flex",
            backgroundColor: "white",
            marginTop: "4px",
           }}
            component="span"
            name="password"
            className="form-error"
            />
          </div>

           <button className="button" type="submit"
            style={{
              width: "170px",
              backgroundColor: "white",
              border: "3px solid black",
              borderRadius: "5px",
              marginTop: "30px",
              marginLeft: "60px"
            }}
           >Enter</button>     

        </Form>
      </Formik>


      <h1
       style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        marginLeft: "10px",
        marginTop: "10px",
        alignItems: "center",
        fontFamily: "sans-serif"
       }}
      >Cadastro</h1>

       <Formik initialValues={{}}
       onSubmit={handleclickCadastro}
       validationSchema={validationCadastro}>
        <Form className="login-form"
        style={{
          width: "0px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px, solid, white"
        }}
        >
         <div className="login-form-group"
         style={{
          width: "260px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
         }}
         >
          <Field name="email" className="form-field" placeholder="Email"
          style={{
            width: "230px",
            backgroundColor: "white",
            borderRadius: "10px solid black",
            marginLeft: "37px"
          }}/>
           <ErrorMessage
            component="span"
            name="Email"
            className="form-error"
            />
          </div>

          <div className="login-form-group"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "230px",
            backgroundColor: "white",
            marginLeft: "37px",
            marginTop: "30px"
          }}
          >
           <Field name="password" className="form-field" placeholder="Senha"
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white"
            }}
           />
           <ErrorMessage
           style={{
            display: "flex",
            backgroundColor: "white",
            marginTop: "4px",
           }}
            component="span"
            name="password"
            className="form-error"
            />
          </div>

          <Field name="password" className="form-field" placeholder="Confirme a senha"
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white"
            }}
           />
           <ErrorMessage
           style={{
            display: "flex",
            backgroundColor: "white",
            marginTop: "4px",
           }}
            component="span"
            name="Confirme a senha"
            className="form-error"
            />

           <button className="button" type="submit"
            style={{
              width: "170px",
              backgroundColor: "white",
              border: "3px solid black",
              borderRadius: "5px",
              marginTop: "30px",
              marginLeft: "60px"
            }}
           >Enter</button>     

        </Form>
      </Formik>
      
    </div>
  );
};

export default Login