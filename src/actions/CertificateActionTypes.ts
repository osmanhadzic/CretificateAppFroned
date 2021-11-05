export const CERTIFICATE_LOADING = "CERTIFICATE_LOADING";
export const CERTIFICATE_FAIL = "CERTIFICATE_FAIL";
export const CERTIFICATE_SUCCESS = "CERTIFICATE_SUCCESS";

export type CertificateType = {
  abilities: CertificateAbility[],
  sprites: CertificateSprites,
  stats: CertificateStat[]
}

export type CertificateAbility = {
  ability: {
    name: string
    url: string
  }
}

export type CertificateSprites = {
  front_default: string
}

export type CertificateStat = {
  base_stat: number,
  stat: {
    name: string
  }
}

export interface CertificateLoading {
  type: typeof CERTIFICATE_LOADING
}

export interface CertificateFail {
  type: typeof CERTIFICATE_FAIL
}

export interface CertificateSuccess {
  type: typeof CERTIFICATE_SUCCESS,
  payload: CertificateType
}

export type CertificateDispatchTypes = CertificateLoading | CertificateFail | CertificateSuccess