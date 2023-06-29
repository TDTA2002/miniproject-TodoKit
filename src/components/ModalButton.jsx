import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { addTodo, setFilter } from '../Slices/TodoSlices';
import AnoModal from './AnoModal';
import { Toaster, toast } from 'react-hot-toast';

function Example() {
  const handleClose = () => setShow(false);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      dispatch(addTodo({
        id: Date.now(),
        title: title,
      }));
      setTitle('');
      setShow(false);
    }
    toast.success('Task Added Successfully');

  };


  const handleFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Task
      </Button>
      <AnoModal show={show} handleClose={handleClose} handleSubmit={handleSubmit} handleFilter={handleFilter} setTitle={setTitle} />
      <Toaster />
    </>
  );
}

export default Example;
