import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import OrderItem from './OrderItem';

const LatestOrders = (props) => {
  const { orders } = props;
  const { colors } = useTheme();

  return (
    <View style={[{ flex: 1, backgroundColor: colors.surface }]}>
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </View>
  );
};

export default LatestOrders;
