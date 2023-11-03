import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {colors} from './src/constants/colors';
import {Router} from './src/routes';
import 'react-native-reanimated';
import {Provider} from 'react-redux';
import {persister, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <SafeAreaView style={styles.container}>
          <StatusBar
            barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
            backgroundColor={
              Platform.OS === 'ios'
                ? colors.palette.neutral100
                : colors.palette.neutral200
            }
          />
          <Router />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default App;
