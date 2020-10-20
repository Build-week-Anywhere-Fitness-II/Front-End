import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from  'reactstrap';
import InstructorAddClass from './instructorAddClass';
const InstructorModal = (props) => {

    // open/close state of Modal
    const [open, setOpen] = React.useState(false);

   //toggle function
    const toggle = () => setOpen(!open);
    return (
<div>
    <Button onClick={toggle}>Add Class</Button>
    <Modal isOpen={open} toggle={toggle}>
        <ModalHeader toggle={toggle}>Fill Out All Fields</ModalHeader>
        <ModalBody>
<InstructorAddClass addClass={props.addClass} /> {/* passing props for post request */}
        </ModalBody>
        <ModalFooter>
<Button>Cancel</Button>
        </ModalFooter>
    </Modal>
</div>
    );
}

export default InstructorModal;