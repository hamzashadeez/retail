const express = require("express");
const app = express();

app.use(express.json())
//firebase credentials
const service = require("./service.json");
var admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(service),
  databaseURL: "https://retail-84f94.firebaseio.com",
});

//services
const db = admin.firestore();

app.get("/", (req, res) => {
  res.send("Hello new Backend Guy");
});

app.get("/api/getCustomers", (req, res) => {
  (async () => {
    try {
      const products = [];
      const query = await db
        .collection("customers")
        .get()
        .then((snapshot) => {
          let docs = snapshot.docs;
          for (let doc of docs) {
            const selectedItem = {
              id: doc.id,
              item: doc.data(),
            };
            products.push(selectedItem);
          }
          return res.status(200).send(products);
        });
    } catch (error) {
      console.log(error);
    }
  })();
});


app.get("/api/getProducts", (req, res) => {
  (async () => {
    try {
      const products = [];
      const query = await db
        .collection("products")
        .get()
        .then((snapshot) => {
          let docs = snapshot.docs;
          for (let doc of docs) {
            const selectedItem = {
              id: doc.id,
              item: doc.data(),
            };
            products.push(selectedItem);
          }
          return res.status(200).send(products);
        });
    } catch (error) {
      console.log(error);
    }
  })();
});


app.get('/api/getProduct/:id', (req, res)=>{
    (async ()=>{
        try {
            const query = await db.collection('products').doc(req.params.id).get()
            const product = query.data()
            return res.status(200).send(JSON.stringify(product))
        } catch (error) {
            console.log(error)
        }
    })();
})

app.post('/api/addProduct', (req, res)=>{
    const product = req.body;
    // res.status(200).send("product")
    res.status(200).send(product)
    console.log(product)
})


app.listen(5000, () => console.log("Server is running"));
