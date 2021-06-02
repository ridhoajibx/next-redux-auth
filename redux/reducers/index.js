import { combineReducers } from "redux";

import ourTeamReducer from "../../components/OurTeam/OurTeam.reducers";
import shopCategoriesReducer from "../../components/ShopCategories/ShopCatergories.reducer";
import productsReducer from "../reducers/products.reducer";
import cartReducer from "./cartReducer";

export const rootReducer = combineReducers({
    cart: cartReducer,
    teamMembers: ourTeamReducer,
    shopCategories: shopCategoriesReducer,
    products: productsReducer,
});