import { auth, db } from "../../Config/firebase";

const createNewUsers = async (customer) => {
  auth.createUserWithEmailAndPassword(customer.email, customer.password);
  const setdata = await db
    .collection("customers")
    .doc(customer.id)
    .set(customer)
    .then(() => {
      console.log("customer is created");
    });
};
const loginVendor = async (email, password) => {
  auth.signInWithEmailAndPassword(email, password);
};

export { createNewUsers, loginVendor };
