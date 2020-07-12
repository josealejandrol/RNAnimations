import React, {useState, useEffect} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

const Animacion3 = () => {
  // Valor que contiene la animación
  const [animacion] = useState(new Animated.Value(14));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 32, // Al valor que llega
      duration: 2000, // cantidad de tiempo en llegar
      useNativeDriver: false,
    }).start(); //Iniciar la animación
  }, []);

  return (
    <View style={styles.caja}>
      <Animated.Text style={[styles.texto, {fontSize: animacion}]}>
        Hola, Bienvenido
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  caja: {
    marginTop: 100,
  },
  texto: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Animacion3;
