import React, {useState,useEffect} from 'react'
import ClassList from './classList';
import { Container, FormGroup, Input, Form, Button, Label } from 'reactstrap';


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
// //     
const [open, setOpen] = React.useState(false);
const toggle = () => setOpen(!open);
 return (
  <Container>
      <Form isOpen={open} toggle={toggle}>
        <h1>Search For Your Class!</h1>
        <FormGroup isOpen={open} toggle={toggle}>
        <Label htmlFor="class_name">Class Name:</Label>
        <Input 
            id="class_name"
            type="text"
            name="class_name"
            data-cy="class_name"
        />
        <Label htmlFor="class_date">Class Date:</Label>
        <Input 
            id="class_date"
            type="date"
            name="class_date"
            data-cy="class_date"
        />
        <Label htmlFor="class_duration">Class Duration:</Label>
        <Input 
            id="class_duration"
            type="number"
            name="class_duration"
            data-cy="class_duration"
        />
        <Label htmlFor="type">Class Type:</Label>
        <Input 
            id="type"
            type="text"
            name="type"
            data-cy="type"
        />
        <Label htmlFor="intensity_level">Intensity Level:</Label>
        <Input 
            id="intensity_level"
            type="number"
            name="intensity_level"
            data-cy="intensity_level"
        />
        <Label htmlFor="location">Location</Label>
        <Input 
            id="location"
            type="text"
            name="location"
            data-cy="location"
        />
        </FormGroup>
        <Button onClick={toggle}>Open Search</Button>
      </Form>
  </Container>
   )
 }

export default ClassSearch;
