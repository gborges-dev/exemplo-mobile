import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#131016'
    },
  
    title: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
  
    subTitle: {
      color: '#6b6b6b',
      fontSize: 16,
    },

    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#1f1e25',
      borderRadius: 10,
      color: '#fff',
      padding: 16,
      fontSize: 16,
      marginTop: 15,
      marginRight: 12
    },

    buttonText: {
      color: '#fff',
      fontSize: 24
    },

    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31cf67',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15
    },

    form: {
      width: '100%',
      flexDirection: "row",
      marginTop: 36,
      marginBottom: 42
    },

    listaVaziaText: {
      color: '#fff',
      fontSize: 14,
      textAlign: "center"
    }
  
  })