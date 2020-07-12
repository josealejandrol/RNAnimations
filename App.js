import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

//animaciones
import Animacion1 from './animaciones/Animacion1';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Animacion1 />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
