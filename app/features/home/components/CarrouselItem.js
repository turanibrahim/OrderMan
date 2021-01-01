import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { margins } from '../../../config/styles';

const CarrouselItem = ({ item }) => {
  console.log(item.item);
  const { ma1 } = margins;

  return (
    <View style={[ma1, styles.container]}>
      <Image
        style={styles.carrouselAd}
        source={{
          uri: item.item.illustration,
        }}
      />
    </View>
  );
};

export default CarrouselItem;

const styles = StyleSheet.create({
  container: { borderRadius: 15, overflow: 'hidden' },
  carrouselAd: { height: 200, width: '100%', resizeMode: 'stretch' },
});
