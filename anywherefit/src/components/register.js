import React, {useState,useEffect} from "react";
import { Card, Form, Input, Label, Button, FormGroup, CardTitle } from "reactstrap";
import * as yup from 'yup';
import axios from "axios";
import {useHistory} from 'react-router-dom';
import './styles/registerLogin.css';

const Register = () => {
    
    const [signUp, setSignUp] = React.useState({
        name:'',
        username:'',
        password:'',
        role: "",
        //role has to be string for api
        /*{
            instructor:false,
            client:false 
        }*/
    });

    // state disabled for button
    const [isDisabled,setisDisabled] = useState(true);

    //set errors array to log errors
    const [errors,setErrors] = useState({
        name:"",
        password:"",
        role:""
    })
    
//state for server side errors
const [serverError, setServerError] = useState('');


    // change the value of the field to equal user input
    const handleChange = (e) => {
        setSignUp({
            ...signUp,
            [e.target.name]:e.target.value
        })
        // validateChanges(e)
    }

//     const handleChecked = (e) => {
// setSignUp({
//     ...signUp,
//     [e.target.name]:e.target.checked
// })
//     }
    // post to DB when available

const history = useHistory();

    const submitForm = (e) => {
        e.preventDefault();
        console.log(signUp);
        axios
        .post("https://pt-anywhere-fitness.herokuapp.com/api/users/register", signUp)
        .then((res) => {
            console.log("returned data from post", res.data);
            history.push('/login');
        })
        .catch((err) => {
            console.log(err);
        })
    }

    //when all forms are valid submit is no longer disabled


    // useEffect(()=>{
    //     formSchema.isValid(signUp).then(valid => setisDisabled(!valid));
    // },[signUp])

    // const validateChanges= (e) =>{
    //     e.persist()
    //     yup.reach(formSchema,e.target.name).validate(e.target.value)
    //     .then(valid => setErrors({...errors,[e.target.name]:''}))
    //     .catch(err => setErrors({...errors,[e.target.name]:err.errors[0]}))
    // }

    // const formSchema = yup.object().shape({
    //     username:yup.string().required('Username required'),
    //     password:yup.string().required('Password Required').min(5,'password too short'),
    //     role:yup.string()
        
    // })

return (
<Card className="form-card">
    <h2 className="form-h2">Get Started</h2>
    <Form onSubmit={submitForm}>
        <FormGroup>
            <Label for="fullName">Full Name: </Label>
            <Input type="text"
        data-cy="fullName"
        name = "name"
        id="fullName"
        placeholder="Full Name"
        value={signUp.name}
        onChange={handleChange}/>
        </FormGroup>
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
        <Input type="password"
        data-cy="password"
        name="password"
        placeholder="password"
        id="password"
        value={signUp.password}
        onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
        <Label>User Type<br/>
            <select id="role" name="role" defaultValue="client" data-cy="role" onChange={handleChange} value={signUp.role}>
                <option value=''>Select</option>
                <option >Client</option>
                <option >Instructor</option>
            </select>
        </Label>
        </FormGroup>

        <Button className="form-submit" type="submit" data-cy="submit">Sign Up</Button>
    </Form>
</Card>
)
}

export default Register;