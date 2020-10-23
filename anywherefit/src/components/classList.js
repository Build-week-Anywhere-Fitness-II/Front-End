import React from 'react';
import ClassCard from './classCard';

import ClassSearch from './classSearch';
import {Auth} from '../utils/axiosAuth';


const ClassList = () => {
const [data, setData] = React.useState([]);
const [search, setSearch] = React.useState('');

 React.useEffect(() => {
Auth()
.get('api/classes')
.then((res) => {
console.log(res.data)
const initialArray = res.data;
// const filteredArray = initialArray.filter((e) => {
//     return e.class_name.toLowerCase().includes(search.toLowerCase());
// });
setData(initialArray);
})
 }, [search])
console.log(data);
    
    return (
<div>
    <ClassSearch data={data}/>
    {/* <ClassCard data={data}/> */}
</div>
    )
}


export default ClassList;

