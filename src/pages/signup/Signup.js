import { Form,FormGroup,Label,Col,Input,Button} from "reactstrap";
import { useSignup } from "../../hooks/useSignup";
import { useState } from "react";
import { toast } from "react-toastify";

const Signup = () => {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const {signup,error,isPending}=useSignup()
   const handleSubmit=(e)=>{
       e.preventDefault()
      
        signup(email,password,username)
     
        toast.success("Sign-up complete!!")
    
   }
   return ( <div>
    
 <Form onSubmit={handleSubmit}>

   <FormGroup row>
     <Label
       for="exampleUsername"
       sm={2}
     >
       Username
     </Label>
     <Col sm={10}>
       <Input
         id="exampleUsername"
         name="username"
         placeholder="Username"
         type="text"
         value={username}
         onChange={(e)=>setUsername(e.target.value)}
         required
       />
     </Col>
   </FormGroup>
   <FormGroup row>
     <Label
       for="exampleEmail"
       sm={2}
     >
       Email
     </Label>
     <Col sm={10}>
       <Input
         id="exampleEmail"
         name="email"
         placeholder="with a placeholder"
         type="email"
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         required
       />
     </Col>
   </FormGroup>
   <FormGroup row>
     <Label
       for="examplePassword"
       sm={2}
     >
       Password
     </Label>
     <Col sm={10}>
       <Input
         id="examplePassword"
         name="password"
         placeholder="password placeholder"
         type="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         required
       />
     </Col>
   </FormGroup>
   
  
   
 
   <FormGroup
     check
     row
   >
     <Col
       sm={{
         offset: 2,
         size: 10
       }}
     >
      {!isPending && <Button>
         signup
       </Button>}
{isPending && <Button className="btn" disabled>
         loading
       </Button>}

     </Col>
   </FormGroup>

{error && <p>{error}</p> }

 </Form>
       
     </div>  );
}
 
export default Signup;