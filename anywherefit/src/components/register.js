import React, {useState,useEffect} from "react";
import { Card, Form, Input, Label, Button, FormGroup } from "reactstrap";
import * as yup from 'yup';

const Register = () => {
    
    const [signUp, setSignUp] = React.useState({
        username:'',
        password:'',
        role: {
            instructor:false,
            client:false
        }
    });

    // state disabled for button
    const [isDisabled,setisDisabled] = useState(true);

    //set errors array to log errors
    const [errors,setErrors] = useState({
        name:"",
        password:""
    })

    // change the value of the field to equal user input
    const handleChange = (e) => {
        setSignUp({
            ...signUp,
            [e.target.name]:e.target.value
        })
        validateChanges(e)
    }

//     const handleChecked = (e) => {
// setSignUp({
//     ...signUp,
//     [e.target.name]:e.target.checked
// })
//     }
    // post to DB when available
    const submitForm = (e) => {
        e.preventDefault();
    }

    //when all forms are valid submit is no longer disabled
    useEffect(()=>{
        formSchema.isValid(signUp).then(valid => setisDisabled(!valid));
    },[signUp])

    const validateChanges= (e) =>{
        e.persist()
        yup.reach(formSchema,e.target.name).validate(e.target.value)
        .then(valid => setErrors({...errors,[e.target.name]:''}))
        .catch(err => setErrors({...errors,[e.target.name]:err.errors[0]}))
    }

    const formSchema = yup.object().shape({
        username:yup.string().required('Username required'),
        password:yup.string().required('Password Required').min(5,'password too short')
    })

return (
<Card>
    <Form onSubmit={submitForm}>
        <FormGroup>
        <Label htmlFor="username">Username: </Label>
        <Input type="text"
        data-cy="username"
        name = "username"
        id="username"
        placeholder="username"
        value={signUp.username}
        onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
        <Label htmlFor="password">Password: </Label>
        <Input type="text"
        data-cy="password"
        name="password"
        placeholder="password"
        id="password"
        value={signUp.password}
        onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
        <Label>User Type<br/>
            <select id="userType" name="userType" defaultValue="client" onChange={handleChange}>
                <option data-cy="client" value="client">Client</option>
                <option data-cy="instructor" value="instructor">Instructor</option>
            </select>
        </Label>
        </FormGroup>

        <Button type="submit">Sign Up</Button>
    </Form>
</Card>
)
}

export default Register;