import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardTitle, Col, Container, Row, CardText, Button } from 'reactstrap';
import ProductWrapper from '../ProductWrapper';
import ButtonContainer from '../ButtonContainer';

const InstructorClassList = (props) => {

const user = window.sessionStorage.getItem('user');

const filteredArray = props.classes.filter(e => e.instructor_id === Number(user));

const history = useHistory();

return (
<div>
<ProductWrapper>
    <Row>
        {filteredArray.map((e) => {
            return (
<Col>
<Card key={e.id}>
    <CardTitle>{e.class_name}</CardTitle>
    <CardText>{e.instructor_id}</CardText>
    <ButtonContainer onClick={() => history.push(`/user/${e.instructor_id}/edit/${e.id}`)}>Edit</ButtonContainer>
</Card>
</Col>
            )
        })}
    </Row>
</ProductWrapper>
</div>
);
}

export default InstructorClassList;