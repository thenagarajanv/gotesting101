import React from 'react'
import NavBar from './Components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Leaderboard(){
  return (
    <>
        <header><NavBar/></header>
        <Container>
            <Row>
                <Col>1</Col>
                <Col>2</Col>
            </Row>
        </Container>
    </>
  )
}

export default Leaderboard;