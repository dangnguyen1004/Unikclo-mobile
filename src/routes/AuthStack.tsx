import {CompositeScreenProps} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {colors} from '../constants/colors';
import {LoginScreen} from '../screens';
import {RootStackParamList, RootStackScreenProps} from './RootStack';

export type AuthStackParamList = {
  Login: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AuthStackParamList, Screen>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.background,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
