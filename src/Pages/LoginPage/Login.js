import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";

function Login() {

  const handleclickLogin = (values) => {
    console.log(values);
  };

  const validationLogin = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string.password().required(),
  });

  return(
    <div className='Container-Login'>
      <h1>Login</h1>
       <Formik initialValues={{}}
       onSubmit={handleclickLogin}
       validationSchema={validationLogin}>
        <Form className="login-form">
         <div className="login-form-group">
          <Field name="email" className="form-field" placeholder="Email"/>
           <ErrorMessage
            component="span"
            name="Email"
            className="form-error"
            />
          </div>

          <div className="login-form-group">
           <Field name="password" className="form-field" placeholder="Senha"/>
           <ErrorMessage
            component="span"
            name="password"
            className="form-error"
            />
          </div>

           <button className="button" type="submit">Enter</button>     

        </Form>
      </Formik>
    </div>
  );
};

export default Login