import { legacy_createStore as createStore } from "redux"
import listReducer from "./listReducer"
export default createStore(listReducer)