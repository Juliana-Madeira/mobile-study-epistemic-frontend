import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../pages/Login/index'
import Signup from '../pages/Signup/index'
import HelloUser from '../pages/HelloUser/index'


//criamos as stacks com o react native
const Stack = createNativeStackNavigator()


//aqui estão todas as rotas, de todas as telas, são as stack screen do react native
//o stack navigator engloba todas as nossas screens
//chamamos os componentes respectivos e tiramos os headers que já vem como true
export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Signup'
                component={Signup}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='HelloUser'
                component={HelloUser}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}