import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';



export default function AnoModal({ show, handleClose, setTitle, handleSubmit }) {
    

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <label htmlFor="taskStatus">Status</label><br />
                        <select
                            name="taskStatus"
                            id="taskStatus"
                            className='status'
                        >
                            <option value="incomplete">Incomplete</option>
                            <option value="complete">Complete</option>
                        </select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit}>
                    Add Task
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
