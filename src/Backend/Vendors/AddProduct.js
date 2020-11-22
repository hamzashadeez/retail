import { db } from "../../Config/firebase";
import firebase from 'firebase'

const AddNewProduct = async (product) => {
  const addproduct = await db
    .collection("products").doc(product.id.toString())
    .set({
      name: product.name,
      id: product.id,
      price: product.price,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      available: product.available,
      productAmounts: product.amount,
      color: product.color,
      brand: product.brand,
    })
    // .set(product)
    .then((d) => {
      console.log("new product is added");
    }).catch((err)=>{
        console.log(err)
    })
};

export { AddNewProduct };
