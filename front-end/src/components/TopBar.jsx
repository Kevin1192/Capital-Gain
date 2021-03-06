import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';

class Topbar extends Component {
    constructor(props) {
    super(props);
    this.state = {
        isOpen : false,
        navItems : [
            { id: 1, idnm: "home", navheading: "HOME" },
            { id: 2, idnm: "cases", navheading: "CASES" },
            { id: 3, idnm: "calculator", navheading: "CALCULATOR" },
        ]
    }
    this.toggleLine = this.toggleLine.bind(this);
    };

    toggleLine() {
        this.setState(preState => ({ isOpen: !preState.isOpen }))
    }

    
    render() {
      const { currentUser, logout } = this.props;
        return (
          <React.Fragment>
            <header id="topnav" className="defaultscroll">
              <Container>
                <div>
                  <Link className="logo" to="/">
                    <div>CapitalGainTaxCalculator</div>
                  </Link>
                </div>
                <div
                  id="navigation"
                  style={{ display: this.state.isOpen ? "block" : "none" }}
                >

                  
                  <div className='d-flex justify-content-around align-items-center'>
                  <ul className="navigation-menu">
                    {this.state.navItems.map((item, key) => (
                      <li key={key} className="has-submenu">
                        <a
                          href={"#" + item.idnm}
                          className="nav-heading-before"
                        >
                          {item.navheading}
                        </a>
                      </li>
                    ))}
                    </ul>

                    {currentUser.isAuthenticated ? 
                    <div className='d-flex align-items-center'>
                      <p className='pr-5 mb-0 username'>Hi, {currentUser.user.username}</p>
                      <button className='btn btn-primary btn-pills mx-1 px-3 my-1 my-md-0' onClick={() => logout()}>Logout</button> 
                      </div>
                    
                    : 
                <div className='auth-buttons' >
                             <Link to='/login' className='btn btn-primary btn-pills mx-1 px-3 my-1 my-md-0'>Login</Link> 
                             <Link to='/signup' className='btn btn-primary btn-pills mx-1 px-3 my-1 my-md-0'>Signup</Link> 
                        </div> 
    }
                    </div>
                </div>
                    
                <div className="menu-extras">
                  <div className="menu-item">
                    <Link
                      to="#"
                      onClick={this.toggleLine}
                      className={
                        this.state.isOpen
                          ? "navbar-toggle open"
                          : "navbar-toggle"
                      }
                    >
                      <div className="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </Link>
                  </div>
                </div>
              </Container>
            </header>
          </React.Fragment>
        );
    }
}

const mapStateToProps = ({ currentUser }) => ({
    currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Topbar));