
import React from "react";
import { Card, Form, Input, Label, Button } from "reactstrap";
import {useHistory} from 'react-router-dom';
import axios from "axios";

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
    const submit = async (e) => {
e.preventDefault();
axios
.post('https://pt-anywhere-fitness.herokuapp.com/api/users/login', login)
.then(res => {
console.log(res.data);
window.sessionStorage.setItem('token', res.data.token)
window.sessionStorage.setItem('role', res.data.role)
window.sessionStorage.setItem('user', res.data.id)
history.push(`/user/${res.data.id}`)
})
.catch((err) => console.log(err));

    }


return (
<Card className="form-card">
    <Form onSubmit={submit}>
        <h2 className='form-h2'>Login</h2>
        <Label for="username">Username: </Label>
        <Input type="text"
        name = "username"
        placeholder="username"
        value={login.username}
        onChange={handleChange}/>
        <Label for="password">Password:</Label>
        <Input type="text"
        name="password"
        placeholder="password"
        value={login.password}
        onChange={handleChange}/>
        <Button className="form-submit">Login</Button>
    </Form>
</Card>
)
}

export default Login;