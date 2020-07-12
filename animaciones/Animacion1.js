import React, {useState, useEffect} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

const Animacion1 = () => {
  // Valor que contiene la animación
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 1, // Al valor que llega
      duration: 5000, // cantidad de tiempo en llegar
      useNativeDriver: true,
    }).start(); //Iniciar la animación
  }, []);

  return (
    <Animated.View style={[styles.contenedor, {opacity: animacion}]}>
      <Text style={styles.texto}>Soy una animacion con opacidad</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 100,
  },
  texto: {
    fontSize: 22,
    textAlign: 'center',
  },
});

export default Animacion1;
