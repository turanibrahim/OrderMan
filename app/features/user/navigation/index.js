import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppHeader } from '../../main/components';
import Profile from '../containers/index';

const Stack = createStackNavigator();

function UserFeatureNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <AppHeader {...props} />,
      }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'User Profile',
          showBackButton: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default UserFeatureNavigator;
