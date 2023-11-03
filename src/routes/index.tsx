import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {RootStack, RootStackParamList} from './RootStack';

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const Router = (props: NavigationProps) => {
  const colorSchema = useColorScheme();

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorSchema === 'dark' ? DarkTheme : DefaultTheme}
      {...props}>
      <RootStack />
    </NavigationContainer>
  );
};
