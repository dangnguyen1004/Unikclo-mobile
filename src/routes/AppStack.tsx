import {CompositeScreenProps} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {colors} from '../constants/colors';
import {HomeScreen} from '../screens';
import { RootStackParamList, RootStackScreenProps } from './RootStack';

export type AppStackParamList = {
  Home: undefined;
};

export type AppStackScreenProps<Screen extends keyof AppStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AppStackParamList, Screen>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.background,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
