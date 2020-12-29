import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { color } from 'react-native-reanimated';
import { material } from 'react-native-typography';
import { margins, paddings, AppStyles } from '../../../config/styles';

const { colors } = AppStyles;

const OrderItem = (props) => {
  const { order } = props;
  const { px1, py2 } = paddings;
  const { mx1 } = margins;

  return (
    <View style={[px1, py2, styles.listItemWrapper]}>
      <View style={[mx1, { width: '20%' }]}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: order.logo,
          }}
        />
      </View>
      <View style={{ width: '80%' }}>
        <Text
          ellipsizeMode="clip"
          numberOfLines={1}
          style={[material.title, { width: '100%' }]}>
          {order.title}
        </Text>
        <Text
          ellipsizeMode={'tail'}
          numberOfLines={1}
          style={[
            material.body1,
            { flex: 1, color: colors.greyDarken1, width: '95%' },
          ]}>
          {order.detail}
        </Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  listItemWrapper: {
    borderBottomColor: colors.greyLighten1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  tinyLogo: {
    width: null,
    height: 64,
  },
});
