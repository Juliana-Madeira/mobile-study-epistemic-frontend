//automatizacao da criacao do Context
//criaçao do Context api
import React, { createContext, useReducer } from 'react'

export default (reducer, actions, initialState) => {

    const Context = createContext()

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState)    //state e o dispatch
    
        const customFunctions = {}
        Object.keys(actions).forEach(
            (key) => (customFunctions[key] = actions[key](dispatch))
        )

        return (
            <Context.Provider value={{state, ...customFunctions}}>
                {children}
            </Context.Provider>
        )
    }
    return { Context, Provider }
}