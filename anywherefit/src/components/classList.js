import React, {useState} from 'react';
import { fetchClasses} from '../utils/actions/classAction';
import {connect} from 'react-redux';
import ClassCard from './classCard';
import { Container, Row } from 'reactstrap';
import ClassDetail from './classDetail';
import ClassSearch from './classSearch';


const ClassList = (props) => {
    console.log(props.classes)

    React.useEffect(() => {
        props.fetchClasses()
        setnewList(props.classes)
    },[]);

    const [newList, setnewList] = useState([])

    console.log(newList)
    
    return (
<div>
    <h1>Classes</h1>
    <ClassSearch />
    <Container>
        <Row>
    {props.classes.map((classes) => (
            <ClassCard class={classes} key={classes.id}/>
        ))}
        
    </Row>
    </Container>
</div>
    )
}

const mapStateToProps = (state) => {
return {
classes: state.classes,
isFetching: state.isFetching,
error: state.error,
};
}

export default connect(mapStateToProps, {fetchClasses})(ClassList);

