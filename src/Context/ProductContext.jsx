import { createContext, useEffect } from "react";
import axios from "axios";

// Create a context 
const AppContext = createContext();

const API ="https://api.pujakaitem.com/api/products";

// Create a provider
const AppProvider = ({ children }) => {
    const getProducts=async(url)=>{
        const res =await axios.get(url);
        const products = await res.data;
        console.log(products);
    };
    useEffect(() => {  
     getProducts(API);
    }, []);
    return <AppContext.Provider value="hello">
    {children}
    </AppContext.Provider>;
};
export {AppProvider, AppContext};