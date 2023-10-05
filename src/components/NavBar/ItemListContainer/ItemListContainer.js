import { useState, useEffect } from "react"
import { getProducts } from "../../../asyncMock"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])
    useEffect(()=> {

        getProducts()
            .then(response => {
                getProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, []
    )

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer