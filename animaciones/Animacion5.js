import React, {useState, useEffect} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

const Animacion5 = () => {
  const [animacion] = useState(new Animated.Value(1));

  const presionarBtn = () => {
    Animated.spring(animacion, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const soltarBtn = () => {
    Animated.spring(animacion, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const estiloAnimacion = {
    transform: [{scale: animacion}],
  };

  return (
    <View style={styles.contenedor}>
      <TouchableWithoutFeedback
        onPressIn={() => presionarBtn()}
        onPressOut={() => soltarBtn()}>
        <Animated.View style={[styles.btn, estiloAnimacion]}>
          <Text style={styles.texto}>Iniciar Sesión</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: 'blue',
    height: 80,
    justifyContent: 'center',
    width: 280,
  },
  texto: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Animacion5;
