import React, { useEffect, useContext } from "react";
import { auth, db } from "../Config/firebase";
import { UserContext } from "../Context/UserContext";
import { DataContext } from "../Context/DataContext";

function Flash() {
  const [user, setUser] = useContext(UserContext);
  const [data, setData] = useContext(DataContext);
  const products = [];

  const getData = async () => {
    const d = await db.collection("products");
    const observer = d.onSnapshot(
      (snapshot) => {
        let docs = snapshot.docs;
        for (let doc of docs) {
          products.push(doc.data());
        }
        // ...
      },
      (err) => {
        console.log(`Encountered error: ${err}`);
      }
    );

    setData(products);
    console.log("type of product ", typeof data);
  };
  useEffect(() => {
    return getData();
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          setUser({ isSigned: true });
        } else {
          setUser({ isSigned: false });
        }
      });
      return () => {
        unsubscribe();
      };
    }, 500);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h3
        style={{
          fontSize: "30px",
          color: "gray",
        }}
      >
        Spreere
      </h3>
    </div>
  );
}

export default Flash;
