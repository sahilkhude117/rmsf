import { configureStore , combineReducers } from '@reduxjs/toolkit';
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import donationReducer from './donationSlice';

const rootReducer = combineReducers({
  donation : donationReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck: false,
      }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
