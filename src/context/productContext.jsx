import { createContext, useEffect, useState } from "react";
import axios from 'axios'


export const AppContext = createContext();

const productOne ="https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/data-buybox1.json";
const productTwo = "https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/data-buybox2.json"
const productThree ="https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/data-buybox3.json"

export function ProductProvider() {
  const [products, setProducts] = useState([]); //
  const [product, setProduct] = useState({})

  const productsData = async () => {
    const dataOne = await axios.get(productOne)
    const dataTwo = await axios.get(productTwo)
    const dataThree = await axios.get(productThree)
    setProducts([dataOne, dataTwo, dataThree])
  }
 

    useEffect(() => {
       
        productsData()
        setProduct(products[Math.floor(Math.random() * (3  + 1))
        ])
    }, []);

    return (
    <div>
        {/* <h1>{product.name}</h1>
        <img src={product.images} alt="" /> */}
    </div>
    );
}

