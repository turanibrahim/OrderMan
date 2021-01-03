import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { material } from 'react-native-typography';
import { MenuListItem, RestaurantInformation } from '../components';
import { flex, margins } from '../../../config/styles';
import { useImmer } from 'use-immer';

const RestaurantDetails = () => {
  const { flex1 } = flex;
  const { mx1, mt3 } = margins;

  const [state, setState] = useImmer({
    restaurantDetails: {
      title: 'Burger King',
      status: 'available',
      brandLogo:
        'https://upload.wikimedia.org/wikipedia/sco/thumb/3/3a/Burger_King_Logo.svg/1024px-Burger_King_Logo.svg.png',
    },
    sections: [
      {
        id: 1,
        title: 'Featured',
        data: [
          {
            id: 11,
            title: 'Big King Menu',
            description:
              "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.",
            price: '15',
            quantity: 1,
          },
          {
            id: 12,
            title: 'King Chicken Menu',
            description:
              "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.",
            price: '13',
            quantity: 1,
          },
          {
            id: 13,
            title: 'Poor Menu :(',
            description:
              "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.",
            price: '10',
            quantity: 1,
          },
        ],
      },
    ],
  });

  const setItemQuantity = (props) => {
    const index = state.sections.findIndex(
      (section) => section.id === props.sectionId,
    );

    if (index > -1) {
      const itemIndex = state.sections[index].data.findIndex(
        (item) => item.id === props.itemId,
      );

      if (itemIndex > -1) {
        setState((draft) => {
          draft.sections[index].data[itemIndex].quantity = props.newQuantity;
        });
      } else {
        throw Error('Invalid item id');
      }
    } else {
      throw Error('Invalid section id');
    }
  };

  const addToCart = (item) => {
    console.log(item);
  };

  return (
    <View style={[mx1, flex1]}>
      <RestaurantInformation
        title={state.restaurantDetails.title}
        status={state.restaurantDetails.status}
        brandLogo={state.restaurantDetails.brandLogo}
      />

      <SectionList
        sections={state.sections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, section }) => (
          <MenuListItem
            item={item}
            section={section}
            increaseQuantity={(props) => setItemQuantity(props)}
            decreaseQuantity={(props) => setItemQuantity(props)}
            addToCart={(product) => addToCart(product)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={[mt3, material.headline]}>{title}</Text>
        )}
      />
    </View>
  );
};

export default RestaurantDetails;
