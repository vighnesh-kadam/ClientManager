import { useState } from "react";
import { Form,Button,Container } from "react-bootstrap";
import {  ToastContainer,toast } from 'react-toastify';
import { useAuthContext } from "../hooks/useAuthContext";

const axios = require('axios');

const AddClient = () => {
  const {user}=useAuthContext()
  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [revenue, setrevenue] = useState(0)
 function postInfo(e){
 
  e.preventDefault()
  axios.post(`http://${process.env.REACT_APP_ECURL}:8080/clients`, {
    name: e.target.name.value,
    email:e.target.email.value,
    revenue:e.target.revenue.value,
    user:user.email
  })
  .then(function (response) {
    toast.success('Client added');
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
console.log(e.target.revenue.value);

 }
 return ( <div className="my-4 ">
  <Container>
  <Form className="addClient smallscreen" onSubmit={(e)=>postInfo(e)}>
  <Form.Group style={{marginLeft:"35%"}} controlId="title">
    <Form.Label><h1>Add Client</h1></Form.Label>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="name">
    <Form.Label>Name</Form.Label>
    <Form.Control class="inputbox" type="text" placeholder="Name" />
    
  </Form.Group>

 
  <Form.Group className="mb-3" controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="revenue">
    <Form.Label>Revenue</Form.Label>
    <Form.Control type="number" placeholder="Revenue" />
  </Form.Group>
  <Button variant="primary" type="submit" style={{marginLeft:"45%"}} >
    Submit
  </Button>
  {email}
</Form>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

</Container>
    </div> );
}
 
export default AddClient;