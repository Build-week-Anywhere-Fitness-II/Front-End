import React from 'react'
import {Card,CardTitle,CardText, Form, Button, CardSubtitle} from 'reactstrap';
import {connect} from 'react-redux';

import { fetchClasses} from '../utils/actions/classAction';
import { Auth } from '../utils/axiosAuth';
import { useHistory } from 'react-router-dom';
import ProductWrapper from './ProductWrapper';
import ButtonContainer from './ButtonContainer'

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
        <ProductWrapper>
                           {exactClass ? 
                           
           <Card>
               <ButtonContainer style={{width:'20%'}} onClick={()=>history.push('/classes')}>Return to Class List</ButtonContainer>
               <CardTitle>
                   <h3>{exactClass.class_name}</h3>
               </CardTitle>

               <CardText>
                   {`${exactClass.class_name} will be held at ${exactClass.location} on ${exactClass.class_time}. Due to COVID-19 the class will be restricted to ${exactClass.max_class_size}. The class will mainly focus on ${exactClass.type} exercises and the class will last approximately ${exactClass.duration_minutes}.`}

                   {`There are ${exactClass.attendees} users currently signed-up.`}
               </CardText>
               <Form onSubmit={submit}>
               <ButtonContainer>signUp</ButtonContainer>
               </Form>
               </Card> 
               :
               <h1>Loading</h1>
            
               }
        </ProductWrapper>
    )
}

const mapStateToProps = state => {
return state
}
export default connect(mapStateToProps,{fetchClasses})(ClassDetail);
