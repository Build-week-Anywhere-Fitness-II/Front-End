import React from 'react'
import {Card, Col, CardText, CardTitle, CardSubtitle, Button} from 'reactstrap';
import {useHistory, Route, useParams, useRouteMatch} from 'react-router-dom';
import CardDetail from './classDetail';
import ClassDetail from './classDetail';


const ClassCard = (props) => {
  const freeSpots = props.class.max_class_size - props.class.attendees;

  const history = useHistory();
  console.log(props)
  
  const classDate = new Date(props.class.class_time);

  console.log(classDate);

    
    return (
        <Col xs="12" sm="6" md="4" lg="3">
        <Card key={props.class.id}>
          <CardTitle>{props.class.class_name}</CardTitle>
    <CardSubtitle>Instructor: {props.class.instructor_id}</CardSubtitle> 
    {/* Later i will convert id to intructor name*/}
    <CardSubtitle>Class Time: {props.class.class_time}</CardSubtitle>
          <CardText>Workout Type: {props.class.type}</CardText>
          <CardText>Available Spots: {freeSpots}</CardText>
          <CardText>{props.class.intensity_level}</CardText>
          <Button onClick={()=>history.push(`/classes/${props.class.id}`)}>Class Details</Button>
        </Card>
      </Col>
    );
}

export default ClassCard;