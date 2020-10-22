import React from "react";
import { Container, FormGroup, Input, Form, Button } from 'reactstrap';

const InstructorAddClass =(props) => {

    // initial form state
    const [form, setForm] = React.useState({
        class_name:'',
        type:'',
        street_address:'',
        city:'',
        state:'',
        zip_code:'',
        date:'',
        time:'',
        hours:0,
        mins:0,
        intensity_level: 0,
        max_class_size: 0,
        });

// object that form information updates, went this route since the way data is being requested

        const postForm ={
            class_name: form.class_name,
            type:form.type,
            class_time: `${form.date}:${form.time}:00`,
            duration_minutes: ( + form.mins + form.hours * 60 ),
            intensity_level: form.intensity_level,
            location: `${form.street_address}, ${form.city}, ${form.state}, ${form.zip_code}`,
            attendees:0,
            max_class_size:form.max_class_size,
            instructor_id: window.sessionStorage.getItem('user'),
        }

        // handles change for form input
        const handleChange = (e) => {
        setForm({...form, 
        [e.target.name]:e.target.value
        });
        }
        

// handles form submit
        const submit =(e) => {
        e.preventDefault();
        props.addClass(postForm);
        }

return (
    <Container>
        <Form onSubmit={submit}>
            <FormGroup>
                <Input type="text"
                name="class_name"
                placeholder="Class Name"
                value={form.class_name}
                onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Input type="text"
                name="type"
                placeholder="Class Type"
                value={form.type}
                onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="location">
                <h2>Meeting Location</h2>
                <Input type="text"
                name="street_address"
                placeholder="Street Address"
                value={form.street_address}
                onChange={handleChange}
                />
                <Input type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                />
                <Input type="text"
                name="state"
                placeholder="State"
                value={form.state}
                onChange={handleChange}
                />
                <Input type="text"
                name="zip_code"
                placeholder="Zip Code"
                value={form.zip_code}
                onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <h2>Date & Time</h2>
        <Input
          type="date"
          name="date"
          id="date"
          placeholder="date placeholder"
          value={form.date}
          onChange={handleChange}
        />
        <Input
          type="time"
          name="time"
          id="exampleTime"
          placeholder="time placeholder"
          value={form.time}
          onChange={handleChange}
        />
      </FormGroup>
      <h2>Work Out Information</h2>
            <FormGroup >
                <Input type="number"
                name="hours"
                min="0"
                max="4"
                value={form.hours}
                onChange={handleChange}
                />
                <Input type="number"
                name="mins"
                placeholder="Mins"
                min="0"
                max="45"
                step="15"
                value={form.mins}
                onChange={handleChange}
/>
            </FormGroup>
            <FormGroup>
                <Input type="number"
                name="intensity_level"
                min="1"
                max='10'
                value={form.intensity_level}
                onChange={handleChange}
/>
            </FormGroup>

            <FormGroup>
                <Input type="number"
                name="max_class_size"
                value={form.max_class_size}
                onChange={handleChange}
                />
            </FormGroup>
            <Button>Add Class</Button>
        </Form>
        </Container>
        )
}

export default InstructorAddClass;