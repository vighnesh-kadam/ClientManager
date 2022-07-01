import { Form,FormGroup,Label,Col,Input,Button} from "reactstrap";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { toast } from "react-toastify";
const Login = () => {
  const {login,error,isPending}=useLogin()
   const [password, setPassword] = useState("")
   const [email, setEmail] = useState("")
  const handleSubmit=(e)=>{
      e.preventDefault()
    
      login(email,password)
      toast.success("Sign-in complete!!")
      
  }
  return ( <div>
   
<Form onSubmit={handleSubmit} className="signupForm">
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
    row
    tag="fieldset"
    
  >
    
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
        Login
       </Button>}
{isPending && <Button className="btn" disabled>
         loading
       </Button>}
    </Col>
  </FormGroup>
  {error && <p>{error}</p>}
</Form>
      
    </div>  );
}
 
export default Login; <div>

Login</div>