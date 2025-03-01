import {auth} from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword,crreateUserWithEmailAndPassword,signOut } from "firebase/auth";

export const registerUser = (email, password) => async dispatch => {
    try {
        const userCredential = await crreateUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        dispatch({type: "REGISTER_SUCCESS", payload: user});
    }catch (error) {
        dispatch({type: "REGISTER_FAIL", payload: error.message});
    }
};

export const loginUser = (email, password) => async dispatch => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        dispatch({type: "LOGIN_SUCCESS", payload: user});
    }
    catch (error) {
        dispatch({type: "LOGIN_FAIL", payload: error.message});
    }
};

export const logout = () => async dispatch => {
    try {
        await signOut(auth);
        dispatch({type: "LOGOUT_SUCCESS"});
    }catch (error) {
        dispatch({type: "LOGOUT_FAIL", payload: error.message});
    }
};