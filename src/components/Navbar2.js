import { Navbar,Container,Nav,Button } from "react-bootstrap";


import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { NavbarText } from "reactstrap";
import { Link } from "react-router-dom";
const Navbar2 = () => {
    const {logout}=useLogout()
const {user}=useAuthContext()
if(user){
  console.log("user",user.email)
console.log("user",user)
}
    return ( <div > 
    <Navbar className="navbar" bg="dark" variant="dark" >
        <Container >
          <Navbar.Brand >MyClient</Navbar.Brand>
          <Nav className="me-auto">
         
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          
           {!user &&  <Nav.Link  to="/signup">Signup</Nav.Link> }
           {!user &&  <Nav.Link  to="/login">Login</Nav.Link> }
            </Nav>
            <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          {user && <>
            <Navbar.Text>
               Signed in as: <Link to="/login">{user.displayName}</Link>
                
              <Link onClick={logout} to="/login" className="mx-2">Logout</Link>
        
           
            </Navbar.Text>
           
            </>}
            {
      !user &&(<>
    <Link to="/sign">  <Button>Signuppp</Button> </Link>
    <Link to="/login">  <Button>Loginnn</Button> </Link>
      </>)}
          </Navbar.Collapse>
        </Container>
      </Navbar> 
     
      </div> );
}
 
export default Navbar2;