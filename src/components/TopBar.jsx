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
                <div id='topnav' >
                    <Container>
                        <div>
                            <Link className='logo' to='/index'><h2>CapitalGainTaxCalculator</h2></Link>
                        </div>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Topbar);