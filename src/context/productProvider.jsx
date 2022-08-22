import { createContext, useState } from 'react';
import axios from "axios";

export const AppContext = createContext();
const productOne ="https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/data-buybox1.json";
const productTwo = "https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/data-buybox2.json"
const productThree ="https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/data-buybox3.json"

export function ProductProvider() {
  const [product, setProduct] = React.useState(null); //[post, setPost]

    React.useEffect(() => {
    axios.get(productOne).then((response) => {
        setProduct(response.data);
    });
    axios.get(productTwo).then((response) => {
        setProduct(response.data);
    });
    axios.get(productThree).then((response) => {
        setProduct(response.data);
    });
    }, []);

    if (!product) return null;


    return (
    <div>
        <h1>{product.name}</h1>
        <img src={product.images} alt="" />
    </div>
    );
}