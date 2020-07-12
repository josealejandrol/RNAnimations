import React, {useState, useEffect} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

const Animacion4 = () => {
  // Valor que contiene la animación
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 360, // Al valor que llega
      duration: 1500, // cantidad de tiempo en llegar
      useNativeDriver: true,
    }).start(); //Iniciar la animación
  }, []);

  const interpolacion = animacion.interpolate({
    inputRange: [0, 360], //Entrada que son los valores de arriba
    outputRange: ['0deg', '360deg'], //salida que son los valores para girar
  });

  // Almacenamos los estilos de la animacion en un objeto
  const estiloAnimacion = {
    transform: [{rotate: interpolacion}],
  };

  return (
    <View>
      {/* Asignamos nuestra variable de animacion a nuestro elemento */}
      <Animated.View style={[styles.caja, estiloAnimacion]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  caja: {
    backgroundColor: 'blue',
    height: 100,
    marginTop: 100,
    width: 100,
  },
});

export default Animacion4;
