import React, {useState, useEffect} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

const Animacion5 = () => {
  const [animacion1] = useState(new Animated.Value(0));
  const [animacion2] = useState(new Animated.Value(-50));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animacion2, {
        toValue: -30,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(animacion1, {
        toValue: 60,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animacion2, {
        toValue: 30,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animacion1, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animacion2, {
        toValue: -30,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const estiloAnimacion = {
    transform: [{translateY: animacion1}, {translateX: animacion2}],
  };

  return (
    <View style={styles.contenedor}>
      <Animated.View style={[styles.caja, estiloAnimacion]}>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
    marginTop: 100,
  },
  caja: {
    backgroundColor: 'blue',
    height: 10,
    width: 10,
  },
});

export default Animacion5;
