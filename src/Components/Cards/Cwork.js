import Card from 'react-bootstrap/Card';
import Enter from '../Function';

function Cwork() {
  return (

    <Card className='conatiner'
     style={{
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      border:'2px solid red',
      top: '30px',
      left: '-470px',
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

export default Cwork;