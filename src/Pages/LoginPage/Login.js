import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';

function Login() {
  // const navigate = useNavigate();
  return (
    <Form 
     style={{
      display: "flex",
      flexDirection: "column",
      backgroundColor:"white",
      width:"250px",
      height:"200px",
      marginTop: "200px",
      marginLeft: "570px",
      border: "6px solid white",
      borderRadius: "10px",
     }}
    >
      <Form.Group
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "30px", 
        backgroundColor: "white"
       }}
       className="mb-3"
       controlId="formBasicEmail">

        <Form.Label
         style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          marginTop: "-30px",
          marginLeft: "-3px",
          textAlign: "center",
          width: "247px"
        }}
        >
          Email and Password
        </Form.Label>

        <Form.Control
         type="email"
         placeholder="email"
          style={{
            display: "flex",
            flexDirection: "column",
            border: "3px solid black"
          }}
        />

        <Form.Control 
         style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
          width:"230px",
          marginLeft: "4px",
          border:"3px solid black"
         }}
        type="password"
         placeholder="Password"/>

      </Form.Group>

      <Button
       style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "-11px"
       }} 
       variant="primary"
       type="submit">
        Enter
      </Button>

    </Form>
  );
}

export default Login;