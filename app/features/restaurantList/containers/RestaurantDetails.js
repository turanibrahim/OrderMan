import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { material } from 'react-native-typography';
import { MenuListItem } from '../components';
import { flex, margins } from '../../../config/styles';

const RestaurantDetails = () => {
  const { flex1 } = flex;
  const { mx1, mt3 } = margins;
  const sections = [
    {
      title: 'Featured',
      data: [
        {
          id: 0,
          title: 'Big King Menu',
          description:
            "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.",
          price: '15',
          quantity: 1,
        },
        {
          id: 1,
          title: 'Chicken King Menu',
          description:
            "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.",
          price: '13',
          quantity: 1,
        },
        {
          id: 2,
          title: 'Poor Menu :(',
          description:
            "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.",
          price: '10',
          quantity: 1,
        },
      ],
    },
  ];

  return (
    <View style={[mx1, flex1]}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MenuListItem item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={[mt3, material.headline]}>{title}</Text>
        )}
      />
    </View>
  );
};

export default RestaurantDetails;
