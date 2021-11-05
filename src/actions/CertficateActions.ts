import {Dispatch} from "redux";
import {CERTIFICATE_FAIL, CERTIFICATE_LOADING, CERTIFICATE_SUCCESS, CertificateDispatchTypes} from "./CertificateActionTypes";
import axios from "axios";

export const GetCerficate = (cerficate: string) => async (dispatch: Dispatch<CertificateDispatchTypes>) => {
  try {
    dispatch({
      type: CERTIFICATE_LOADING
    })

    const res = await axios.get('http://localhost:4140');

    dispatch({
      type: CERTIFICATE_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch({
      type: CERTIFICATE_FAIL
    })
  }
};