import React from 'react';
import ClientProfile from './clientProfile';
import InstructorProfile from './instructorProfile';

const UserProfile =() => {
    const role = window.localStorage.getItem('role')
    console.log(role);
return (
<div>
    {role === 'Client' ? <ClientProfile/> : <InstructorProfile/>}
</div>
);
}

export default UserProfile;