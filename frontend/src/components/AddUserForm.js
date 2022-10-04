import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddUserForm  = ({setName, setAge, setUsername, createUser}) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" onChange={(event) => { setName(event.target.value); }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter age" onChange={(event) => { setAge(event.target.value); }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={(event) => { setUsername(event.target.value); }} />
            </Form.Group>
            <Button variant="primary" onClick={createUser}>
                Add User
            </Button>
        </Form>
    );
}

export default AddUserForm;
