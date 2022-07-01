
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Home from "./pages/home/Home.js"
import Signup from "./pages/signup/Signup.js";
import Login from "./pages/login/Login.js";
import Navbarr from "./components/Navbarr.js";
import { Container } from "reactstrap";
import { useAuthContext } from "./hooks/useAuthContext.js";
import Navbar2 from "./components/Navbar2.js";
import Menu from "./components/Menu.js";
import AddClient from "./pages/AddClient.js";
import DisplayClient from "./pages/display/DisplayClient.js";
import UpdateClient from "./pages/update/UpdateClient.js";
import ByRevenue from "./pages/revenue/ByRevenue.js";
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'
function App() {
  const {user,authIsReady}= useAuthContext()
  return (
<BrowserRouter>

<div className="App">
<Navbar2 ></Navbar2>

<Row className="frame">
<Col xs={3}><Menu></Menu></Col>
<Col xs={8}><Switch>
   
   <Route exact path="/" >
   {user && <Home/>}
   {!user &&  <Redirect to="/login" /> }
   
   </Route>
   <Route exact path="/add" >
   {user && <AddClient/>}
   {!user &&  <Redirect to="/login" /> }
   
   </Route>
   <Route exact path="/display" >
   {user && <DisplayClient/>}
   {!user &&  <Redirect to="/login" /> }
   
   </Route>

   <Route exact path="/revenue" >
   {user && <ByRevenue/>}
   {!user &&  <Redirect to="/login" /> }
   
   </Route>
   <Route exact path="/sign" >
   {user &&  <Redirect to="/" /> }
   {!user && <Signup/>}
    </Route>
   <Route exact path="/login" > 
   {!user &&  <Login/> }
   {user && <Home/>}
   </Route>
   

   <Route exact path="/clients/:id" >
   {user && <UpdateClient/>}
   {!user &&  <Redirect to="/login" /> }
   
   </Route>
   
   </Switch></Col>
</Row>




    </div>
   
</BrowserRouter>
  );
}

export default App;
