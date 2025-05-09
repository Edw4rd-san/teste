import { View, StyleSheet } from "react-native";
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{ title:'Ops, Página Não Encontrada...' }}/>
    <View style={styles.container}>
      <Link href="/(tabs)/about" style= {styles.btn_Link}>
        Volte para a Página Inicial.
      </Link>
    </View>
    </>
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
    color: '#9032bb'
  },

  btn_Link: {
    color: '#9032bb',
    fontSize: 50,
    textDecorationLine: 'underline',
    fontFamily: 'cyberpunk',
  }

})
