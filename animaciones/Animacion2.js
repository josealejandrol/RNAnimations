import React, {useState, useEffect} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

const Animacion2 = () => {
  // Valor que contiene la animación
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 360, // Al valor que llega
      duration: 5000, // cantidad de tiempo en llegar
    }).start(); //Iniciar la animación
  }, []);

  return (
    <Animated.View
      style={[
        styles.caja,
        {width: animacion, height: animacion},
      ]}></Animated.View>
  );
};

const styles = StyleSheet.create({
  caja: {
    backgroundColor: 'green',
    height: 100,
    marginTop: 100,
    width: 100,
  },
});

export default Animacion2;
