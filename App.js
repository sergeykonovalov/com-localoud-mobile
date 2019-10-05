import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GuideContent from './assets/data/guide-content';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Header from './components/Header';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/open-sans-regular.ttf'),
    'open-sans-bold': require('./assets/fonts/open-sans-bold.ttf')
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded) {
    return(
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title={GuideContent.meta.title} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
