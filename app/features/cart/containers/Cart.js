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
  const { primary, info } = colors;
  const [state, setState] = useImmer({
    orders: [
      {
        title: 'Katık Döner',
        logo: 'https://files.sikayetvar.com/lg/cmp/34/34290.png?1522650125',
        items: [
          {
            details: 'Hatay Usulü Zurna Tavuk Döner Dürüm & Patates Menü',
            quantity: 1,
            price: 5,
          },
          {
            details: 'Hatay Usulü Zurna Tavuk Döner Dürüm & Patates Menü',
            quantity: 1,
            price: 5,
          },
          {
            details: 'Hatay Usulü Zurna Tavuk Döner Dürüm & Patates Menü',
            quantity: 1,
            price: 5,
          },
        ],
      },
      {
        title: 'Katık Döner',
        logo: 'https://files.sikayetvar.com/lg/cmp/34/34290.png?1522650125',
        items: [
          {
            details: 'Hatay Usulü Zurna Tavuk Döner Dürüm & Patates Menü',
            quantity: 1,
            price: 5,
          },
          {
            details: 'Hatay Usulü Zurna Tavuk Döner Dürüm & Patates Menü',
            quantity: 1,
            price: 5,
          },
          {
            details: 'Hatay Usulü Zurna Tavuk Döner Dürüm & Patates Menü',
            quantity: 1,
            price: 5,
          },
        ],
      },
    ],
  });

  return (
    <View style={flex1}>
      <LinearGradient colors={[primary, 'white']} style={flex1}>
        <Card style={[mx2, mt1, pa2, flex1]} elevation={0}>
          <View style={flexGrow}>
            <View style={[flex1, flexGrow]}>
              <ScrollView>
                {state.orders.map((order, index) => (
                  <CartListOrder
                    key={index}
                    items={order.items}
                    title={order.title}
                    logo={order.logo}
                    lastItem={state.orders.length === index + 1}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={[my2, flexShrink]}>
            <Button
              dark
              color={info}
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
