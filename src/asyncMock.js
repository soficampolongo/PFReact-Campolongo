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