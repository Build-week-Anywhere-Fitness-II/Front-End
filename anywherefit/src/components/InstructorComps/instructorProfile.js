import React from 'react';

import InstructorModal from './instructorModal';
import InstructorClassList from './InstructorClassList';
import EditClass from './InstructorEdit';

const InstructorProfile =(props) => {
    const [update, setUpdate] = React.useState(false);
return (
<div>
    <h1>InstructorProfile Here</h1>
<InstructorModal addClass={props.addClass} setUpdate={setUpdate}/>   {/* props for  post request */}

<InstructorClassList classes={props.classes} update={update}/>

{/* Edit a class */}

</div>
);
}



export default InstructorProfile;
