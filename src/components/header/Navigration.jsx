import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
export default function Navigration() {
    return (
        <div>
       <Navbar dark color ="dark">
           <div className="container"><NavbarBrand href= "/"> Arfin Restaurent</NavbarBrand></div>
        
       </Navbar>
        </div>
    )
}
