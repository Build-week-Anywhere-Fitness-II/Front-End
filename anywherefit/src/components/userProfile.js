import React from 'react';
import ClientProfile from './clientProfile';
import InstructorProfile from './instructorProfile';
import {Auth} from '../utils/axiosAuth'

const UserProfile =() => {
    const role = window.sessionStorage.getItem('role')


return (
<div>
    {role === 'Client' ? <ClientProfile/> : <InstructorProfile/>}
</div>
);
}

export default UserProfile;