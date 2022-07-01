import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";


const Menu = () => {
    return ( 
        <div className="flexbox-item menu" >
 
 
  <Link to="/" className="text-decoration-none flexbox-item-1">
  <div className="box">
Home 
</div>
  </Link>
  <Link to="/add" className="text-decoration-none flexbox-item-1">
  <div className="box">
Add Client
</div>
  </Link>
  <Link to="/display" className="text-decoration-none flexbox-item-1">
  <div className="box">
Display Client 
</div>
  </Link>
  <Link to="/revenue" className="text-decoration-none flexbox-item-1" >
  <div className="box">
View by Revenue
</div>
  </Link>
 
  <div className="box">
hello 
</div>
  


<div className="box">
hello 
</div>

</div>
     );
}
 
export default Menu;