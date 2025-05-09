import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Somos um grupo que visa de ajudar a orgalizar uma lista de personagens de anime :]
      
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#0D0D0D'
  },
  text:{
    color: '#9032bb',
    fontSize: 25,
    fontFamily: 'Arima',
  },
  btn_Link: {
    color: 'pink',
    fontSize: 35,
    textDecorationLine: 'underline',
  }

})

