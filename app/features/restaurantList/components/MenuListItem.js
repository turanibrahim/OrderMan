import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Card, IconButton, TextInput } from 'react-native-paper';
import { material } from 'react-native-typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { flex, paddings, margins, AppStyles } from '../../../config/styles';

const { colors } = AppStyles;

const MenuListItem = (props) => {
  const { item } = props;
  const { flex1, flexRow, justifySB, justifyCenter, alignItemsCenter } = flex;
  const { mx1, mx2, my2 } = margins;
  const { pa2, py1 } = paddings;
  const [isDetailsVisible, setDetailsVisibility] = useState(false);
  const { title, price, quantity, description } = item;

  return (
    <Card style={[my2, pa2]}>
      <TouchableOpacity onPress={() => setDetailsVisibility(!isDetailsVisible)}>
        <View
          style={[
            py1,
            flexRow,
            justifySB,
            isDetailsVisible && styles.separator,
          ]}>
          <Text style={[mx1, material.title, flex1]}>{title}</Text>
          <View style={[flexRow, justifyCenter, alignItemsCenter]}>
            <Text style={[mx1, material.title, { color: colors.info }]}>
              {price} TL
            </Text>
            <Icon
              name={
                isDetailsVisible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'
              }
              size={24}
              color={colors.primary}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isDetailsVisible && (
        <View style={[mx2, py1, flexRow, justifySB]}>
          <Text style={material.body1}>{description}</Text>
        </View>
      )}

      <View style={[my2, flexRow, alignItemsCenter, justifySB]}>
        <View
          style={[
            mx1,
            flex1,
            flexRow,
            justifyCenter,
            alignItemsCenter,
            styles.quantityWrapper,
          ]}>
          <IconButton
            mode="contained"
            icon="plus"
            size={24}
            color={colors.primary}
          />

          <TextInput
            dense
            disabled
            style={styles.transparentInput}
            underlineColor="transparent"
            value={quantity.toString()}
          />

          <IconButton
            mode="contained"
            icon="minus"
            size={24}
            color={colors.primary}
          />
        </View>

        <View style={[mx1, flex1, justifyCenter]}>
          <Button
            style={[flex1, justifyCenter]}
            mode="contained"
            onPress={console.log('pressed')}>
            Add To Cart
          </Button>
        </View>
      </View>
    </Card>
  );
};

export default MenuListItem;

const styles = StyleSheet.create({
  quantityWrapper: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.secondary,
  },
  transparentInput: { backgroundColor: 'transparent' },
  separator: {
    color: colors.info,
    borderBottomWidth: 0.5,
    borderColor: colors.primary,
  },
});
