import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppHeader } from '../../main/components';
import {
  Profile,
  AddressBook,
  PersonalInformation,
  CreateAddress,
  ChangePassword,
} from '../containers';

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
      <Stack.Screen
        name="PersonalInformation"
        component={PersonalInformation}
        options={{
          title: 'Personal Information',
          showBackButton: true,
        }}
      />
      <Stack.Screen
        name="AddressBook"
        component={AddressBook}
        options={{
          title: 'Address Book',
          showBackButton: true,
        }}
      />
      <Stack.Screen
        name="CreateAddress"
        component={CreateAddress}
        options={{
          title: 'Create Address',
          showBackButton: true,
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          title: 'Change Password',
          showBackButton: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default UserFeatureNavigator;
