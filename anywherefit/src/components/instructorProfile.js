import React,{useState} from 'react';

const InstructorProfile =() => {
    const [classForm,setClassForm] = useState({
        class_name:"",
        type:"",
        class_time:"",
        duration_minutes:null,
        intensity_level:null,
        location:"",
        attendees:null,
        max_class_size:null
    })

return (
<div>
    <h1>InstructorProfile Here</h1>
    <form>
        <label htmlFor="class_name"> Class Name<br/>
            <input type="text" name="class_name" id="class_name" data-cy="class_name" placeholder="Enter Your Class Name"
        />
        </label><br/>
        <label htmlFor="type">Workout Type<br/>
            <select id="type" name="type" data-cy="type">
                <option value=''>Choose Your Workout Type</option>
                <option value="strength">Strength</option>
                <option value="endurance">Endurance</option>
                <option value="calisthenics">Calisthenics</option>
                <option value="hotYoga">Hot Yoga</option>
            </select>
        </label><br/>
        <label htmlFor="class_time">Select Your Class Time<br/>
            <input type="time" id="class_time" name="class_time" data-cy="class_time"
            />
        </label><br/>
        <label htmlFor="duration_minutes">Class Length(in mins)<br/>
            <input type="number" id="duration_minutes" name="duration_minutes" data-cy="duration_minutes" placeholder="10" min="10" max="90"
            />
        </label><br/>
        <label htmlFor="intensity_level">Intensity Level<br/>
            <input type="number" id="intensity_level" name="intensity_level" data-cy="intensity_level" placeholder="1" min="1" max="10"
            />
        </label><br/>
        <label htmlFor="location">Class Location<br/>
            <input type="text" id="location" name="location" data-cy="location"
            />
        </label><br/>
        <label htmlFor="attendees">Number of Attendees<br/>
            <input type="number" id="attendees" name="attendees" data-cy="attendees" placeholder="5"
            />
        </label><br/>
        <label htmlFor="max_class_size">Max Class Size<br/>
            <input type="number" id="max_class_size" name="max_class_size" data-cy="max_class_size"
            />
        </label><br/>
    </form>
</div>
);
}

export default InstructorProfile;