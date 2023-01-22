//sendo mobile as estilizações usadas no react native podem ficar no mesmo arquivo js o que facilita muito o trabalho
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { useNavigation } from '@react-navigation/native'

import { Context } from '../../context/authContext';

export default function Login (){
  //states que mudam conforme usuario coloca nos inputs, no login temos email e senha
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [display, setDisplay] = useState('none')     //state para quando a senha ou email estao invalidos ou nao preenchidos
  
  const { loginUser } = useContext(Context)

  //navegação que teremos pelo app
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <LinearGradient 
        colors={['#7543A9', '#A346AC']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.gradient}
      >
        <View style={styles.form}>
          <View style={styles.logotipo}/>
          {/* <Image 
            style={styles.logotipo}
            source={require('../../../assets/teste-logo.jpg')}
            /> */}
          <Text style={styles.title}>epistemic</Text>
          <View>
            <Text style={styles.loginMsg(display)}>Email ou senha inválidos</Text>
          </View>
          <TextInput
            placeholder='E-mail'
            style={styles.input}
            onChangeText={(email) => {setEmail(email)}}
            value={email}
            autoCapitalize='none'
          />
          <TextInput
            placeholder='Senha'
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(password) => {setPassword(password)}}
            value={password}
            autoCapitalize='none'
        />
        {/* no insomnia e postman as funcionalidades de login estão rodando */}
          <TouchableOpacity style={styles.buttonLogin} onPress={() => 
            // (loginUser(email, password), 
            setDisplay('flex')          
            }>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonForgotPassword}>
            <Text style={styles.linkText}>Esqueceu sua senha? Clique Aqui</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.linkText}>Não tem uma conta? Cadastre-se</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textVersion}>
          0.0.56
        </Text>
        <View style={styles.footerLogin}>
          <Text style={styles.textContainer}>
           Termos de uso
          </Text>
       </View>
      </LinearGradient>
    </View>
  )
}

//estilização do app
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
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: '#7543A9',
    backgroundColor: "#7543A9",
    borderWidth: 1,
    marginTop: 25
  },
  form: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 150,
    width: 350,
    backgroundColor: '#DDC9EB',
    borderRadius: 25
  },
  title: {
    fontSize: 24,
    color: '#7543A9',
    marginBottom: 40
  },
  textContainer: {
    color: '#FFF',
    fontSize: 14,
  },
  input: {
    width: 300,
    height: 55,
    padding: 15,
    textAlign: 'left',
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: '#E5E5E5',
  },
  textVersion: {
    color: '#fff',
    fontSize: 10,
    marginBottom: 125
  },
  buttonLogin: {
    width: 230,
    height: 50,
    backgroundColor: '#6B52A3',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16
  },
  linkText: {
    marginBottom: 20,
    color: '#6B52A3'
  }, 
  loginMsg: (text = 'none') => ({
    color: 'red',
    fontSize: 16,
    marginTop: -20,
    marginBottom: 10,
    display: text
  })
  
});