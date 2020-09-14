import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Container } from 'reactstrap';

class Topbar extends Component {
    constructor(props) {
    super(props);
    this.state = {
        isOpen : false,
    }
    };

    toggleLine() {
        this.setState(preState => ({ isOpen: !preState.isOpen }))
    }


    render() {
        return (
            <React.Fragment>
                <header id='topnav' className='defaultscroll'>
                    <Container >
                        <div>
                            <Link className='logo' to='/'><div>CapitalGainTaxCalculator</div></Link>
                        </div>
                        <div>
                            <a href="#home">Home</a>
                        </div>
                        <div className="menu-extras">
                            <div className="menu-item">
                                <Link to="#" onClick= { this.toggleLine } className={ this.state.isOpen ? "navbar-toggle open" : "navbar-toggle"} >
                                    <div className="lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </Link>
                            </div>
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