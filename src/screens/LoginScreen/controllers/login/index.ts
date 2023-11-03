import {useState} from 'react';
import {useSelector} from 'react-redux';
import {onLogin} from '../../../../redux/auth/auth.actions';
import {RootState} from '../../../../redux/rootReducer';
import {useAppDispatch} from '../../../../redux/store';

export const useLogin = () => {
  const {loading} = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');

  const handleLogin = () => {
    dispatch(onLogin({username: email, password}));
  };

  return {
    loading,
    setEmail,
    setPassword,
    handleLogin,
  };
};
