import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppHeader } from '../../main/components';
import { RestaurantList } from '../containers/index';

const Stack = createStackNavigator();

function RestaurantListFeatureNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <AppHeader {...props} />,
      }}>
      <Stack.Screen
        name="RestaurantList"
        component={RestaurantList}
        options={{
          title: 'Restaurants',
          showBackButton: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default RestaurantListFeatureNavigator;
