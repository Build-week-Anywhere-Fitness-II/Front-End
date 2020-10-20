import React,{useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import {Card,Form, FormGroup, Label, Input,Button} from 'reactstrap' 

const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNycHRlc3RpbnN0cnVjdG9yIiwicm9sZSI6Imluc3RydWN0b3IiLCJpYXQiOjE2MDI5MDc1NTE0NjEsImV4cCI6MTYwMjkwNzYzNzg2MX0.UnwHcKm9P3AUiS5lVcYlAPeM-7NuZYHyDZ6ChEe3FiI'; 

const InstructorProfile =() => {
    const [classForm,setClassForm] = useState({
        class_name:"",
        type:"",
        class_time:"",
        duration_minutes:'',
        intensity_level:'',
        location:"",
        attendees:'',
        max_class_size:''
    })

    const handleChange = (e) =>{
        setClassForm({...classForm,[e.target.name]:e.target.value})
    }

    const submitForm = (e) =>{
        e.preventDefault()
        axios.post("https://pt-anywhere-fitness.herokuapp.com/api/classes",classForm, {headers:{
            'Authorization': `Bearer ${header}`
        }})
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
    }

    const formSchema = yup.object().shape({
        class_name:yup.string().required('class name is required'),
        type:yup.string().required("type is required"),
        class_time:yup.date(),
        duration_minutes:yup.number(),
        intensity_level: yup.number(),
        location:yup.string(),
        attendees:yup.number(),
        max_class_size:yup.number()
    })

return (
<Card>
    <h1>InstructorProfile Here</h1>
    <Card>
        
    </Card>
    <h3>Create Your Class</h3>
    <Form onSubmit={submitForm}>
        <FormGroup>
        <Label htmlFor="class_name"> Class Name<br/>
            <Input type="text" name="class_name" id="class_name" data-cy="class_name" placeholder="Enter Your Class Name" onChange={handleChange} value= {classForm.class_name}
        />
        </Label><br/>
        <Label htmlFor="type">Workout Type<br/>
            <select id="type" name="type" data-cy="type" onChange={handleChange} value={classForm.type}>
                <option value=''>Choose Your Workout Type</option>
                <option value="strength">Strength</option>
                <option value="endurance">Endurance</option>
                <option value="calisthenics">Calisthenics</option>
                <option value="hotYoga">Hot Yoga</option>
            </select>
        </Label><br/>
        <Label htmlFor="class_time">Select Your Class Time<br/>
            <input type="time" id="class_time" name="class_time" data-cy="class_time" value={classForm.class_time} onChange={handleChange}
            />
        </Label><br/>
        <Label htmlFor="duration_minutes">Class Length(in mins)<br/>
            <Input type="number" id="duration_minutes" name="duration_minutes" data-cy="duration_minutes" onChange={handleChange} value={classForm.duration_minutes} placeholder="10" min="10" max="90"
            />
        </Label><br/>
        <Label htmlFor="intensity_level">Intensity Level<br/>
            <Input type="number" id="intensity_level" name="intensity_level" data-cy="intensity_level" onChange={handleChange} value={classForm.intensity_level}placeholder="1" min="1" max="10"
            />
        </Label><br/>
        <Label htmlFor="location">Class Location<br/>
            <Input type="text" id="location" name="location" data-cy="location" onChange={handleChange} value={classForm.location}
            />
        </Label><br/>
        <Label htmlFor="attendees">Number of Attendees<br/>
            <input type="number" id="attendees" name="attendees" data-cy="attendees" placeholder="5"
            />
        </Label><br/>
        <Label htmlFor="max_class_size">Max Class Size<br/>
            <Input type="number" id="max_class_size" name="max_class_size" data-cy="max_class_size"
            />
        </Label><br/>
        <Button type="submit">Create Class</Button>
        </FormGroup>
    </Form>
</Card>
);
}

export default InstructorProfile;