import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Label, FormGroup, Button, Card, CardBody } from 'reactstrap';

import { AvForm, AvField } from 'availity-reactstrap-validation';
import FeatherIcon from 'feather-icons-react';
import loginImg from '../assets/imgs/login.svg';
function Login() {


    return(
        <Fragment>
                <div className="back-to-home rounded d-none d-sm-block">
                    <Link to="/" className="btn btn-icon btn-soft-primary"><i><FeatherIcon icon="home" className="icons" /></i></Link>
                </div>

                <section className='bg-home d-flex align-items-center'>
                    <Container>
                        <Row className='align-items-center'>
                            <Col lg='7' md='6'>
                                <div className='mr-lg-5'>
                                    <img src={loginImg} className="img-fluid d-block mx-auto" alt="login image" />
                                </div>
                            </Col>
                            <Col lg='5' md='6' className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <Card className="login-page bg-white shadow rounded border-0">
                                    <CardBody>
                                        <div className="card-title text-center">
                                            <h4 className="mb-4">Login</h4>
                                        </div>
                                        <AvForm className='login-form mt-4'>
                                            <Row>
                                                <Col lg='12'>
                                                    <FormGroup className="position-relative">
                                                        <Label htmlFor="email">Your Email <span className="text-danger">*</span></Label>
                                                        <i><FeatherIcon icon='mail' className='fea icon-sm icons' /></i>
                                                        <AvField type='text' className='form-control pl-5' name='email' id='email' placeholder='Enter Your Email Address' required
                                                        errorMessage=""
                                                        validate={{
                                                            required: {value: true, errorMessage: "Please enter your email"},
                                                            pattern: {value: '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$', errorMessage: "Email is not valid" },
                                                        }} />
                                                    </FormGroup>
                                                </Col>

                                                <Col lg='12'>
                                                    <FormGroup className='position-relative'>
                                                        <Label htmlFor='password'>Password <span className='text-danger'>*</span></Label>
                                                        <i><FeatherIcon icon='lock' className='fea icon-sm icons' /></i>
                                                        <AvField type='password' className='form-control pl-5' name='password' id='password' placeholder='Enter password' required
                                                        errorMessage=''
                                                        validate={{
                                                            required: {value: true, errorMessage: 'Please enter password'},
                                                            minLength: { value: 6, errorMessage: "Your password must be between 6 and 16 characters"},
                                                            maxLength: {value: 16, errorMessage: "You password must be between 6 and 16 characters"}
                                                        }} />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg='12'>
                                                    <Button color='primary' block>Sign in</Button>
                                                </Col>
                                                <Col xs='12'>
                                                    <p className="mb-0 mt-3"><small className='text-dark mr-2'>Don't have an account ?</small> <Link to='/signup' className='text-dark font-weight-bold'>Sign Up</Link></p>
                                                </Col>
                                            </Row>
                                        </AvForm>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
        </Fragment>
    )
}


export default Login;