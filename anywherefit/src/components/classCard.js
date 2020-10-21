import React from 'react'
import {Card, Col, CardText, CardTitle, CardSubtitle, Button, Container, Row} from 'reactstrap';
import {useHistory} from 'react-router-dom';
import CardDetail from './classDetail';
import ClassDetail from './classDetail';


const ClassCard = (props) => {
  

    return (
      <Container>
      <Row>
        {props.data.map((e) => {
          const freeSpots = e.max_class_size - e.attendees;
          return (
        <Col xs="12" sm="6" md="4" lg="3">
        <Card key={e.id}>
          <CardTitle>{e.class_name}</CardTitle>
    <CardSubtitle>Instructor: {e.instructor_id}</CardSubtitle> 
    <CardSubtitle>Class Time: {e.class_time}</CardSubtitle>
          <CardText>Workout Type: {e.type}</CardText>
          <CardText>Available Spots:{freeSpots} </CardText>
          <CardText> intensity level:{e.intensity_level}</CardText>
          {/* <Button onClick={()=>history.push(`/classes/${props.data.id}`)}>Class Details</Button> */}
        </Card>
      </Col>
          );
        })}
      </Row>
      </Container>
    );
}

export default ClassCard;