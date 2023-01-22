//usei useContext, Context API para realização do projeto, nao é algo que seja obrigatorio, é só ao gosto do desenvolvedor
import createContext from "./createContext";

import api from '../utils/api.utils'

const initialState = {}

const reducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

//apenas uma função de teste
const teste = (dispatch) => {
    return (args) => {
        console.log('teste');
    }
}


//signup
//função criada para criação do usuario e sua rota no front do app
const createUser = (dispatch) => {
    return async (email, password) => {
        try {
            const { data } = await api.post('/signup', {
                email: email, 
                password: password
            })
            return data
        } catch (error) {
            console.log({...error})
        }
    }
}


//login
//função criada para login do usuario e sua rota no front do app
const loginUser = (dispatch) => {
    return async (email, password) => {
        try {
            const { data } = await api.post('/login', {
                email: email, 
                password: password,
            })
            // await AsyncStorage.setItem('id', data.token)
            // const id = await AsyncStorage.getItem('id')
            
        } catch (error) {
            console.log({...error})
        }
    }
}


export const { Context, Provider } = createContext(
    reducer, 
    {teste, createUser, loginUser},   //actions aqui 
    initialState
);