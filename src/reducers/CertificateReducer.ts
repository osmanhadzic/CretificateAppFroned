import {
    CERTIFICATE_FAIL,
    CERTIFICATE_LOADING,
    CERTIFICATE_SUCCESS,
    CertificateDispatchTypes,
    CertificateType
  } from "../actions/CertificateActionTypes";
  
  interface DefaultStateI {
    loading: boolean,
    certificate
    ?: CertificateType
  }
  
  const defaultState: DefaultStateI = {
    loading: false
  };
  
  const CerficateReducer = (state: DefaultStateI = defaultState, action: CertificateDispatchTypes) : DefaultStateI => {
    switch (action.type) {
      case CERTIFICATE_FAIL:
        return {
          loading: false,
        }
      case CERTIFICATE_LOADING:
        return {
          loading: true,
        }
      case CERTIFICATE_SUCCESS:
        return {
          loading: false,
          certificate: action.payload
        }
      default:
        return state
    }
  };
  
  
  export default CerficateReducer