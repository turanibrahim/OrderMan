import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeFeature from '../../../features/home/navigation';
import UserFeature from '../../../features/user/navigation';
import CartFeature from '../../../features/cart/navigation';
import RestaurantList from '../../../features/restaurantList/navigation';

const Drawer = createDrawerNavigator();

/* function MenuIcon({ icon, iconType }) {
  const size = 24;

  if (iconType === 'community') {
    return <CommunityIcon name={icon} size={size} color={color} />;
  }

  return <Icon name={icon} size={size} color={color} />;
} */

function MainDrawerNavigator() {
  const [screenOptions] = useState([
    {
      name: 'Home',
      title: 'Home',
      icon: 'home',
      iconType: 'default',
      component: HomeFeature,
    },
    {
      name: 'User',
      title: 'Profile',
      icon: 'user',
      iconType: 'default',
      component: UserFeature,
    },
    {
      name: 'Cart',
      title: 'Cart',
      icon: 'shopping-cart',
      iconType: 'default',
      component: CartFeature,
    },
    {
      name: 'RestaurantList',
      title: 'Restaurant List',
      icon: 'restaurant',
      iconType: 'default',
      component: RestaurantList,
    },
  ]);
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      /* drawerContent={props => <AppDrawer screens {...props} />} */
      /* drawerContentOptions={{
        activeTintColor: primary,
      }} */
      /* drawerStyle={styles.initialLoading(isDrawerLoading)} */
      useNativeAnimations={false}>
      {screenOptions.map((screen, index) => {
        return (
          <Drawer.Screen
            key={index}
            name={screen.name}
            component={screen.component}
            options={{
              /* drawerIcon: () => (
                <MenuIcon icon={screen.icon} iconType={screen.iconType} />
              ), */
              title: screen.title,
            }}
          />
        );
      })}
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;
