import { configureStore } from "@reduxjs/toolkit";
import linksListReducer from "../components/AddToListForm/linksListSlicer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore} from 'redux-persist';
import thunk from "redux-thunk";


const persistConfig = {
    key: 'root',
    storage,
}


const persistedReducer = persistReducer(persistConfig, linksListReducer)

export const store = configureStore({
    reducer: {
        linksList: persistedReducer,
    },
    middleware: [thunk]
})


export const persistor = persistStore(store)
