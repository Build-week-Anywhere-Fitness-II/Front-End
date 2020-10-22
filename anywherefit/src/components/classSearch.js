import React, {useState,useEffect} from 'react'
import ClassList from './classList';
import { Container, FormGroup, Input, Form, Button, Label, Card } from 'reactstrap';
import Fuse from 'fuse.js'
import ClassCard from './classCard'

const ClassSearch = ({data}) => {

    const [query, setQuery] = useState('')
    
    
    const options ={
        isCaseSensitive:false,
        includeMatches:true,
        findAllMatches:true,
        shouldSort:true,
        keys:[
            'class_name',
            'class_date',
            'duration_minutes',
            'intensity_level',
            'type',
            'location'      
    ]
    };

    const fuse = new Fuse(data,options)
    const results = fuse.search(query)
    const classResults = query ? results.map(result=>result.item) : data;
    console.log('fuse',fuse)
    console.log(results)

    function handleOnSearch({ currentTarget = {}}){
        const {value} = currentTarget;
        setQuery(value);
    }


// const [open, setOpen] = React.useState(false);
 return (
  <Container>
       <Form>
        <h1>Search For Your Class!</h1>
        <FormGroup>
        <Label htmlFor="search">Search:</Label>
        <Input    
            type="text"
            id="search"
            name="search"
            value={query}
            onChange={handleOnSearch}
            placeholder="Search for a class"
        />
        </FormGroup>
      </Form>
        <ClassCard data={classResults}/>
  </Container>
  
   )
 }

export default ClassSearch;
