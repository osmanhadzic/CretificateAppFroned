import {combineReducers} from "redux";
import certificateReducer from "./CertificateReducer";

const RootReducer = combineReducers({
    certificate: certificateReducer
});

export default RootReducer
