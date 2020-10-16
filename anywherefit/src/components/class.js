import React from 'react'
import {Card, CardHeader, CardBody,Button} from 'reactstrap';
import {Link,useHistory} from 'react-router-dom';
import ClassDetail from './classDetail';

const Class = (props) => {

    const history = useHistory();
    const {classId,className} = props.class
    console.log(classId,className)
    return (
        <div>
            <Card>
                <CardHeader>{classId}</CardHeader>
                <CardBody>{className}</CardBody>    
                <Button onClick={()=>history.push(`/classes/${classId}`)}>More Details</Button> 
            </Card>
        </div>
    )
}

export default Class;