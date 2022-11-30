import Card from 'react-bootstrap/Card';
import Enter from '../Function';

function CFodd() {
  return (

    <Card className='conatiner'
    style={{ 
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      border:'5px solid yellow',
      top: '-270px',
      left: '500px',
      }}>
      <Card.Body className='body'>
        <Card.Title>Food</Card.Title>

        <Card.Text className='Text'
         style={{
          display: 'flex',
          flexDirection: 'column',
          color:'black'}}>
          Dietas, tabela nutricionais e controle.
        </Card.Text>
        
         <Enter/>

      </Card.Body>
    </Card>
  );
}

export default CFodd;