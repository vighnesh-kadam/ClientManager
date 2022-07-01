import { Row,Card,Col,Button, Form,Nav,Container } from "react-bootstrap";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { toast } from "react-toastify";
const axios = require('axios');


const ByRevenue = () =>{
    const [data, setdata] = useState([])
    const {user}=useAuthContext()
    const [revenues, setrevenues] = useState([]);
    function getData(){
        axios.get(`http://${process.env.REACT_APP_ECURL}:8080/clients`)
        .then(function (response) {
          // handle success
          
       
          const filterdata=response.data.filter(row=>row.user===user.email)
         filterdata.sort(compare)
          setdata(filterdata)
         
          
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
    function compare( a, b ) {
      
        if ( parseInt(a.revenue) < parseInt(b.revenue) ){
          return 1;
        }
        if ( parseInt(a.revenue) >= parseInt(b.revenue) ){
          return -1;
        }
       
      }
      
    function deleteData(id){
      
        const ndata=data.filter(obj=>obj.id!==id)
       
        setdata(ndata)
        axios.delete(`http://${process.env.REACT_APP_ECURL}:8080/clients/${id}`)
        .then(response=>{
          toast.success("Deleted client!!")
           console.log('Delete successful')})
        .catch(error => {
            console.log(error.message);
            console.error('There was an error!', error);
        });
    }
  

     
      useEffect(() => {
      getData()
          }, [])
          return ( <div> 
  
            <h1 className="mb-0 rev smallscreen" >Clients By Revenue</h1>
             
         
         <Row xs={1} md={2} className="g-4 cards">
           {Array.from({ length: data.length }).map((_, idx) => (
             <Col>
               <Card key={idx}  className="plates">
               <Card.Header className="plate-header"> <Card.Title>{data[idx].name}</Card.Title></Card.Header>
                 <Card.Body>
                
                   <Card.Text>
                   <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
             <Form.Label column sm="4" className="values">
               Email : 
             </Form.Label>
             <Col sm="8">
               <Form.Control plaintext readOnly defaultValue={data[idx].email} className="keys" />
             </Col>
           </Form.Group>
           <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
             <Form.Label column sm="5" className="values" >
              Revenue :
             </Form.Label>
             <Col sm="7">
               <Form.Control plaintext readOnly defaultValue={data[idx].revenue} className="keys" />
             </Col>
           </Form.Group>
                   </Card.Text>
                   <Link to={`/clients/${data[idx].id}`}>
                   <Button variant="primary" className="mx-2"  >Update</Button>
                   </Link>
                   <Button variant="danger" onClick={()=>deleteData(data[idx].id)}>Delete</Button>
                 </Card.Body>
               </Card>
               
             </Col>
           ))}
         </Row>
         
             </div> );
         }
          
 
export default ByRevenue;