import React from 'react'
import {Card, Col, CardText, CardTitle, CardSubtitle, Button, Container, Row, CardFooter} from 'reactstrap';
import ButtonContainer from './ButtonContainer';
import ProductWrapper from './ProductWrapper';
import styled from'styled-components';
import {useHistory} from 'react-router-dom';
import CardDetail from './classDetail';
import ClassDetail from './classDetail';


const ClassCard = (props) => {
  const history = useHistory();
  console.log(props)
    return (
      <ProductWrapper>
      <Row>
        {props.data.map((e) => {
          const freeSpots = (e.max_class_size - e.attendees);
          const spotsTaken = (e.attendees/e.max_class_size)*100;
          const stringSpot = `${spotsTaken}%`
          console.log('stringSpot',stringSpot)
          return (
        <Col xs="12" sm="6" md="4" lg="3">
        <Card key={e.id} style={{width:'100%'}}>
          <CardTitle style={{fontSize:'1.5em',fontWeight:'bold',textAlign:"left"}}>{e.class_name}</CardTitle>  
          <CardSubtitle style={{fontWeight:'bold'}}>{e.type}</CardSubtitle>   
          <CardFooter>
          <br/>
          <h5>Class Capacity</h5>
          <div className="progress" style={{height: "1px;"}}>
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:stringSpot}} aria-valuenow={e.attendees} aria-valuemin="0" aria-valuemax={e.max_class_size}></div>
          </div><br/>
          <ButtonContainer onClick={()=>history.push(`/classes/${e.id}`)}>Class Details</ButtonContainer>
          </CardFooter>
        </Card>
      </Col>
          );
        })}
      </Row>
      </ProductWrapper>
    );
}





export default ClassCard;