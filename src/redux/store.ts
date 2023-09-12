import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware();
	},
});

export { store };
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
