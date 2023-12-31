import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  ScreenBackButton,
  ScreenTitle,
  SocialButtons,
  Space,
  TextInput,
} from '../../components';
import {colors} from '../../constants/colors';
import {space} from '../../constants/space';
import {AuthStackScreenProps} from '../../routes/AuthStack';
import ForgotPasswordButton from './components/ForgotPasswordButton';
import {useLogin} from './controllers/login';

const LoginScreen: FC<AuthStackScreenProps<'Login'>> = props => {
  const {navigation} = props;

  const loginController = useLogin();

  const handleBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  return (
    <ScrollView
      style={{
        backgroundColor: colors.background,
        paddingHorizontal: space.appMargin,
      }}>
      <View style={styles.container}>
        <ScreenBackButton onPress={handleBack} />

        <ScreenTitle text="Login" />

        <Space height={100} />

        <TextInput label="Email" onChangeText={loginController.setEmail} />

        <Space height={4} />

        <TextInput
          label="Password"
          onChangeText={loginController.setPassword}
          secureTextEntry
        />

        <Space height={8} />

        <ForgotPasswordButton />

        <Space height={20} />

        <Button label="Login" />

        <Space height={100} />

        <Text>Or login with social account</Text>

        <SocialButtons />
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
  socialLoginButtons: {
    marginTop: 12,
    flexDirection: 'row',
  },
});
