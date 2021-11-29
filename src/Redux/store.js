import { combineReducers, createStore } from "redux";
import deliveryReducer from "./DeliveryReducer";
import diningReducer from "./DiningReducer";
import nightlifeReducer from "./NightlifeReducer";

const rootReducer = combineReducers({ deliveryState: deliveryReducer, diningState: diningReducer, nightlifeState: nightlifeReducer });

export default createStore(rootReducer);
