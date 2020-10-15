
import React from "react";
import { Card, Form, Input, Label, Button } from "reactstrap";
import {useHistory} from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = React.useState({
        username:'',
        password:''
    });

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]:e.target.value
        })
    }
const history = useHistory();
    const submit =(e) => {
e.preventDefault();
history.push("/user")
    }
return (
<Card>
    <Form onSubmit={submit}>
        <Label for="username"/>
        <Input type="text"
        name = "username"
        placeholder="username"
        value={login.username}
        onChange={handleChange}/>
        <Label for="password"/>
        <Input type="text"
        name="password"
        placeholder="password"
        value={login.password}
        onChange={handleChange}/>
        <Button>Login</Button>
    </Form>
</Card>
)
}

export default Login;