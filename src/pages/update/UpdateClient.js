import { useParams } from "react-router";
import { useState,useEffect } from "react";
import { Form,Button,Container } from "react-bootstrap";
import { useAuthContext } from "../../hooks/useAuthContext";
const axios = require('axios');

const UpdateClient = () => {
const {id}=useParams()
const {user}=useAuthContext()
const [nemail, setnemail] = useState("")
const [nname, setnname] = useState("")
const [nrevenue, setnrevenue] = useState()  
function getData(){
    axios.get(`http://${process.env.REACT_APP_ECURL}:8080/client/${id}`)
    .then(function (response) {
      // handle success
      
      setnemail(response.data.email)
      setnname(response.data.name)
      setnrevenue(parseInt(response.data.revenue))
   
      // setdata(response)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
   function putInfo(e){
    e.preventDefault()
  
   axios.put(`http://${process.env.REACT_APP_ECURL}:8080/clients/${id}`, {
   id, 
   name: e.target.name.value,
     email:e.target.email.value,
     revenue:e.target.revenue.value,
     user:user.email
   })
   .then(function (response) {
    //  console.log(response);
   })
   .catch(function (error) {
     console.log(error);
   });

 
  }
useEffect(() => {
    getData()
    
}, [])

   return ( <div>
   <Container>

<Form className="addClient mt-5" onSubmit={(e)=>putInfo(e)}>
<Form.Group style={{marginLeft:"35%",marginTop:"10%"}} controlId="title">
    <Form.Label><h1>Update details</h1></Form.Label>
    
  </Form.Group>


  <Form.Group className="mb-3" controlId="name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" defaultValue={nname}/>
    
  </Form.Group>

 
  <Form.Group className="mb-3" controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" defaultValue={nemail} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="revenue">
    <Form.Label>Revenue</Form.Label>
    <Form.Control type="number" placeholder="Revenue" defaultValue={nrevenue}/>
  </Form.Group>
  <Button variant="primary" type="submit" style={{marginLeft:"45%"}}>
    Submit
  </Button>
  
</Form>
</Container>
    </div>  );
}
 
export default UpdateClient;