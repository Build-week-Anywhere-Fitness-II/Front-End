import React, {useState} from 'react';
import Logo from '../Logo.png';
import {
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    } from 'reactstrap';

const NavBar = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = ()=>setIsOpen(!isOpen);
    return (
        <div>
           <Navbar color="dark" light expand="md" className="flex-d justify-content-center">
               <NavbarBrand className="flex-d justify-content-center"href="/" style={{color:'white',fontWeight:'bold'}}>
                   <img src={Logo}></img>
                </NavbarBrand>
               <NavItem style={{listStyle:'none'}} >
                   <NavLink href="/about" style={{color:'#E4576E'}}>About Us</NavLink>
               </NavItem>
               <NavItem style={{listStyle:'none'}} >
                   <NavLink href="/classes" style={{color:'#E4576E'}}>Classes</NavLink>
               </NavItem>
               <UncontrolledDropdown style={{listStyle:'none'}} nav inNavbar>
                <DropdownToggle style={{color:'#E4576E'}}  nav caret>
                    Log-In/Sign-Up
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem>
                    <NavItem style={{listStyle:'none'}} >
                        <NavLink href="/login" style={{color:'black'}}>
                            Log-In
                        </NavLink>
                    </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                        <NavLink href="/register" style={{color:'black'}}>
                            Sign-Up
                        </NavLink>
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Navbar> 
            
        </div>
    )
}

export default NavBar
