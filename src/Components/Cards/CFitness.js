import Card from 'react-bootstrap/Card';
import Enter from '../Function';

function CFitness() {
  return (

    <Card className='conatiner'
    style={{ 
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      border:'5px solid red',
      top: '90px',
      left: '100px',
      }}>
      <Card.Body className='body'>
        <Card.Title>Gym</Card.Title>

        <Card.Text className='Text'
         style={{
          display: 'flex',
          flexDirection: 'column',
          color:'black'}}>
          Treinos, preparamentos e administração ao seu treinamento.
        </Card.Text>
        
         <Enter/>

      </Card.Body>
    </Card>
  );
}

export default CFitness;