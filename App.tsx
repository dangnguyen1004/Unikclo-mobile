import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import 'react-native-reanimated';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {colors} from './src/constants/colors';
import {persister, store} from './src/redux/store';
import {Router} from './src/routes';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <PaperProvider>
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <SafeAreaView style={styles.container}>
              <StatusBar
                barStyle={
                  Platform.OS === 'ios' ? 'dark-content' : 'light-content'
                }
                backgroundColor={
                  Platform.OS === 'ios'
                    ? colors.palette.neutral100
                    : colors.palette.neutral200
                }
              />
              <Router />
            </SafeAreaView>
          </KeyboardAvoidingView>
        </PaperProvider>
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
