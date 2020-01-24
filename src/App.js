import React, {useState, useEffect} from "react";
import "./App.css";
import styled from 'styled-components';
import { Card, Button, CardTitle, CardText, CardImg, Row, Col, Container } from 'reactstrap';

const CenterImg = styled.img`
  display: block;
  margin: 0% auto;
`;

const CenterTitle = styled.h1`
  text-align: center;
`;

const App = () => {
  let [hdurl, setHDUrl] = useState('');
  let [url, setUrl] = useState('');
  let [alt, setAlt] = useState('Loading.');
  let [text, setText] = useState('');
  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => res.json())
        .then(data => {
          setHDUrl(data.hdurl);
          setUrl(data.url);
          setAlt(data.explanation);
          setText(data.explanation);
        })
        .catch(err => setAlt('Image Failed to Load.'));
  }, []);
  return <Container>
      <Row>
        <Col>
          <Card body>
            <CenterTitle>NASA Astronomy Photo of the Day</CenterTitle>
            <a href={hdurl}><CenterImg src={url} alt={alt} /></a>
            <CardText>{text}</CardText>
          </Card>
        </Col>
      </Row>
  </Container>
}

export default App;
