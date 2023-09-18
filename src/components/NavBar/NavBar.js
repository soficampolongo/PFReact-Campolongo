import CartWidget from "./CartWidget/CartWidget"


const NavBar = ({img}) => {
    return(
        <nav>
            <img src={img} alt="logo"></img>
            <div>
                <button>Máscara de pestañas</button>
                <button>Delineador</button>
                <button>Labial</button>
                <button>Rubor</button>
                <button>Corrector</button>
            </div>
            <CartWidget/>
        </nav>
    
    )
}

export default NavBar