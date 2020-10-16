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
    CustomInput,
    Label,
    } from 'reactstrap';
    import useDarkMode from '../utils/custom hooks/useDarkMode';

const NavBar = () => {
    const [isOpen,setIsOpen] = useState(false);

    //State for Dark Mode
    const [darkMode, setDarkMode] = useDarkMode(true);

    const toggle = ()=>setIsOpen(!isOpen);

    //toggle Function for Dark Mode
    const changeMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
    }


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
                <div>
                <CustomInput type='switch' checked={darkMode}
                onClick={changeMode}
                id="toggleDarkMode"
                label={darkMode ? "Dark Mode" : "Light Mode"}/>
                </div>
            </Navbar> 
            
        </div>
    )
}

export default NavBar
