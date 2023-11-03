export interface IAuthSlice {
  token: string;
  isLogged: boolean;
  loading: boolean;
}

export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}
