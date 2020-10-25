import React from "react";
import {Container, Card, Row, Col, Button} from 'react-bootstrap';

const Main = () => {
  return ( 
  <>
<Container style={{
paddingTop:50,
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
midWidth: 300,

}}>

  <h1 style ={{color: '#FFF', marginTop:20, fontFamily:'ubuntu'}}>Movie Now</h1>
  <Row style={{display:'flex', justifyContent:'center'}}>
  <Card style={{ width: 250, margin:10 }}>
  <Card.Img variant="top" style={{width: 180, height:300, alignSelf:'center', paddingTop:20, cursor:'pointer'}} src="https://i.pinimg.com/564x/b7/77/d0/b777d0e46cba55f535f68318e28aca80.jpg" />
  <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
    <Card.Title>Card Title</Card.Title>
    <Card.Text style={{fontSize:12}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="outline-dark" style={{width: '100%'}}>Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: 250, margin:10 }}>
  <Card.Img variant="top" style={{width: 180, height:300, alignSelf:'center', paddingTop:20, cursor:'pointer'}} src="https://i.pinimg.com/564x/b7/77/d0/b777d0e46cba55f535f68318e28aca80.jpg" />
  <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
    <Card.Title>Card Title</Card.Title>
    <Card.Text style={{fontSize:12}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="outline-dark" style={{width: '100%'}}>Go somewhere</Button>
  </Card.Body>
</Card>
</Row>
</Container>
  </>
  )};

export default Main;
