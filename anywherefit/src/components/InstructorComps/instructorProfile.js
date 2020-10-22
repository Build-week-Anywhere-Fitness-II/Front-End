import React from 'react';

import InstructorModal from './instructorModal';
import InstructorClassList from './InstructorClassList';
import EditClass from './InstructorEdit';

const InstructorProfile =(props) => {

return (
<div>
    <h1>InstructorProfile Here</h1>
<InstructorModal addClass={props.addClass}/>   {/* props for  post request */}

<InstructorClassList classes={props.classes} />

{/* Edit a class */}

</div>
);
}



export default InstructorProfile;
