import React from 'react';
import ClientProfile from './clientProfile';
import InstructorProfile from './InstructorComps/instructorProfile';
import {connect} from 'react-redux';
import {addClass} from '../utils/actions/classAction';
import { fetchClasses} from '../utils/actions/classAction';

const UserProfile =(props) => {
    const role = window.sessionStorage.getItem('role')
    React.useEffect(() => {
        props.fetchClasses()
    },[]);
return (
<div>
    {role === 'client' ? <ClientProfile/> : <InstructorProfile classes={props.classes} addClass={props.addClass}/>}
</div>
);
}

const mapStateToProps = (state) => {
    return {
    classes: state.classes,
    isFetching: state.isFetching,
    error: state.error,
    };
    }

export default  connect(mapStateToProps, {addClass, fetchClasses})(UserProfile);
