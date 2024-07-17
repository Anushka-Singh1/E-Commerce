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

        default:
            return state;
    
    }
};
export default FilterReducer;