import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { loginDataReducer } from "../features/auth/loginSlice";
import { signUpDataReducer } from "../features/auth/signUpSlice";
import { forgotPasswordReducer } from "../features/auth/forgotPasswordSlice";
import { resetPasswordReducer } from "../features/auth/resetPasswordSlice";
import { verifyResetPasswordTokenReducer } from "../features/auth/verifyResetPasswordToken";

const store = configureStore({
  reducer: combineReducers({
    // auth module reducers
    loginDataReducer: loginDataReducer,
    signUpDataReducer: signUpDataReducer,
    forgotPasswordReducer: forgotPasswordReducer,
    resetPasswordReducer: resetPasswordReducer,
    verifyResetPasswordTokenReducer: verifyResetPasswordTokenReducer,
  }),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;