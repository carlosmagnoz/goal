import Card from 'react-bootstrap/Card';
import Enter from '../Function';

function CSocial() {
  return (

    <Card className='conatiner'
    style={{ 
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      border:'5px solid pink',
      top: '-660px',
      left: '870px',
      backgroundColor: 'white'
      }}>

      <Card.Body className='body'
       style={{
        backgroundColor: 'white'
       }}
      >
        <Card.Title
         style={{
          backgroundColor: 'white'
         }}>
          Social
        </Card.Title>

        <Card.Text className='Text'
         style={{
          display: 'flex',
          flexDirection: 'column',
          color:'black',
          backgroundColor: 'white'
          }}>
            Controle de eventos e lazer.
        </Card.Text>
        
         <Enter/>

      </Card.Body>

    </Card>
  );
};

export default CSocial;