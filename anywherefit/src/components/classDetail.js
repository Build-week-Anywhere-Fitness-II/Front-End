import React from 'react'
import InstructorProfile from './InstructorComps/instructorProfile'
import {Card,CardHeader} from 'reactstrap';
import {connect} from 'react-redux';
import {signUp} from '../utils/actions/classAction';

const ClassDetail = (props) => {

    //console.log(props.classes[0])
    //console.log(props.match)
    const aClass = props.classes.find(c => c.id === +props.match.params.classId)
    //console.log(aClass)

    
    return (
        <div>
           <Card>
              <CardHeader>
                  {aClass.class_name}
              </CardHeader> 
            </Card> 
            
        </div>
    )
}

const mapStateToProps = state =>state 
export default connect(mapStateToProps)(ClassDetail);
