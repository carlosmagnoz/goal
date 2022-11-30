import Card from 'react-bootstrap/Card';
import Enter from '../Function';

function CWork() {
  return (

    <Card className='conatiner'
    style={{ 
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      border:'5px solid green',
      top: '-300px',
      left: '500px',
      backgroundColor: 'white'
      }}>

      <Card.Body className='body'
      style={{
        backgroundColor: 'white'
      }}>

        <Card.Title
         style={{
          backgroundColor: 'white'
         }}>
          Work
        </Card.Title>

        <Card.Text className='Text'
         style={{
          display: 'flex',
          flexDirection: 'column',
          color:'black',
          backgroundColor: 'white'
          }}>
           Organização de trabalho.
        </Card.Text>
        
         <Enter/>

      </Card.Body>

    </Card>
  );
};

export default CWork;