import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from '../feature/crypto/cryptoSlice';

export const store = configureStore({
    reducer: {
        crypto: cryptoReducer,
    },
});
