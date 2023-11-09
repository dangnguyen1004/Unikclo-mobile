import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  ScreenTitle,
  SocialButtons,
  Space,
  TextInput,
} from '../../components';
import {colors, space} from '../../constants';
import {AuthStackScreenProps} from '../../routes/AuthStack';
import GoLoginButton from './components/GoLoginButton';

const RegisterScreen: FC<AuthStackScreenProps<'Register'>> = props => {
  const {navigation} = props;

  const handleGoLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView
      style={{
        backgroundColor: colors.background,
        paddingHorizontal: space.appMargin,
      }}>
      <View style={styles.container}>
        <ScreenTitle text="Sign Up" />

        <Space height={100} />

        <TextInput label="Name" />

        <Space height={4} />

        <TextInput label="Email" />

        <Space height={4} />

        <TextInput label="Password" secureTextEntry />

        <Space height={8} />

        <GoLoginButton onPress={handleGoLogin} />

        <Space height={20} />

        <Button label="Sign Up" />

        <Space height={100} />

        <Text>Or login with social account</Text>

        <SocialButtons />
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

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
