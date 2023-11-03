import React, {FC} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {colors} from '../../constants/colors';
import {onLogin} from '../../redux/auth/auth.actions';
import {RootState} from '../../redux/rootReducer';
import {useAppDispatch} from '../../redux/store';
import {AuthStackScreenProps} from '../../routes/AuthStack';
import {ScreenTitle} from '../../components';
import { space } from '../../constants/space';

const LoginScreen: FC<AuthStackScreenProps<'Login'>> = props => {
  const {loading} = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const [username, setUsername] = React.useState('kminchelle');
  const [password, setPassword] = React.useState('0lelplR');

  const handleLogin = () => {
    dispatch(onLogin({username, password}));
  };

  return (
    <ScrollView
      style={{
        backgroundColor: colors.background,
        paddingHorizontal: space.appMargin
      }}>
      <View style={styles.container}>
        <ScreenTitle text="Login" />
        <Text style={styles.title}>Login Screen</Text>
        <TextInput
          editable={!loading}
          placeholder="Username"
          placeholderTextColor={colors.textDim}
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          editable={!loading}
          placeholder="Password"
          placeholderTextColor={colors.textDim}
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} disabled={loading} />
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
