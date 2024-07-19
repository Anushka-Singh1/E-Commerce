const FilterReducer = (state, action) => {
    switch (action.type) {
        case "Load_Filter_Products":

            let pricearr=action.payload.map((curElem)=>curElem.price);
            //1st way to get max value, apply method is used to get max value from array by converting array into individual elements
            // console.log(Math.max.apply(null, pricearr));
            //2nd way using reduce method
           //let maxPrice= pricearr.reduce((initialVal,curElem)=>Math.max(initialVal,curElem),0);
           //3rd way using spread operator
           let maxPrice= Math.max(...pricearr);
           console.log(maxPrice);

            return { 
                ...state,
                 all_products: [...action.payload],
                filter_products: [...action.payload], 
                filters: {...state.filters, maxPrice: maxPrice, price:maxPrice},
            };
        
    case "SET_GRID_VIEW":
        return { ...state, grid_view: true };
    
    case "SET_LIST_VIEW":
        return { ...state, grid_view: false };
    
    case "GET_SORT_VALUE":
        return{
            ...state,
            sorting_value: action.payload,
        };
    
    case "SORTING_PRODUCTS":
        let newSortData;

        const{filter_products, sorting_value} = state;
        let tempSortProduct=[...filter_products];
    
        const sortingProducts=(a,b) =>{
            if(sorting_value === "price-lowest")
            {
                return a.price - b.price;
            }
            if(sorting_value === "price-highest")
            {
                return b.price - a.price;
            }
            if(sorting_value === "name-a")
            {
                return a.name.localeCompare(b.name);
            }
            if(sorting_value === "name-z")
            {
                return b.name.localeCompare(a.name);
            }
        };
        newSortData = tempSortProduct.sort(sortingProducts);
        return{
            ...state,
            filter_products: newSortData,
        };

        case "UPDATE_FILTER_VALUE":
            const {name, value} = action.payload;
            return {...state, filters: {...state.filters, [name]: value}
        };
        case "FILTER_PRODUCTS" :
            let{all_products} = state;
            let tempFilterProduct = [...all_products];
            const {text, category, company, colors, price} = state.filters;
            if(text){
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text);
                });
            }
            if(category!== "All"){
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.category === category;
                });
            }
            if(company!== "All"){
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.company.toLowerCase() === company.toLowerCase();
                });
            }

            if(colors!== "All"){
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.colors.includes(colors);
                });
            }
            if(price==0)
            {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.price == price;
            });
            }
                else{
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.price <= price;
                });
            }
            return{
                ...state,
                filter_products:tempFilterProduct,
            }
        

        default:
            return state;
    
    }
};
export default FilterReducer;