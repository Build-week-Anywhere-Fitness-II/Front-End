import React, {useState,useEffect} from 'react';
import Class from './class'
import axios from 'axios';


const ClassList = () => {
    const [classList, setClassList] = useState();

    const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNycHRlc3RpbnN0cnVjdG9yIiwicm9sZSI6Imluc3RydWN0b3IiLCJpYXQiOjE2MDI5MDc1NTE0NjEsImV4cCI6MTYwMjkwNzYzNzg2MX0.UnwHcKm9P3AUiS5lVcYlAPeM-7NuZYHyDZ6ChEe3FiI'; 

    useEffect(()=>{
        axios.get("https://pt-anywhere-fitness.herokuapp.com/api/classes", {headers:{
            'authorization':`Bearer ${header}`
        }})
        .then((resp) =>{
              console.log(resp.data)
        })
    }, [classList])
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    {classList}
                </div>
            </div>
        </div>
    )
}

export default ClassList;
