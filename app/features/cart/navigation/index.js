import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppHeader } from '../../main/components';
import { Cart } from '../containers';

const Stack = createStackNavigator();

function UserFeatureNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <AppHeader {...props} />,
      }}>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Cart',
          showBackButton: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default UserFeatureNavigator;
