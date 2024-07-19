const FilterReducer = (state, action) => {
    switch (action.type) {
        case "Load_Filter_Products":
            return { ...state, all_products: [...action.payload], filter_products: [...action.payload] };
        
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
            const {text, category, company, colors} = state.filters;
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
            return{
                ...state,
                filter_products:tempFilterProduct,
            }
        

        default:
            return state;
    
    }
};
export default FilterReducer;