import React, {useState,useEffect} from 'react'
import { date } from 'yup'

const ClassDetail = (props) => {
    const [classForm,setClassForm] = useState({
        class_name:"",
        type:"",
        class_time:"",
        duration_minutes:1,
        intensity_level:1,
        location:"",
        attendees:0,
        max_class_size:0,
    })

    return (
        <div>
            Details of class
            <form>

            </form>
        </div>
    )
}

export default ClassDetail
