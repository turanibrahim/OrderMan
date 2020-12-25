import React from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Card, useTheme } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useImmer } from 'use-immer';
import { CartListOrder } from '../components';
import { flex, margins, paddings } from '../../../config/styles';

const Cart = ({ navigation }) => {
  const { flex1, flexGrow, flexShrink } = flex;
  const { mx2, my2, mt1 } = margins;
  const { pa2 } = paddings;
  const { colors } = useTheme();
  const {
    primary,
    blueDarken1,
    blueLighten1,
    blueLighten2,
    blueLighten3,
    blueLighten4,
    blueLighten5,
    orangeDarken1,
  } = colors;
  const [state, setState] = useImmer({
    orders: [],
  });

  return (
    <View style={flex1}>
      <LinearGradient
        colors={[
          primary,
          blueDarken1,
          blueLighten1,
          blueLighten2,
          blueLighten3,
          blueLighten4,
          blueLighten5,
          'white',
        ]}
        style={flex1}>
        <Card style={[mx2, mt1, pa2, flex1]} elevation={0}>
          <View style={flexGrow}>
            <View style={[flex1, flexGrow]}>
              <ScrollView>
                <CartListOrder bottomBorder />
                <CartListOrder bottomBorder />
                <CartListOrder bottomBorder />
                <CartListOrder />
              </ScrollView>
            </View>
          </View>
          <View style={[my2, flexShrink]}>
            <Button
              dark
              color={orangeDarken1}
              mode="contained"
              onPress={() => navigation.navigate('Checkout')}>
              Checkout
            </Button>
          </View>
        </Card>
      </LinearGradient>
    </View>
  );
};

export default Cart;
