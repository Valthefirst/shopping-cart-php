import { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import {
    MDBContainer,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';

export default function SignUp() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validationError, setValidationError] = useState(null); // State for validation message
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
      setValidationError(null); // Clear validation error on password change
    };
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
      setValidationError(null); // Clear validation error on confirm password change
    };

    function addUser(firstName, lastName, emailAddress, password) {

        var userRequestDTO = {
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            password: password
        }

        fetch(`http://localhost:8000/api/ext/setUser`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userRequestDTO)
        })
            .then(async response => {
                const isJson = response
                    .headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                console.log("Data is: " + data.firstName)

                if (response.status == 201) {
                    getAllUsers()
                    successToast("User added successfully")
                }

                //check for error
                if (!response.ok) {
                    const error = (data && data.message) ||
                        response.status;
                        console.log("POST error occured")
                        errorToast("Could not add the user")
                    return Promise.reject(error);
                }
            })
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (password !== confirmPassword) {
        setValidationError('Passwords must match.');
        return; // Prevent form submission if passwords don't match
      }
  
      // Handle successful form submission logic (e.g., send data to server)
      console.log('Form submitted successfully!');
    };

    return (
        <div>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <div className="text-center mb-3">
            <p>Sign up with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='facebook-f' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='twitter' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' href="http://127.0.0.1:8000/auth/google/redirect" color='none' className='m-1' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='google' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='github' size="sm" />
                </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>

        </div>
            <Form>
                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="John"
                        required
                        autoFocus />
                </Form.Group>

                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Doe"
                        required />
                </Form.Group>

                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="john.doe@gmail.com"
                        required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm"
                        required />
                    <Form.Text className="text-muted">
                        Passwords must be matching.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="Submit">
                    Sign up
                </Button>
            </Form>
            </MDBContainer>
        </div>
    )
}