import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, Image, ScrollView } from 'react-native';
import { Card, TextInput, useTheme } from 'react-native-paper';
import { material } from 'react-native-typography';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import * as mainActions from '../../../features/main/redux/actions';
import { LatestOrders, CarrouselItem } from '../components';
import { paddings, margins, flex } from '../../../config/styles';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;
const orders = [
  {
    id: 1,
    title: 'Katık',
    detail:
      'İki büyük ayran, iki soğansız dürüm İki büyük ayran, iki soğansız dürüm asd',
    logo: 'https://files.sikayetvar.com/lg/cmp/34/34290.png?1522650125',
  },
  {
    id: 2,
    title: 'Pizza Hunt',
    detail: '10 adet pizza',
    logo:
      'https://e7.pngegg.com/pngimages/939/682/png-clipart-pizza-hut-logo-symbol-food-mall-promotions-food-logo.png',
  },
  {
    id: 3,
    title: 'Buger King',
    detail: 'Big King Menu',
    logo:
      'https://img2.pngindir.com/20181203/apw/kisspng-logo-burger-king-2-13-hamburger-milkshake-5c05025084ca65.2133457815438321445439.jpg',
  },
  {
    id: 4,
    title: 'Dünya Döner',
    detail: '2 zurna soğansız',
    logo: 'https://www.dunyadoner.com.tr/Upload/File/2020/2/6/mobil2.png',
  },
];

export default function Home() {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const { py1, py2, px2, py3 } = paddings;
  const { my0, mt4, mt6, mx1 } = margins;
  const { flex1 } = flex;
  const [setLoading] = useState(false);
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [entries, setEntries] = useState([
    {
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
    {
      illustration: 'https://i.imgur.com/lceHsT6l.jpg',
    },
  ]);

  //TODO: move logout button to drawer when it's created
  const onLogout = () => {
    setLoading(true);
    auth()
      .signOut()
      .then(() => {
        dispatch(mainActions.logout);
        setLoading(false);
      });
  };

  return (
    <View style={flex1}>
      <ScrollView>
        <LinearGradient
          colors={[colors.primary, colors.background]}
          style={[py2]}>
          <Carousel
            ref={carouselRef}
            data={entries}
            renderItem={(item) => <CarrouselItem item={item} />}
            sliderWidth={windowWidth}
            itemWidth={windowWidth - 64}
            onSnapToItem={(index) => setActiveIndex(index)}
          />
          <Pagination
            dotsLength={entries.length}
            activeDotIndex={activeIndex}
            containerStyle={[py1, my0]}
            dotStyle={styles.paginationDot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </LinearGradient>

        <View style={[mt6]}>
          <Card style={[px2, py3]} theme={{ roundness: 0 }}>
            <TextInput
              label="Search restaurant or food"
              right={
                <TextInput.Icon
                  name="magnify"
                  color={colors.primary}
                  forceTextInputFocus={false}
                />
              }
              theme={{
                colors: { underlineColor: 'transparent' },
              }}
              style={styles.searchInput}
              selectionColor="transparent"
              underlineColor="transparent"
              underlineColorAndroid={'rgba(0,0,0,0)'}
            />
          </Card>
        </View>

        <View style={[mt4, flex1]}>
          <Text style={[mx1, material.display1]}>Latest Orders</Text>
          <LatestOrders orders={orders} />
        </View>
        {/* <Button //TODO: move logout button to drawer when it's created
        loading={loading}
        icon="logout"
        mode="outlined"
        onPress={onLogout}>
        Logout
      </Button> */}
      </ScrollView>
    </View>
  );
}
