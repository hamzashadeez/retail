import React from 'react'
import firebase from 'firebase'
import uuid from 'react-uuid'
import {AddNewProduct} from './Backend/Vendors/AddProduct'
import {createNewVendor} from './Backend/Vendors/vendorAuths'
import {createNewUsers} from './Backend/Customers/auth'
import {getListings} from './Backend/Listings/getListings'

function Main() {
    const product = {
        name: 'Nike Shoe',
        price: 15.99,
        id: uuid(),
        color: 'black',
        amount: 12,
        available: true,
        brand: 'polo',
        date: firebase.firestore.FieldValue.serverTimestamp(),
        description: 'this is a description',
        photo: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-fbb9f541-c653-4340-97fc-9b7775782cae/tanjun-mens-shoe-w8ToA8jr.jpg'
    }
    const vendor = {
        name: 'Hamza Ahmad',
        email: 'h@gmail.com',
        password: 'hamza1111',
        id: uuid(),

    }
    const Customer = {
        name: 'John Doe',
        email: 'customer1@gmail.com',
        password: 'hamza1111',
        id: uuid(),
    }
    return (
        <div>
         <button onClick={()=> AddNewProduct(product)}>Add product</button>   
         <button onClick={()=> createNewUsers(Customer)}>Add Customer</button> 
         <button onClick={()=> getListings()}>getListings</button> 

        </div>
    )
}

export default Main
