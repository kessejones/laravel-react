import React, { Component } from 'react';

import {
    Navbar, NavItem, Nav, Collapse, NavLink, NavbarToggler
} from 'reactstrap';

export default class Example extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            toggle: true
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState({
            toggle: !this.state.toggle
        });
    }

    render() {
        return (
           <div>
               <Navbar color="light" light expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.toggle}>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Página 1</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Página 2</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
               </Navbar>
           </div>
        );
    }
}