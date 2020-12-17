import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { material, human } from 'react-native-typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { paddings, margins, borderRadiuses } from '../../../config/styles';
import styles from './styles';

const index = () => {
  const { ma2, my2, mx4, mx2, mt8 } = margins;
  const { px2, py4, py3 } = paddings;
  const { br3 } = borderRadiuses;

  return (
    <View style={[my2, styles.profileContainer]}>
      <Image
        source={require('~/assets/man1.png')}
        style={[mt8, styles.profileAvatar]}
      />
      <Text style={material.display1}>İbrahim Turan</Text>

      <View style={[mx4, py3, styles.profileButtonsContainer]}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#E040FB', '#00BCD4']}
          style={[ma2, br3]}>
          <TouchableOpacity style={[px2, py4, styles.profileButton]}>
            <Icon name="person" size={32} color="white" style={mx2} />
            <Text style={human.title2WhiteObject}>Personal Information</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#E040FB', '#00BCD4']}
          style={[ma2, br3]}>
          <TouchableOpacity style={[px2, py4, styles.profileButton]}>
            <CommunityIcon
              name="card-account-details"
              size={32}
              color="white"
              style={mx2}
            />
            <Text style={human.title2WhiteObject}>Address</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#E040FB', '#00BCD4']}
          style={[ma2, br3]}>
          <TouchableOpacity style={[px2, py4, styles.profileButton]}>
            <CommunityIcon
              name="account-key"
              size={32}
              color="white"
              style={mx2}
            />
            <Text style={human.title2WhiteObject}>Change Password</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default index;
