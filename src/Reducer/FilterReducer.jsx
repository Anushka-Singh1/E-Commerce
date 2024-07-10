const FilterReducer = (state, action) => {
    switch (action.type) {
        case "Load_Filter_Products":
            return { ...state, all_products: [...action.payload], filter_products: [...action.payload] };
        
    case "SET_GRID_VIEW":
        return { ...state, grid_view: true };
        default:
            return state;
    }
};
export default FilterReducer;