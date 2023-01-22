//Usei o axios para fazer requisições a nossa Api de backend
//também nas rotas do front
import axios from 'axios'


//acessar api 
//nao usamos localhost como na web e sim, o endereço que aparece no expo, no caso, o meu estava aparecendo esse abaixo

const api = axios.create({
        baseURL: 'https://192.168.0.16:3000'   //terminal  ipconfig e pegar o numero do ipv4 mobile nao usa localhost
    }) 

  
export default api;