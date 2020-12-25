import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, useTheme } from 'react-native-paper';
import { material } from 'react-native-typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { flex, margins, paddings } from '../../../config/styles';

const {
  flex1,
  flexRow,
  alignItemsCenter,
  justifyStart,
  alignItemsEnd,
  justifyEnd,
  alignContentSpaceBetween,
  justifySB,
} = flex;

const AddressListItem = (props) => {
  const { title, address, city, province, isDefault } = props;
  const { mx2, my1, mx1, mr2 } = margins;
  const { pa2 } = paddings;
  const { colors } = useTheme();

  return (
    <Card style={[mx2, my1, pa2]}>
      <View style={styles.container}>
        <View style={flexRow}>
          <CommunityIcon
            name="card-account-details-outline"
            size={32}
            style={mx1}
          />
          <Text style={material.title}>{title}</Text>
        </View>

        <Icon
          name={isDefault ? 'star' : 'star-outline'}
          size={28}
          color={colors.orangeDarken1}
        />
      </View>

      <View style={[flexRow, justifyStart, alignItemsCenter]}>
        <Icon name="emoji-transportation" size={28} />
        <Text style={[material.body, flex1]}>{address}</Text>
      </View>

      <View style={[mr2, flexRow, justifyEnd, alignItemsEnd]}>
        <Text style={[material.body2]}>
          {province} / {city}
        </Text>
      </View>
    </Card>
  );
};

export default AddressListItem;

const styles = StyleSheet.create({
  container: {
    ...flexRow,
    ...alignItemsCenter,
    ...alignContentSpaceBetween,
    ...justifySB,
  },
});
