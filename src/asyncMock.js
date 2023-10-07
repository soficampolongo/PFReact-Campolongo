const products = [
    {
        id:'1',
        name: 'Delineador Maybelline',
        price: 5000,
        category: 'delineador',
        stock: 30,
    },
    {
        id:'2',
        name: 'Rubor Maybelline',
        price: 4500,
        category: 'rubor',
        stock: 30,
    },
    {
        id:'3',
        name: 'Labial Maybelline',
        price: 5000,
        category: 'labial',
        stock: 30,
    }
]

export const getProducts = ()=>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() =>{
            resolve (products.find(prod => prod.id ===productId))
        }, 500)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout (() =>{
            resolve (products.find(prod => prod.category ===productCategory))
        }, 500)
    })
}