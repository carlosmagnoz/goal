import Card from 'react-bootstrap/Card';
import Enter from '../Function';

function CSchool() {
  return (

    <Card className='conatiner'
    style={{ 
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      border:'5px solid blue',
      top: '-640px',
      left: '870px',
      }}>
      <Card.Body className='body'>
        <Card.Title>School</Card.Title>

        <Card.Text className='Text'
         style={{
          display: 'flex',
          flexDirection: 'column',
          color:'black'}}>
            Arrumar rotina de estudos, matérias e etc.
        </Card.Text>
        
         <Enter/>

      </Card.Body>
    </Card>
  );
}

export default CSchool;