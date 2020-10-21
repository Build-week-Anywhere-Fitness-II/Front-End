import React, {useState,useEffect} from 'react'
import ClassList from './classList';


 const ClassSearch = (props) => {
     console.log('Search props',props.classes);
//     const [searchTerm,setSearchTerm] = useState("");
//     const [searchResults,setSearchResults] = useState(testData)

//     useEffect(()=>{
//         const results = testData.filter((item)=>{
//             return item.className.toLowerCase().includes(searchTerm.toLowerCase())
//         })
//         setSearchResults(results);
//     },[searchTerm])

//     const handleChange = (e) =>{
//         setSearchTerm(e.target.value)
//     }
 return (
  <div>
{/* //             <form>
//                 <label htmlFor="className">Search:</label>
//                 <input 
//                     id="className"
//                     type="text"
//                     name="className"
//                     data-cy="className"
//                     placeHolder="Search"
//                     onChange={handleChange}
//                     value={searchTerm}
//                 />
//             </form>
//             <ClassList data={searchResults}/> */}
      </div>
   )
 }

 export default ClassSearch
