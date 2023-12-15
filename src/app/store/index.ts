// Community
import { configureStore } from '@reduxjs/toolkit';

// Slices
import authSlice from '@/app/store/slices/auth/auth-slice';

type reducerTypes = {
    auth: void
};

interface StoreConfigInterface {
    dispatch(): void
    getState(): void
    subscribe(): void
    reducer: reducerTypes
}

/**
 * @description This variable represents a configured store object.
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @type {Object}
 * @property {Function} dispatch - A function used for dispatching actions to the store.
 * @property {Function} getState - A function used for retrieving the current state of the store.
 * @property {Function} subscribe - A function used for subscribing to the store's updates.
 */
const store: object = configureStore<StoreConfigInterface>({
    reducer: {
        auth: authSlice.reducer
    },
});

export default store;


