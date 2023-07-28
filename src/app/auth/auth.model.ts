export interface GetOTPViaSMSRequest {
  mobile_number: string;
}

export interface IDefaultAPIResponse {
  success?: boolean;
  message?: string;
}

export interface oTpRequest {
  otp: string;
  mobile_number: string;
}