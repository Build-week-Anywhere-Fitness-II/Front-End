import React, {useState, useEffect} from 'react';
import { Container, FormGroup, Input, Form, Button } from 'reactstrap';
import {fetchClasses} from '../../utils/actions/classAction';
import {connect} from 'react-redux';

const EditClass = (props) => {

    useEffect(() => {
        props.fetchClasses()
    },[]);

    console.log( "edit props",props);

    return (
        <Container>
        <Form>
            <FormGroup>
                <Input type="text"
                name="class_name"
                placeholder="Class Name"

                />
            </FormGroup>
            <FormGroup>
                <Input type="text"
                name="type"
                placeholder="Class Type"

                />
            </FormGroup>
            <FormGroup className="location">
                <h2>Meeting Location</h2>
                <Input type="text"
                name="street_address"
                placeholder="Street Address"

                />
                <Input type="text"
                name="city"
                placeholder="City"

                />
                <Input type="text"
                name="state"
                placeholder="State"

                />
                <Input type="text"
                name="zip_code"
                placeholder="Zip Code"

                />
            </FormGroup>
            <FormGroup>
                <h2>Date & Time</h2>
        <Input
          type="date"
          name="date"
          id="date"
          placeholder="date placeholder"

        />
        <Input
          type="time"
          name="time"
          id="exampleTime"
          placeholder="time placeholder"

        />
      </FormGroup>
      <h2>Work Out Information</h2>
            <FormGroup >
                <Input type="number"
                name="hours"
                min="0"
                max="4"

                />
                <Input type="number"
                name="mins"
                placeholder="Mins"
                min="0"
                max="45"
                step="15"

/>
            </FormGroup>
            <FormGroup>
                <Input type="number"
                name="intensity_level"
                min="1"
                max='10'

/>
            </FormGroup>

            <FormGroup>
                <Input type="number"
                name="max_class_size"

                />
            </FormGroup>
            <Button>Edit Class</Button>
            <Button>Delete Class</Button>
        </Form>
        </Container>
    );
};

const mapStateToProps = state => {
    return state
    }
    export default connect(mapStateToProps, {fetchClasses})(EditClass);