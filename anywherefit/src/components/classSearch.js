// import React, {useState,useEffect} from 'react'
// import ClassList from './classList';



// const ClassSearch = () => {
//     const [searchTerm,setSearchTerm] = useState("");

//     const [searchResults,setSearchResults] = useState("")


//     // useEffect(()=>{
//     //     const results = classList.filter((item)=>{
//     //         return item.className.toLowerCase().includes(searchTerm.toLowerCase())
//     //     })
//     //     setSearchResults(results);
//     // },[])

//     const handleChange = (e) =>{
//         setSearchTerm(e.target.value)
//     }
//     return (
//         <div>
//             <form>
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
//         </div>
//     )
// }

// export default ClassSearch
