import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { material } from 'react-native-typography';
import { margins, flex, AppStyles } from '../../../config/styles';

const RestaurantListItem = (props) => {
  const { brandLogo, title, category, minOrderPrice, onPress } = props;
  const { ma1, mr1, my1 } = margins;
  const { flexShrink, flexGrow, flexRow, flex1 } = flex;

  return (
    <Card style={[ma1, styles.overflowHidden]} onPress={onPress}>
      <View style={[flexRow, flexShrink]}>
        <View style={[mr1, flexShrink]}>
          <Image
            style={[flex1, styles.brandLogo]}
            source={{
              uri: brandLogo,
            }}
          />
        </View>

        <View style={flexGrow}>
          <Text style={material.headline}>{title}</Text>
          <View style={[my1, flexRow, flexGrow]}>
            <Text style={[mr1, material.caption]}>{category}</Text>
            <Text style={[material.caption, styles.minimumOrderPriceLabel]}>
              {`min price $${minOrderPrice}`}
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default RestaurantListItem;

const styles = StyleSheet.create({
  overflowHidden: { overflow: 'hidden' },
  brandLogo: { width: 60, height: '100%' },
  minimumOrderPriceLabel: {
    fontWeight: '700',
    color: AppStyles.colors.primary,
    fontStyle: 'italic',
  },
});
