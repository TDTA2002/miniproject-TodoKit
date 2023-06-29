import Form from 'react-bootstrap/Form';

function SelectBasicExample() {
  return (
    <Form.Select>
      <option value="All">All</option>
      <option value="Incomplete">Incomplete</option>
      <option value="Complete">Complete</option>
    </Form.Select>
  );
}

export default SelectBasicExample;