import Card from 'react-bootstrap/Card';
import Enter from '../Function';

function Ctask() {
  return (

    <Card className='conatiner'
    style={{ 
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      border:'5px solid black',
      top: '70px',
      left: '100px',
      }}>
      <Card.Body className='body'>
        <Card.Title>Task</Card.Title>

        <Card.Text className='Text'
         style={{
          display: 'flex',
          flexDirection: 'column',
          color:'black'}}>
          Classe feita para você adicionar suas tarefas do dia a dia.
        </Card.Text>
        
         <Enter/>

      </Card.Body>
    </Card>
  );
}

export default Ctask;