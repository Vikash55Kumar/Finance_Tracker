import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "./reducer/budgetReducer"
import transactionalReducer from "./reducer/transactionalReducer"
import { exchangeRateApi } from "./Utility/exchangeRateApi";

const store = configureStore ({
    reducer: {
        budget: budgetReducer,
        transaction: transactionalReducer,
        [exchangeRateApi.reducerPath]: exchangeRateApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(exchangeRateApi.middleware),
})

export default store;

