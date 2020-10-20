import React from 'react';
import { fetchClasses} from '../utils/actions/classAction';
import {connect} from 'react-redux';
import ClassCard from './classCard';
import { Container, Row } from 'reactstrap';


const ClassList = (props) => {
React.useEffect(() => {
    props.fetchClasses()
},[]);
    return (
<div>
    <h1>Classes</h1>
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
