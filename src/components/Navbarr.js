import {Button,Navbar, NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownMenu,NavbarText,DropdownToggle,DropdownItem } from "reactstrap";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
const Navbarr = () => {
const {logout}=useLogout()
const {user}=useAuthContext()
console.log("user:",user);

return ( <div>
<div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      reactstrap
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="#">
              <Button onClick={logout}>logout</Button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
      
      </Nav>
      {
      !user &&(<>
      <Button >Signup</Button>
      <Button >Login</Button>
      </>)}
      {user && <>hello {user.displayName} </>}
      {user && <Button onClick={logout}>Logout</Button>}
      
    </Collapse>
  </Navbar>
</div>
       
    </div> );
}
 
export default Navbarr;