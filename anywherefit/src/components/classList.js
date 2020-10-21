import React from 'react';
import { fetchClasses} from '../utils/actions/classAction';
import {connect} from 'react-redux';
import ClassCard from './classCard';
import { Container, Row } from 'reactstrap';
import ClassDetail from './classDetail';
import ClassSearch from './classSearch';


const ClassList = (props) => {
    console.log(props)
React.useEffect(() => {
    props.fetchClasses()
},[]);
    return (
<div>
    <h1>Classes</h1>
    <ClassSearch classes={props.classes}/>
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