import React, {FC} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, ScreenTitle, Space, TextInput} from '../../components';
import {colors} from '../../constants/colors';
import {space} from '../../constants/space';
import {AuthStackScreenProps} from '../../routes/AuthStack';
import ForgotPasswordButton from './components/ForgotPasswordButton';
import {useLogin} from './controllers/login';

const LoginScreen: FC<AuthStackScreenProps<'Login'>> = props => {
  const loginController = useLogin();

  return (
    <ScrollView
      style={{
        backgroundColor: colors.background,
        paddingHorizontal: space.appMargin,
      }}>
      <View style={styles.container}>
        <ScreenTitle text="Login" />

        <Space height={100} />

        <TextInput label="Email" onChangeText={loginController.setEmail} />

        <Space height={4} />

        <TextInput
          label="Password"
          onChangeText={loginController.setPassword}
        />

        <Space height={8} />

        <ForgotPasswordButton />

        <Space height={20} />
        
        <Button label='Login' />
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
