import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../Slices/TodoSlices';
import { Modal, Button, Form } from 'react-bootstrap';
import { Toaster, toast } from 'react-hot-toast';


const Todo = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const [editingTodo, setEditingTodo] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [taskStatus, setTaskStatus] = useState('incomplete');

    const handleDelete = (id) => {
        dispatch(removeTodo(id));
        toast.success('Todo Delete Successfully');

    };

    const handleUpdate = (id, title, status) => {
        setEditingTodo({ id, title, status });
        setTaskStatus(status);
        setShowModal(true);

    };

    const handleCancel = () => {
        setEditingTodo(null);
        setShowModal(false);
    };

    const handleSave = () => {
        if (editingTodo) {
            dispatch(
                updateTodo({
                    id: editingTodo.id,
                    title: editingTodo.title,
                    status: taskStatus
                })
            );
            setEditingTodo(null);
            setShowModal(false);
        }
        toast.success('Todo Update Successfully');
    };

    return (
        <div>
            <div className='appcontent'>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ display: "flex", justifyContent: "space-between" }} className='renderm'>
                        <div style={{ display: "flex" }}>
                            <input
                                type="checkbox"
                                onChange={(event) => {
                                    const divElement = event.target.nextSibling;
                                    divElement.classList.toggle("strikethrough", event.target.checked);
                                }}
                            />
                            <div>{todo.title}</div>
                        </div>
                        <div>
                            <button onClick={() => handleDelete(todo.id)}>
                                <span className="material-symbols-outlined">delete</span>
                            </button>{' '}
                            <button onClick={() => handleUpdate(todo.id, todo.title, todo.status)}>
                                <span className="material-symbols-outlined">edit</span>
                            </button>
                        </div>

                    </li>
                ))}
            </div>

            {
                showModal && (
                    <Modal show={showModal} onHide={handleCancel}>
                        <Modal.Header closeButton>
                            <Modal.Title>Update Task</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={editingTodo ? editingTodo.title : ''}
                                        onChange={(e) =>
                                            setEditingTodo({ ...editingTodo, title: e.target.value })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <label htmlFor="taskStatus">Status</label><br />
                                    <select
                                        name="taskStatus"
                                        id="taskStatus"
                                        className='status'
                                        value={taskStatus}
                                        onChange={(e) => setTaskStatus(e.target.value)}
                                    >
                                        <option value="incomplete">Incomplete</option>
                                        <option value="complete">Complete</option>
                                    </select>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleSave}>
                                Update Task
                            </Button>
                            <Button variant="secondary" onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                        <Toaster />
                    </Modal>
                )
            }
        </div >
    );
};

export default Todo;
