// React Basic and Bootstrap
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Label, FormGroup, Button, Card, CardBody } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

//Import Icons
import FeatherIcon from 'feather-icons-react';

// import images
import signup from '../assets/imgs/signup.svg';

// redux
import { connect } from 'react-redux';
import { authUser } from '../store/actions/auth';

const SignUp = ({ authUser }) => {

    const [] = useState()
        const handleSubmit = (evt) => {
            evt.preventDefault();
            console.log(evt);
        }

        const handleChange = (evt) => {

        }

        return (
            <React.Fragment>
                <div className="back-to-home rounded d-none d-sm-block">
                    <Link to="/" className="btn btn-icon btn-soft-primary"><i><FeatherIcon icon="home" className="icons" /></i></Link>
                </div>
                <section className="bg-home d-flex align-items-center">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg="7" md="6">
                                <div className="mr-lg-5">   
                                    <img src={signup} className="img-fluid d-block mx-auto" alt=""/>
                                </div>
                            </Col>
                            <Col lg="5" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <Card className="login_page shadow rounded border-0">
                                    <CardBody>
                                        <h4 className="card-title text-center">Signup</h4>  
                                    <AvForm className="login-form mt-4" onSubmit={handleSubmit}>
                                        <Row>
                                        <Col md="6">
                                                <FormGroup className="position-relative">
                                                    <Label htmlFor="firstname">First name <span className="text-danger">*</span></Label>
                                                    <i><FeatherIcon icon="user" className="fea icon-sm icons" /></i>
                                                    <AvField type="text" className="form-control pl-5" name="firstname" id="firstname" placeholder="First Name" required
                                                        errorMessage=""
                                                        validate={{
                                                            required: {value: true, errorMessage: "Please enter first name"},
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup className="position-relative">
                                                    <Label htmlFor="lastname">Last name <span className="text-danger">*</span></Label>
                                                    <i><FeatherIcon icon="user-check" className="fea icon-sm icons" /></i>
                                                    <AvField type="text" className="form-control pl-5" name="lastname" id="lastname" placeholder="Last Name" required
                                                        errorMessage=""
                                                        validate={{
                                                            required: {value: true, errorMessage: "Please enter first name"},
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="12">
                                                <FormGroup className="position-relative">
                                                    <Label htmlFor="email">Your Email <span className="text-danger">*</span></Label>
                                                    <i><FeatherIcon icon="mail" className="fea icon-sm icons" /></i>
                                                    <AvField type="text" className="form-control pl-5" name="email" id="email" placeholder="Enter Email" required
                                                        errorMessage=""
                                                        validate={{
                                                            required: {value: true, errorMessage: "Please enter your email"},
                                                            pattern: {value: '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$', errorMessage: 'E-Mail is not valid!'},
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col md="12">
                                                <FormGroup className="position-relative">
                                                    <Label htmlFor="password">Password<span className="text-danger">*</span></Label>
                                                    <i><FeatherIcon icon="lock" className="fea icon-sm icons" /></i>
                                                    <AvField type="password" className="form-control pl-5" name="password" id="password" placeholder="Enter password" required
                                                        errorMessage=""
                                                        validate={{
                                                            required: {value: true, errorMessage: "Please enter Password"},
                                                            minLength: {value: 6, errorMessage: 'Your password must be between 6 and 8 characters'},
                                                            maxLength: {value: 16, errorMessage: 'Your password must be between 6 and 8 characters'}
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col md="12">
                                                <FormGroup className="position-relative">
                                                    <Label htmlFor="confirmpassword">Confirm Password<span className="text-danger">*</span></Label>
                                                    <i><FeatherIcon icon="lock" className="fea icon-sm icons" /></i>
                                                    <AvField type="password" className="form-control pl-5" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" required
                                                        errorMessage=""
                                                        validate={{
                                                            required: {value: true, errorMessage: "Please enter Password"},
                                                            minLength: {value: 6, errorMessage: 'Your password must be between 6 and 16 characters'},
                                                            maxLength: {value: 16, errorMessage: 'Your password must be between 6 and 16 characters'}
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col md="12" className="mb-0">
                                                <Button color="primary" block type='submit'>Register</Button>
                                            </Col>
                                            <Col xs="12" className="text-center">
                                                <p className="mb-0 mt-3"><small className="text-dark mr-2">Already have an account ?</small> <Link to="/login" className="text-dark font-weight-bold">Login</Link></p>
                                            </Col>
                                        </Row>
                                    </AvForm>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }


const mapDispatchToProps = dispatch => ({
    authUser: (type, userData) => dispatch(authUser(type, userData))
})
export default connect(null, mapDispatchToProps)(SignUp);