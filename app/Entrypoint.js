/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import styles from './config/styles';

import Navigator from './navigation';
import configureStore from './store';
const { persistor, store } = configureStore();

const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    ...styles.colors,
  },
};

export default function Entrypoint() {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <PaperProvider theme={theme}>
          <Navigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
