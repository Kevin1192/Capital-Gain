import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Container } from 'reactstrap';

class Topbar extends Component {
    constructor(props) {
    super(props);
    };


    render() {
        return (
            <React.Fragment>
                <header id='topnav' className='defaultscroll'>
                    <Container >
                        <div>
                            <Link className='logo' to='/index'><div>CapitalGainTaxCalculator</div></Link>
                        </div>
                        <div className='auth'>
                             <Link to='/login' className='btn btn-primary btn-pills'>Login</Link> 
                             <Link to='/signup' className='btn btn-primary btn-pills'>Signup</Link> 
                        </div>
                    </Container>
                </header>
            </React.Fragment>
        )
    }
}

export default withRouter(Topbar);