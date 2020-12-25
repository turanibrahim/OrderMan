import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppHeader } from '../../main/components';
import { Cart, Checkout } from '../containers';

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
          title: 'Your Cart',
          showBackButton: false,
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{
          title: 'Checkout',
          showBackButton: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default UserFeatureNavigator;
