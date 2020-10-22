import React from 'react';
import { Container, FormGroup, Input, Form, Button } from 'reactstrap';

import { useHistory, useParams } from 'react-router-dom';
import { Auth } from '../../utils/axiosAuth';

const EditClass = () => {
const [data, setData] = React.useState()
const {classId, id} =useParams();
React.useEffect(() => {
Auth()
.get('api/classes')
.then((res) => {
const initialClassArray = res.data;
const exactClass = initialClassArray.filter(e => e.id === Number(classId))
setData(exactClass[0]);
})
}, [])
console.log(data)
const handleChange = (e) => {
    setData({...data, 
    [e.target.name]:e.target.value
    });
    }
const submit = e => {
e.preventDefault()
Auth()
.put(`api/classes/edit/${classId}`, data)
.then((res) => {
console.log(res);
})
.catch((err) => console.log(err));
}
const {push} =useHistory();
const deleteClass = e => {
e.preventDefault();
Auth()
.delete(`api/classes/delete/${classId}`)
.then((res) => {
    console.log(res);
    push(`user/${id}`)
    })
    .catch((err) => console.log(err));
    }

    return (
        <Container>
            {data ?
        <Form onSubmit={submit}>
            <FormGroup>
                <Input type="text"
                name="class_name"
                placeholder="Class Name"
                value={data.class_name}
                onChange={handleChange}

                />
            </FormGroup>
            <FormGroup>
                <Input type="text"
                name="type"
                placeholder="Class Type"
                value={data.type}
                onChange={handleChange}

                />
            </FormGroup>
            <Button>Submit Edit</Button>
</Form>
: <h1>loading</h1>
            }
            <Form onSubmit={deleteClass}>
                <Button>Delete</Button>
            </Form>
</Container>
    );
};

    export default EditClass