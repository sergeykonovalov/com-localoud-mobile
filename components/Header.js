import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/colors';

const Header = props => {
  return(
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    width: '100%',
    height: 90,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'open-sans-bold'
  }
});

export default Header;
