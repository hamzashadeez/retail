import {auth} from '../Config/firebase';

const createNewUsers = (email, password)=>{
    auth.createUserWithEmailAndPassword(email, password)
}

export default {createNewUsers}