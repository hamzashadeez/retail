import {db} from '../../Config/firebase'

const getListings = async()=>{
    const listings = await db.collection('products').get()
    listings.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
}

export {getListings}