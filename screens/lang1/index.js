import React, { PureComponent } from 'react';
import style from './style';
import Langbtn from '../../components/Langbtn.js';
import { Ionicons } from '@expo/vector-icons';
import color from '../../constants/Colors';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class Lang1 extends PureComponent {

  static navigationOptions = {
    drawerLabel: 'Log Out',
    drawerIcon: ({ tintColor }) => (
      <Ionicons
        name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
        size={30}
        color={color.blue2}
      />
    ),
  };

  render() {
    return (
      <View style={style.container}>
        <Image style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} source={require('../../assets/images/home.jpeg')} />

        <View style={style.infoContainer}>
          <Ionicons
            name={
              Platform.OS === 'ios'
                ? 'ios-information-circle-outline'
                : 'md-information-circle-outline'
            }
            size={30}
            style={style.info}
            onPress={this.handleAbout}
          />
        </View>
        <View style={style.logoContainer}>
          <Image
            source={
              __DEV__
                ? require('../../assets/images/logo.png')
                : require('../../assets/images/logo.png')
            }
            style={style.logo}
          />
        </View>
        <Text style={style.subhead}>
          A peer to peer translation service that connects you with bilingual
          speakers
        </Text>
        <ScrollView>
          <Langbtn btntext="English" onPress={this.handleLanguageE("English")} />
          <Langbtn btntext="Español" onPress={this.handleLanguageSP("English")} />
          <Langbtn btntext="中文" onPress={this.handleLanguageCH("English")} />
        </ScrollView>
      </View>
    );
  }

  handleAbout = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('About');
  };

  handleLanguageE = (language) => {
    fetch('Heroku link will go here', {
      method: 'POST',
      data: { native: language }
    }).then(() => {
      const {
        navigation: { navigate },
      } = this.props;
      navigate('English');
    })
      .catch(err => console.warn(err))
  }

  handleLanguageSP = (language) => {
    fetch('Heroku link will go here', {
      method: 'POST',
      data: { native: language }
    }).then(() => {
      const {
        navigation: { navigate },
      } = this.props;
      navigate('Spanish');
    })
      .catch(err => console.warn(err))
  };

  handleLanguageCH = (language) => {
    fetch('Heroku link will go here', {
      method: 'POST',
      data: { native: language }
    }).then(() => {
      const {
        navigation: { navigate },
      } = this.props;
      navigate('Chinese');
    })
      .catch(err => console.warn(err))
  }
}

export default Lang1;

