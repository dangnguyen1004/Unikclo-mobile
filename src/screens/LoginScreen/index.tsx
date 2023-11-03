import React, {FC} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ScreenTitle, Space, TextInput} from '../../components';
import {colors} from '../../constants/colors';
import {space} from '../../constants/space';
import {onLogin} from '../../redux/auth/auth.actions';
import {RootState} from '../../redux/rootReducer';
import {useAppDispatch} from '../../redux/store';
import {AuthStackScreenProps} from '../../routes/AuthStack';

const LoginScreen: FC<AuthStackScreenProps<'Login'>> = props => {
  const {loading} = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const [email, setEmail] = React.useState('kminchelle');
  const [password, setPassword] = React.useState('0lelplR');

  const handleLogin = () => {
    dispatch(onLogin({username: email, password}));
  };

  return (
    <ScrollView
      style={{
        backgroundColor: colors.background,
        paddingHorizontal: space.appMargin,
      }}>
      <View style={styles.container}>
        <ScreenTitle text="Login" />

        <Space height={100} />

        <TextInput label="Email" onChangeText={setEmail} />

        <Space height={4} />

        <TextInput label="Password" onChangeText={setPassword} />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    marginTop: 100,
    fontSize: 16,
  },
  input: {
    borderColor: colors.border,
    borderWidth: 1,
    padding: 8,
    margin: 8,
    width: '80%',
  },
});
