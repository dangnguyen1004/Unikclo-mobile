import {http} from '../../helpers/api';
import {ILoginRequest, ILoginResponse} from './auth.interfaces';

export const handleLogin = async (data: ILoginRequest) => {
  const result = await http.post<ILoginRequest, ILoginResponse>(
    'auth/login',
    data,
  );
  return result.data;
};
