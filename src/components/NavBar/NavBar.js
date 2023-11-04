import CartWidget from "../CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = ({img}) => {
    return(
        <nav className="NavBar">
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <img src={img} alt="logo"></img>
            <div className="Categories">
                <NavLink to = {'/category/delinedor'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Delineadores</NavLink>
                <NavLink to = {'/category/rubor'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Rubores</NavLink>
                <NavLink to = {'/category/labial'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Labiales</NavLink>
                
            </div>
            <CartWidget/>
        </nav>
    
    )
}

export default NavBar