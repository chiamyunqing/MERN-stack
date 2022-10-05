import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Axios from "axios";

const AddUserForm  = ({setAddedUser}) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [username, setUsername] = useState("");

    const addUser = () => {
        Axios.post("http://localhost:5000/addUser", {
            name,
            age,
            username,
        }).then((response) => {
            setAddedUser({ name, age, username });
            clearForm();
        });
    };

    const clearForm = () => {
        setAge("");
        setName("");
        setUsername("");
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} type="text" placeholder="Enter name" onChange={(event) => { setName(event.target.value); }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control value={age} type="number" placeholder="Enter age" onChange={(event) => { setAge(event.target.value); }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control value={username} type="text" placeholder="Enter username" onChange={(event) => { setUsername(event.target.value); }} />
            </Form.Group>
            <Button variant="primary" onClick={addUser}>
                Add User
            </Button>
        </Form>
    );
}

export default AddUserForm;
