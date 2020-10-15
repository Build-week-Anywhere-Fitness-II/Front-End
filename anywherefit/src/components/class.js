import React from 'react'
import {Card, CardHeader, CardBody} from 'reactstrap';

const Class = (props) => {
    const {classId,className} = props.class
    console.log(classId,className)
    return (
        <div>
            <Card>
                <CardHeader>{classId}</CardHeader>
                <CardBody>{className}</CardBody>       
            </Card>
        </div>
    )
}

export default Class;