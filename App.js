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
import Animacion4 from './animaciones/Animacion4';
import Animacion5 from './animaciones/Animacion5';
import Animacion6 from './animaciones/Animacion6';
import Animacion7 from './animaciones/Animacion7';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Animacion7 />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
