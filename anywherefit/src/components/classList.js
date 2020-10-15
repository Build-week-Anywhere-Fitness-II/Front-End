import React from 'react';
import Class from './class'

const testData = [{
    classId:1,
    className:'firstClass'
},
{
    classId:2,
    className:'firstClass'
},
{
    classId:3,
    className:'firstClass'
},
{
    classId:4,
    className:'firstClass'
},
{
    classId:5,
    className:'firstClass'
}
]

const ClassList = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    {testData.map((item,index)=>{
                        return <Class key={item.classId} class={item}/>
                })}
                </div>
            </div>
        </div>
    )
}

export default ClassList;
