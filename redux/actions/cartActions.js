import { 
    ADD_TO_CART, 
    REMOVE_PRODUCT_FROM_CART, 
    UPDATE_PRODUCT_QUANTITY 
} from "../types";


export const addToCart = (product, quantity = 1) => {
    return {
        type: ADD_TO_CART,
        payload: { product, quantity },
    };
};

export const updateProductQuantity = (productId, quantity = 1) => {
    return {
        type: UPDATE_PRODUCT_QUANTITY,
        payload: { productId, quantity },
    };
};

export const deleteProduct = (productId) => ({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId,
});