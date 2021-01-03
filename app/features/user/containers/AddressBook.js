import React from 'react';
import { View, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useImmer } from 'use-immer';
import { GpFAB } from '../../../components/atoms';
import { AddressListItem } from '../components';
import { flex } from '../../../config/styles';
import styles from './styles';

const AddressBook = ({ navigation }) => {
  const { flex1 } = flex;
  const { colors } = useTheme();

  const [state] = useImmer({
    addresses: [
      {
        title: 'Home',
        address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        city: {
          id: 14,
          name: 'Bolu',
        },
        province: {
          id: 1,
          name: 'Merkez',
        },
        isDefault: true,
      },
      {
        title: 'Job',
        address: 'Fusce pretium, nisl vel malesuada hendrerit, massa est cursus erat, in volutpat neque odio quis ligula.',
        city: {
          id: 14,
          name: 'Sakarya',
        },
        province: {
          id: 1,
          name: 'Serdivan',
        },
        isDefault: false,
      },
    ],
  });

  return (
    <View style={flex1}>
      <ScrollView>
        {state.addresses.map((address, index) => (
          <AddressListItem
            title={address.title}
            address={address.address}
            city={address.city.name}
            province={address.province.name}
            isDefault={address.isDefault}
            key={index}
          />
        ))}
      </ScrollView>

      <GpFAB
        icon="plus"
        style={styles.fab}
        backgroundColor={colors.success}
        color="white"
        onPress={() => navigation.navigate('CreateAddress')}
      />
    </View>
  );
};

export default AddressBook;
