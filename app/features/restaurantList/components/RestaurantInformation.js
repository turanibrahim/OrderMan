import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Card, useTheme } from 'react-native-paper';
import { material } from 'react-native-typography';
import { margins, flex } from '../../../config/styles';

const RenderStatus = (props) => {
  const { colors } = useTheme();

  const STATUS_COLORS = [
    {
      code: 'available',
      name: 'Available',
      color: colors.success,
    },
    {
      code: 'crowded',
      name: 'Crowded',
      color: colors.danger,
    },
    {
      code: 'full',
      name: 'Almost Full',
      color: colors.error,
    },
  ];

  const getColor = (status) =>
    STATUS_COLORS.find((item) => item.code === status).color;

  const getName = (status) =>
    STATUS_COLORS.find((item) => item.code === status).name;

  return (
    <Text style={[material.title, { color: getColor(props.status) }]}>
      {getName(props.status)}
    </Text>
  );
};

const RestaurantInformation = (props) => {
  const { mt2, ma2 } = margins;
  const { flex1, flex3, flexRow, flexColumn } = flex;
  const { brandLogo, title, status } = props;

  return (
    <Card style={[mt2]}>
      <View style={flexRow}>
        <Image
          style={[flex1, styles.brandLogo]}
          source={{
            uri: brandLogo,
          }}
        />

        <View style={[flex3, flexColumn, ma2]}>
          <Text style={[material.headline]}>{title}</Text>
          <View style={flexRow}>
            <Text style={[material.title]}>Status: </Text>
            <RenderStatus status={status} />
          </View>
        </View>
      </View>
    </Card>
  );
};

export default RestaurantInformation;

const styles = StyleSheet.create({
  brandLogo: { width: 68, height: '100%' },
});
