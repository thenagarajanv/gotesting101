import React from 'react'
import NavBar from './NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Leaderboard(){
  return (
    <>
        <header><NavBar/></header>
        <Container>
            <div>
              <Row>
                  <Col>{}first</Col>
                  <Col>{}second</Col>
              </Row>
            </div>
        </Container>
        <footer></footer>
    </>
  )
}

export default Leaderboard;