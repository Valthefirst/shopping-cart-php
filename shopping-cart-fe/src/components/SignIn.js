import { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import {
    MDBContainer,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';

export default function Login() {

    return (
        <div>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <div className="text-center mb-3">
                    <p>Sign in with:</p>

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

                <div>
                    <Form>
                        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>

                        <Button variant="primary" type="Submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </MDBContainer>
        </div>
    )
}