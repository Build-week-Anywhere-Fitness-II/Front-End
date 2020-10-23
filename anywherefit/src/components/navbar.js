import React from 'react';
import {useHistory} from 'react-router-dom';
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
    } from 'reactstrap';
    import useDarkMode from '../utils/custom hooks/useDarkMode';
import { useParams } from 'react-router-dom';

const NavBar = () => {
    const token = window.sessionStorage.getItem('token');
    //const [isOpen,setIsOpen] = useState(false);
    const role = window.sessionStorage.getItem('role')
    //State for Dark Mode
    const [darkMode, setDarkMode] = useDarkMode(true);

    const id = window.sessionStorage.getItem('user');
    //const toggle = ()=>setIsOpen(!isOpen);
    const history = useHistory();
    //toggle Function for Dark Mode
    const changeMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
    }

    return (
        <div>

           <Navbar light expand="md" className="flex-d justify-content-center" style={{backgroundColor:'#1e222e'}}>
               <NavbarBrand className="flex-d justify-content-center"href="/" style={{color:'white',fontWeight:'bold'}}>
                   {darkMode ? <NavLink href="https://anywhere-fitness-dark-theme.netlify.app/index.html">
                   <img src={Logo} alt="Website Logo"></img>
                   </NavLink> :
                   <NavLink href="https://anywhere-fitness-light-theme.netlify.app/">
                   <img src={Logo} alt="Website Logo"></img>
                   </NavLink>
}
                </NavbarBrand>
               <NavItem style={{listStyle:'none'}} >
                   {darkMode ?
                   <NavLink href='https://anywhere-fitness-dark-theme.netlify.app/about.html' style={{color:'#E4576E'}}>About Us</NavLink>
                   : <NavLink href='https://anywhere-fitness-light-theme.netlify.app/about'style={{color:'#E4576E'}}>About Us</NavLink>
}
               </NavItem>
               <NavItem style={{listStyle:'none'}} >
                   <NavLink href="/classes" style={{color:'#E4576E'}}>Classes</NavLink>
               </NavItem>
               {token ?
               <UncontrolledDropdown style={{listStyle:'none'}} nav inNavbar>
               <DropdownToggle style={{color:'#E4576E'}}  nav caret>
                   UserProfile
               </DropdownToggle>
               <DropdownMenu style={{backgroundColor:'#1e222e'}}>
                   <DropdownItem>
                   <NavItem style={{listStyle:'none'}} >
                    <NavLink href={`/user/${id}`} style={{color:'#e4576e'}}> 
                        User Profile
                    </NavLink>
                   </NavItem>
                   </DropdownItem>
                   <DropdownItem>
                       <NavLink href="/" onClick={()=>{
                           window.sessionStorage.removeItem('user','token','role')
                           history.push('/')
                           }}
                           style={{color:'#e4576e'}}>
                           Log-Out
                       </NavLink>
                   </DropdownItem>
               </DropdownMenu>
               </UncontrolledDropdown>
                :
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
}
                <div>
                <CustomInput type='switch' checked={darkMode}
                onChange={changeMode}
                id="toggleDarkMode"
                label={darkMode ? "Dark Mode" : "Light Mode"}/>
                </div>
            </Navbar> 
            
        </div>
    )
}

export default NavBar
