import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardTitle, Col, Container, Row, CardText, Button } from 'reactstrap';

const InstructorClassList = (props, {update}) => {

const user = window.sessionStorage.getItem('user')
const filteredArray = props.classes.filter(e => e.instructor_id === Number(user)).map((filtered) => {
return filtered
},[update]);
const history = useHistory();
return (
<div>
<Container>
    <Row>
        {filteredArray.map((e) => {
            return (
<Col>
<Card key={e.id}>
    <CardTitle>{e.class_name}</CardTitle>
    <CardText>{e.instructor_id}</CardText>
    <Button onClick={() => history.push(`/user/${e.instructor_id}/edit/${e.id}`)}>Edit</Button>
</Card>
</Col>
            )
        })}
    </Row>
</Container>
</div>
);
}

export default InstructorClassList;