import React from 'react'
import {Card,CardHeader, Form, Button} from 'reactstrap';
import {connect} from 'react-redux';

import { fetchClasses} from '../utils/actions/classAction';
import { Auth } from '../utils/axiosAuth';
import { useHistory } from 'react-router-dom';

const ClassDetail = (props) => {
    const stringId = window.sessionStorage.getItem('user')
    const numId= Number(stringId);
    React.useEffect(() => {
        props.fetchClasses()
    },[]);
    console.log(props)
    
    
    const exactClass = props.classes.find(e => e.id === +props.match.params.classId)

 const signUpInfo = {
    client_id:numId,
 class_id: (exactClass ? exactClass.id : 0),

 }
 const history = useHistory();
 const submit = (e) => {
     Auth()
    .post('api/classes/signup', signUpInfo)
    .then((res) => {
  console.log("sign up success", res.data);

    })
    history.push(`/user/${numId}`)
     }
console.log('sign up info', signUpInfo)
    console.log('exact Class',exactClass);
    return (
        <div>
                           {exactClass ? 
           <Card>
               <CardHeader>
                   {exactClass.class_name}
               </CardHeader>
               <Form onSubmit={submit}>
               <Button>signUp</Button>
               </Form>
               </Card> 
               :
               <h1>Loading</h1>
            
               }
        </div>
    )
}

const mapStateToProps = state => {
return state
}
export default connect(mapStateToProps,{fetchClasses})(ClassDetail);
