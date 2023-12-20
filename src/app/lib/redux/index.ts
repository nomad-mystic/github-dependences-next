// Community
import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './root-reducer';

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
const store = configureStore({
    reducer: reducer
});

export default store;


