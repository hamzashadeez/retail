import { auth, db } from "../../Config/firebase";

const createNewVendor = async (vendor) => {
  auth.createUserWithEmailAndPassword(vendor.email, vendor.password);
  const setdata = await db
    .collection("vendors")
    .doc(vendor.id)
    .set(vendor)
    .then(() => {
      console.log("vendor is created");
    });
};
const loginVendor = async(email,password)=>{
    auth.signInWithEmailAndPassword(email, password)
}

export { createNewVendor, loginVendor };
