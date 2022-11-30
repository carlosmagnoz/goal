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
         }}
        >
          School
        </Card.Title>

        <Card.Text className='Text'
         style={{
          display: 'flex',
          flexDirection: 'column',
          color:'black',
          backgroundColor: 'white'
          }}>
            Arrumar rotina de estudos, matérias e etc.
        </Card.Text>
        
         <Enter/>

      </Card.Body>

    </Card>
  );
};

export default CSchool;