import React from 'react';
import { View, Text, Image } from 'react-native';
import { Badge, useTheme } from 'react-native-paper';
import { flex, margins } from '../../../config/styles';
import { material } from 'react-native-typography';

const CartListOrder = (props) => {
  const {
    flex1,
    flexShrink,
    flexRow,
    justifyCenter,
    alignItemsCenter,
    flexGrow,
  } = flex;
  const { my1, mx2, mx1, ml2 } = margins;
  const { pl2 } = margins;
  const { colors } = useTheme();
  const { greyDarken1 } = colors;

  return (
    <View
      style={[
        props.bottomBorder
          ? { borderBottomWidth: 0.5, borderBottomColor: greyDarken1 }
          : null,
        {
          flexDirection: 'row',
          paddingVertical: 4,
        },
      ]}>
      <View style={[my1, mx2]}>
        <Image
          style={{
            width: 48,
            height: 48,
          }}
          source={{
            uri: 'https://files.sikayetvar.com/lg/cmp/34/34290.png?1522650125',
          }}
        />
      </View>
      <View style={flexGrow}>
        <Text style={material.title}>Katık Döner</Text>
        <View style={[flex1, flexRow, justifyCenter, alignItemsCenter]}>
          <View style={[mx1, flexShrink]}>
            <Badge>1</Badge>
          </View>
          <View style={[flex1, flexShrink]}>
            <Text style={[flex1, material.body1]}>
              Hatay Usulü Zurna Tavuk Döner Dürüm & Patates Menü
            </Text>
          </View>
        </View>

        <View style={[flex1, flexRow, justifyCenter, alignItemsCenter]}>
          <View style={[mx1, flexShrink]}>
            <Badge>1</Badge>
          </View>
          <View style={[flex1, flexShrink]}>
            <Text style={[flex1, material.body1]}>
              Hatay Usulü Zurna Tavuk Döner Dürüm & Patates Menü
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          ml2,
          flexShrink,
          { flexDirection: 'row-reverse', alignItems: 'center' },
        ]}>
        <Text style={[material.title]}>40 ₺</Text>
      </View>
    </View>
  );
};

export default CartListOrder;
