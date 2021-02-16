import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import todayImage from '../../assets/imgs/today.jpg';
import weekImage from '../../assets/imgs/week.jpg';
import monthImage from '../../assets/imgs/month.jpg';
import tomorrowImage from '../../assets/imgs/tomorrow.jpg';

import commonStyles from '../../commonStyles';

import moment from 'moment';
import 'moment/locale/pt-br';

const Greetings = props => {
  const today = moment()
    .locale('pt-br')
    .format('ddd, D [de] MMMM');
  const image = props.priority
    ? props.priority === 1
      ? todayImage
      : props.priority === 2
      ? tomorrowImage
      : props.priority === 3
      ? weekImage
      : monthImage
    : todayImage;
  return (
    <ImageBackground source={image} style={styles.background}>
      <View style={styles.iconBar}>
        <TouchableOpacity onPress={() => props.toggleFilter()}>
          <Icon
            name={props.showDoneTasks ? 'eye' : 'eye-slash'}
            size={20}
            color={commonStyles.colors.secondary}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Hoje</Text>
        <Text style={styles.subtitle}>{today}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 3,
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
  iconBar: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'flex-end',
    marginTop: Platform.OS === 'ios' ? 40 : 10,
  },
});

export default Greetings;
