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
                    <div>
                        <div>
                            <Link className='logo' to='/'>
                                Logo
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Topbar);