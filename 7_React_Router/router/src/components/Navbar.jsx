import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"



const Navbar = () => {
  return (
    <div className="NavBar">
      {/* // 5 -  Links
            <Link to="/">Home</Link>
            <Link to="/contato">Contato</Link>
      */}

      {/* 9- NavLink*/}
      <NavLink to='/'>Home</NavLink>
      <NavLink to="/contato">Contato</NavLink>
    </div>
    
  )
}

export default Navbar