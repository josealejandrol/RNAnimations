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
import Animacion2 from './animaciones/Animacion2';
import Animacion3 from './animaciones/Animacion3';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Animacion3 />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
