import React, { Component } from 'react';
import {Navbar,NavbarBrand,Nav,NavItem,NavbarToggler,Collapse} from 'reactstrap';
import {Link} from 'react-router-dom'
export default class Navigration extends Component {
    constructor(props){
        super(props)
        this.state={
            isNavOpen:false
        }
    }

    navToggle=()=>{
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <div>
            <Navbar dark color ="dark" expand="md" >
           <div className="container">
               <NavbarToggler onClick={this.navToggle}/>
               <NavbarBrand href= "/"> Arfin Restaurent</NavbarBrand>
               <Collapse isOpen={this.state.isNavOpen}  navbar>

               <Nav className =" ml-auto" Navbar>

                   <NavItem>
                       <Link to="/" className="nav-link active">Home</Link>
                   </NavItem>
                   <NavItem>
                       <Link to="/Menu" className="nav-link ">Menu</Link>
                   </NavItem>
                    <NavItem>
                       <Link to="/About" className="nav-link ">About</Link>
                   </NavItem>
                    <NavItem>
                       <Link to="/Contact" className="nav-link ">Contact</Link>
                   </NavItem>

               </Nav>
               </Collapse>
           </div>
           </Navbar>
        </div>
        )
    }
}

