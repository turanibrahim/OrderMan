import React from 'react';
import { View } from 'react-native';
import { useImmer } from 'use-immer';
import { flex, margins } from '../../../config/styles';
import { RestaurantListItem } from '../components';

const RestaurantList = ({ navigation }) => {
  const { flex1 } = flex;
  const [state, setState] = useImmer({
    restaurantList: [
      {
        id: 1,
        title: 'Burger King',
        category: 'Fast Food',
        brandLogo:
          'https://upload.wikimedia.org/wikipedia/sco/thumb/3/3a/Burger_King_Logo.svg/1024px-Burger_King_Logo.svg.png',
        minOrderPrice: '15',
      },
      {
        id: 2,
        title: 'Dominos',
        category: 'Fast Food',
        brandLogo:
          'https://1000logos.net/wp-content/uploads/2017/08/Domino%E2%80%99s-Emblem.jpg',
        minOrderPrice: '25',
      },
      {
        id: 3,
        title: 'Ekrem Coskun',
        category: 'Fast Food',
        brandLogo:
          'https://bayimolurmusun.com.tr/Admin/Content/Photos/SiteKullanicisi/27032019154810-ekrem_coskun_doner_bayilik_franchise_gorsel_logo.png',
        minOrderPrice: '20',
      },
    ],
  });

  return (
    <View style={[margins.mt2, flex1]}>
      {state.restaurantList.map((restaurant) => (
        <RestaurantListItem
          key={restaurant.id}
          title={restaurant.title}
          category={restaurant.category}
          brandLogo={restaurant.brandLogo}
          minOrderPrice={restaurant.minOrderPrice}
          onPress={() => navigation.navigate('RestaurantDetails')}
        />
      ))}
    </View>
  );
};

export default RestaurantList;
