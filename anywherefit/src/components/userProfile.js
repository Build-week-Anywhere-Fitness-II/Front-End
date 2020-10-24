import React from 'react';
import ClientProfile from './clientProfile';
import InstructorProfile from './InstructorComps/instructorProfile';
import {connect} from 'react-redux';
import {addClass} from '../utils/actions/classAction';
import { fetchClasses} from '../utils/actions/classAction';

const UserProfile =(props) => {
    const [update, setUpdate] = React.useState(false);
    const role = window.sessionStorage.getItem('role')
    React.useEffect(() => {
        props.fetchClasses()
    },[update]);
return (
<div>
    {role === 'client' ? <ClientProfile/> : <InstructorProfile classes={props.classes} addClass={props.addClass} setUpdate={setUpdate}/>}
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
