import React, { useMemo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';
import { flex, margins, AppStyles, paddings } from '../../../config/styles';
import { material } from 'react-native-typography';

const CartListOrder = (props) => {
  const { lastItem, logo, title, items } = props;
  console.log(props);
  const {
    flex1,
    flexShrink,
    flexRow,
    justifyCenter,
    alignItemsCenter,
    flexGrow,
    flexRowRev,
  } = flex;
  const { my1, mx2, mx1, ml2 } = margins;
  const { py1 } = paddings;

  const getTotalPrice = useMemo(() => {
    return items.reduce((acc, item) => (acc += item.price), 0);
  }, [items]);

  return (
    <View style={[lastItem ? null : styles.separator, flexRow, py1]}>
      <View style={[my1, mx2]}>
        <Image
          style={styles.restaurantLogo}
          source={{
            uri: logo,
          }}
        />
      </View>
      <View style={flexGrow}>
        <Text style={material.title}>{title}</Text>

        {items.map((order, index) => (
          <View
            key={index}
            style={[flex1, flexRow, justifyCenter, alignItemsCenter]}>
            <View style={[mx1, flexShrink]}>
              <Badge>{order.quantity}</Badge>
            </View>
            <View style={[flex1, flexShrink]}>
              <Text style={[flex1, material.body1]}>{order.details}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={[ml2, flexShrink, flexRowRev, alignItemsCenter]}>
        <Text style={[material.title]}>{getTotalPrice} ₺</Text>
      </View>
    </View>
  );
};

export default CartListOrder;

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: AppStyles.colors.greyDarken1,
  },
  restaurantLogo: {
    width: 48,
    height: 48,
  },
});
