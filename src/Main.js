import React from 'react'
import uuid from 'react-uuid'
import {AddNewProduct} from './Backend/Vendors/AddProduct'
import {createNewVendor} from './Backend/Vendors/vendorAuths'

function Main() {
    const product = {
        name: 'Polo T-shirt',
        price: 5.99,
        id: 2303,
        color: 'red',
        available: true,
        brand: 'polo',
        date: '23/10/2020'
    }
    const vendor = {
        name: 'Hamza Ahmad',
        email: 'h@gmail.com',
        password: 'hamza1111',
        id: uuid(),

    }
    return (
        <div>
         <button onClick={()=> AddNewProduct(product)}>Add product</button>   
         <button onClick={()=> createNewVendor(vendor)}>New Vendor</button>   
        </div>
    )
}

export default Main
