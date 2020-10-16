import React from 'react';
import Class from './class'
import ClassSearch from './classSearch';

const ClassList = (props) => {
    console.log(props.data)
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    {props.data.map((item,index)=>{
                        return <Class key={item.classId} class={item}/>
                })}
                </div>
            </div>
        </div>
    )
}

export default ClassList;
