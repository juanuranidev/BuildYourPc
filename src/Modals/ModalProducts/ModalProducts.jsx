import React, { useEffect, useState } from "react";
import { getFirestore, query, collection, where, getDocs } from "firebase/firestore";
import Loader from "../../Loader/PageLoader";
import Products from "../../Products/Products";
import "./ModalProducs.scss";

export default function ModalProducts({ category, close }) {
  const [loader, setLoader] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    setLoader(true);

    const dataBase = getFirestore();
    const queryCollection = query(
      collection(dataBase, "products"),
      where("category", "==", `${category}`)
    );

    try {
      const getData = await getDocs(queryCollection).then((res) =>
        setProducts(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      );
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="modalProducts">
      <div className="modalProducts_close">
        <p className="modalProducts_close_p" onClick={close}>Cerrar</p>
      </div>
      <div className="modalProducts_content">
        {loader
            ? <Loader />
            : <div>
                <Products data={products} />
            </div>
        }
      </div>
    </div>
  );
}
