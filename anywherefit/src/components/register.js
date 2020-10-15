import React from "react";
import { Card, Form, Input, Label, Button, FormGroup } from "reactstrap";

const Register = () => {
    const [signUp, setSignUp] = React.useState({
        username:'',
        password:'',
        instructor:false,
    });

    const handleChange = (e) => {
        setSignUp({
            ...signUp,
            [e.target.name]:e.target.value
        })
    }
    const handleChecked = (e) => {
setSignUp({
    ...signUp,
    [e.target.name]:e.target.checked
})
    }
return (
<Card>
    <Form>
        <FormGroup>
        <Label for="username">Username: </Label>
        <Input type="text"
        name = "username"
        id="username"
        placeholder="username"
        value={signUp.username}
        onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
        <Label for="password">Password: </Label>
        <Input type="text"
        name="password"
        placeholder="password"
        id="password"
        value={signUp.password}
        onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
        <Label for="instructor">
            <Input type="checkbox"
        name="instructor"
        id="instructor"
        value={signUp.instructor}
        onChange={handleChecked}/>
        Are you an Instructor?
        </Label>
        </FormGroup>

        <Button>Sign Up</Button>
    </Form>
</Card>
)
}

export default Register;