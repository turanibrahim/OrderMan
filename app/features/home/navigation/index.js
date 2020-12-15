import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppHeader } from '../../main/components';
import Home from '../containers/index';

const Stack = createStackNavigator();

function HomeFeatureNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <AppHeader {...props} />,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Order Man',
          subtitle: 'Welcome to Order Man',
          showBackButton: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeFeatureNavigator;
