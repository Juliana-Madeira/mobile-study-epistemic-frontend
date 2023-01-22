//fiz essa tela apenas para teste
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


export default function HelloUser() {
  return (
    <View style={styles.container}>
      <LinearGradient
       colors={['#6C73D6', '#6E90D6']}
       start={{x: 0, y: 0}}
       end={{x: 0, y: 1}}
       style={styles.gradient}
       >
      <View style={styles.logotipo}/>
      <View>
        <View style={styles.user}/>
        <Text style={styles.nameUser}>Olá User</Text>
        <Text style={styles.textContainer}>Quarta-feira, 7 de novembro de 2023</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.buttonLogin} onPress={() => {
          navigation.navigate('HelloUser')
        }}>
          <Text style={styles.text}>Adicionar uma crise</Text>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      </LinearGradient>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gradient: {
    width: 600,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logotipo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: '#FFF',
    backgroundColor: "#FFF",
    borderWidth: 1,
    marginTop: 25
  },
  user: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#FFF',
    backgroundColor: "#FFF",
    borderWidth: 1,
    marginRight: 200,
    marginTop: -140
  },
  nameUser: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30
  },
  textContainer: {
    color: '#FFF',
    fontSize: 14,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 30
  }, 
  text: {
    fontSize: 14,
    color: '#FFF'
  }
})