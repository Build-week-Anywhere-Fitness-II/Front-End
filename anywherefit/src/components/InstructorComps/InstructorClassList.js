import React from 'react';
import { Card, CardTitle, Col, Container, Row, CardText, Button } from 'reactstrap';

const InstructorClassList = (props) => {
const user = window.sessionStorage.getItem('user')
const filteredArray = props.classes.filter(e => e.instructor_id == user).map((filtered) => {
return filtered
})
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
    <Button>Edit</Button>
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