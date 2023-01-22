// Utilizado no projeto: React Native e algumas libs, React.js, Node, JavaScript, Expo, CSS, instalado Expo Go no celular 
// para acompanhamento do projeto em tela em tempo real

import React, { useContext } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import Routes from './src/routes';

//Usei Context do React para realizar o projeto
import { Provider } from './src/context/authContext';
import { Context } from './src/context/authContext';


const App = () => {
  const data = useContext(Context)

  //A status bar que estou usando é do react-native, temos opção de usar do próprio expo
  //navigation container contém todas as nossas telas que estão no arquivo de routes
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#000' barStyle='light-content'/>
      <Routes/>
    </NavigationContainer>
  );
}

//usando o provider, nosso provedor do principal arquivo que é o App
export default () => {
  return(
    <Provider>
      <SafeAreaProvider>
        <App/>
      </SafeAreaProvider>
    </Provider>
  )
}
