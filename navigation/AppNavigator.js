import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Account from '../screens/V-account';
import About from '../screens/V-about';
import Settings from '../screens/V-settings';
import { Ionicons } from '@expo/vector-icons';
import { Switch, Text, View, StyleSheet, Platform, Image, TouchableOpacity } from 'react-native';
import React from 'react'

const AccountNavDrawer = createDrawerNavigator({
  Account,
  Settings,
  About,
},
{
  initialRouteName: 'Account',
});

export default createAppContainer(AccountNavDrawer);