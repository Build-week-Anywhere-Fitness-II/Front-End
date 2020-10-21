import React, {useState,useEffect} from 'react'
import ClassList from './classList';


const ClassSearch = (props) => {
  const [searchResults,setSearchResults] = useState('')
// //     useEffect(()=>{
// //         const results = testData.filter((item)=>{
// //             return item.className.toLowerCase().includes(searchTerm.toLowerCase())
// //         })
// //         setSearchResults(results);
// //     },[searchTerm])

// //     const handleChange = (e) =>{
// //         setSearchTerm(e.target.value)
// //     }
 return (
  <div>
      <form>
        <label htmlFor="class_name">Search:</label>
        <input 
            id="class_name"
            type="text"
            name="class_name"
            data-cy="class_name"
            placeholder="Search"
        />
      </form>
  </div>
   )
 }

export default ClassSearch;
