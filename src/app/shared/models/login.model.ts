export interface LoginData {
  login: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  expires_in: number;
}
